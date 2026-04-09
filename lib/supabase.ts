import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 定义模拟 supabase 实例的类型
interface MockSupabaseClient {
  from: (table: string) => {
    select: () => Promise<{ data: unknown[]; error: unknown }>;
    insert: () => Promise<{ data: unknown; error: unknown }>;
    delete: () => {
      eq: (column: string, value: unknown) => Promise<{ error: unknown }>;
    };
    eq: (column: string, value: unknown) => {
      delete: () => Promise<{ error: unknown }>;
    };
  };
  storage: {
    from: (bucket: string) => {
      upload: (path: string, file: Blob) => Promise<{ data: unknown; error: unknown }>;
      getPublicUrl: (path: string) => Promise<{ data: { publicUrl: string }; error: unknown }>;
      remove: (paths: string[]) => Promise<{ error: unknown }>;
    };
  };
}

// 检查环境变量是否存在且有效
let supabaseInstance: SupabaseClient | MockSupabaseClient;
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
    };
}

export const supabase = supabaseInstance;
