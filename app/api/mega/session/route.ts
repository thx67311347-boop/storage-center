import { NextRequest, NextResponse } from 'next/server';
import { getMegaStorage } from '@/app/lib/mega-storage';

export async function GET(request: NextRequest) {
  try {
    const storage = await getMegaStorage();
    
    // 修复：使用 storage.sid 而不是 storage.api.sid
    const sid = storage.sid;
    
    if (!sid) {
      return NextResponse.json(
        { success: false, error: 'No valid MEGA session' },
        { status: 500 }
      );
    }
    
    console.log('📋 生成临时会话密钥:', sid);
    
    return NextResponse.json({
      success: true,
      sid: sid, // 统一使用 sid 字段名，与 megajs 保持一致
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24小时过期
    });
  } catch (error: any) {
    console.error('❌ 会话生成失败:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate session' },
      { status: 500 }
    );
  }
}
