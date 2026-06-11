let _client = null

export async function getSupabase() {
  if (!_client) {
    const { createClient } = await import('@supabase/supabase-js')
    _client = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    )
  }
  return _client
}
