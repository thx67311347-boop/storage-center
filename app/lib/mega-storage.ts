import { Storage } from 'megajs';

// 全局变量（注意：在 Next.js 开发环境下，热重载可能导致模块重新执行，建议使用 globalThis 持久化）
interface MegaGlobal {
  storage: any | null;
  sid: string | null;
  lastCheck: number;
}

const globalForMega = globalThis as unknown as { mega: MegaGlobal };

if (!globalForMega.mega) {
  globalForMega.mega = { storage: null, sid: null, lastCheck: 0 };
}

const state = globalForMega.mega;

// 会话有效性检查的超时时间（毫秒），避免每次请求都调用 account 接口
const CHECK_INTERVAL = 5 * 60 * 1000; // 5分钟检查一次

async function isSessionValid(storage: any): Promise<boolean> {
  if (!storage || !storage.sid) return false;

  // 避免过于频繁检查
  if (Date.now() - state.lastCheck < CHECK_INTERVAL) return true;

  try {
    // 轻量级请求：获取账户信息（或任意需要认证的API）
    await storage.getAccountInfo();
    state.lastCheck = Date.now();
    return true;
  } catch (err: any) {
    // 常见失效错误：-9 (ESID)，-2 (ENOENT) 等
    if (err.code === -9 || err.message?.includes('sid')) {
      console.warn('会话已失效，需要重新登录');
      return false;
    }
    // 其他错误可能是临时网络问题，仍视为有效（避免频繁重登）
    console.warn('会话检查出现非致命错误', err.message);
    return true;
  }
}

export async function getMegaStorage(): Promise<any> {
  // 1. 尝试复用现有会话
  if (state.storage && await isSessionValid(state.storage)) {
    console.log('✅ 复用有效 MEGA 会话');
    return state.storage;
  }

  // 2. 如果有 sid 但 storage 对象丢失，尝试用 sid 重建
  if (state.sid) {
    try {
      console.log('🔑 尝试使用存储的 SID 重建会话...');
      // @ts-ignore - sid is a valid property for megajs storage initialization
      const storage = await new Storage({ sid: state.sid, keepalive: true }).ready;
      // 验证重建后的会话是否有效
      await storage.getAccountInfo();
      state.storage = storage;
      state.lastCheck = Date.now();
      console.log('✅ SID 重建成功');
      return storage;
    } catch (err: any) {
      console.warn('SID 重建失败，将使用密码登录', err.message);
      state.sid = null;
      state.storage = null;
    }
  }

  // 3. 使用邮箱密码重新登录
  console.log('🔐 使用密码登录 MEGA 以获取新会话...');
  
  const email = process.env.MEGA_EMAIL;
  const password = process.env.MEGA_PASSWORD;
  
  if (!email || !password) {
    throw new Error('MEGA_EMAIL or MEGA_PASSWORD environment variables are not set');
  }
  
  const storage = await new Storage({
    email: email,
    password: password,
    keepalive: true,
    autologin: true,   // 自动处理 token 刷新
  }).ready;

  // 保存 sid 和 storage
  state.storage = storage;
  state.sid = storage.sid;
  state.lastCheck = Date.now();
  console.log(`✅ 登录成功，SID 前缀: ${storage.sid.substring(0, 10)}...`);
  return storage;
}

// 可选：提供一个强制重置会话的方法（用于处理密码变更等情况）
export function resetMegaSession() {
  state.storage = null;
  state.sid = null;
  state.lastCheck = 0;
}
