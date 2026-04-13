import { NextRequest, NextResponse } from 'next/server';
import { Storage } from 'megajs';

let cachedStorage: any = null;

async function getMegaStorage() {
  if (!cachedStorage) {
    console.log('🔐 正在生成MEGA会话...');
    const email = process.env.MEGA_EMAIL || '';
    const password = process.env.MEGA_PASSWORD || '';
    
    if (!email || !password) {
      throw new Error('MEGA credentials not configured');
    }
    
    cachedStorage = await new Storage({
      email: email,
      password: password,
    }).ready;
    console.log('✅ MEGA会话生成成功');
  }
  return cachedStorage;
}

export async function GET(request: NextRequest) {
  try {
    const storage = await getMegaStorage();
    
    // 获取会话密钥
    const sessionId = storage.api.sid;
    
    if (!sessionId) {
      throw new Error('Failed to get session ID');
    }
    
    console.log('📋 生成临时会话密钥:', sessionId);
    
    return NextResponse.json({
      success: true,
      sessionId: sessionId,
      expiresAt: new Date(Date.now() + 3600000).toISOString() // 1小时过期
    });
  } catch (error: any) {
    console.error('❌ 会话生成失败:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate session' },
      { status: 500 }
    );
  }
}
