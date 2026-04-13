import { NextRequest, NextResponse } from 'next/server';
import { Storage } from 'megajs';
import { Readable } from 'stream';

// 全局缓存 Storage 实例，避免每次请求都重新登录
let cachedStorage: any = null;

async function getMegaStorage() {
  if (!cachedStorage) {
    console.log('🔐 正在登录 MEGA...');
    
    // 使用邮箱密码登录
    const email = process.env.MEGA_EMAIL || '';
    const password = process.env.MEGA_PASSWORD || '';
    
    console.log('环境变量状态:');
    console.log('MEGA_EMAIL:', email ? '已设置' : '未设置');
    console.log('MEGA_PASSWORD:', password ? '已设置' : '未设置');
    
    if (email && password) {
      console.log('使用邮箱密码登录...');
      cachedStorage = await new Storage({
        email: email,
        password: password,
      }).ready;
    } else {
      throw new Error('MEGA credentials not configured');
    }
    
    console.log('✅ MEGA 登录成功');
  }
  return cachedStorage;
}

export async function POST(request: NextRequest) {
  try {
    // 1. 解析表单数据
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    
    if (!file) {
      return NextResponse.json({ error: '未提供文件' }, { status: 400 });
    }

    console.log(`📁 收到文件: ${file.name}, 大小: ${file.size} 字节`);

    // 2. 获取 MEGA 存储实例
    const storage = await getMegaStorage();

    // 3. 创建上传流
    console.log('⬆️ 开始上传到 MEGA...');
    const upload = storage.upload({
      name: file.name,
      size: file.size
    });

    // 4. 获取 Web Stream 并转换为 Node Stream
    const webStream = file.stream();
    const nodeStream = Readable.fromWeb(webStream as any);
    
    // 5. 使用管道对接，自动处理背压
    nodeStream.pipe(upload);

    // 6. 等待上传完成
    const result = await upload.complete;
    console.log('✅ 上传成功，文件ID:', result.fileId);

    // 7. 生成分享链接
    const shareLink = `https://mega.nz/file/${result.fileId}#${result.key.toString('base64url')}`;
    
    return NextResponse.json({ 
      success: true, 
      link: shareLink,
      fileId: result.fileId 
    });
  } catch (error: any) {
    // 详细日志
    console.error('❌ MEGA 上传失败');
    console.error('错误消息:', error.message);
    console.error('错误代码:', error.code);
    console.error('完整堆栈:', error.stack);
    console.error('完整错误对象:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
    
    // 特殊处理认证错误
    if (error.code === 'EMFAREQUIRED') {
      return NextResponse.json(
        { 
          error: 'MFA认证需要，请在MEGA网页版登录并获取会话密钥', 
          code: error.code 
        },
        { status: 401 }
      );
    }
    
    return NextResponse.json(
      { error: error.message || 'Upload failed', code: error.code },
      { status: 500 }
    );
  }
}

