import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 检查环境变量是否存在且有效
let supabaseInstance;
if (supabaseUrl && supabaseAnonKey && (supabaseUrl.startsWith('http://') || supabaseUrl.startsWith('https://'))) {
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
} else {
    // 当 Supabase 配置无效时，返回一个模拟的客户端
    supabaseInstance = {
      from: () => ({
        select: () => Promise.resolve({ data: [], error: null }),
        insert: () => Promise.resolve({ data: null, error: null }),
        delete: () => ({
          eq: () => Promise.resolve({ error: null })
        }),
        eq: () => ({
          delete: () => Promise.resolve({ error: null })
        })
      }),
      storage: {
        from: () => ({
          upload: () => Promise.resolve({ data: null, error: null }),
          getPublicUrl: () => Promise.resolve({ data: { publicUrl: '#' }, error: null }),
          remove: () => Promise.resolve({ error: null })
        })
      }
    } as any;
}

export const supabase = supabaseInstance;
