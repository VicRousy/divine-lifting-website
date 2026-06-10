import { describe, it, expect, vi } from 'vitest'

vi.mock('@supabase/supabase-js', () => ({
  createClient: vi.fn(() => ({ from: vi.fn() })),
}))

describe('getSupabase', () => {
  it('returns a supabase client', async () => {
    const { getSupabase } = await import('./supabaseClient')
    const client = getSupabase()
    expect(client).toBeTruthy()
    expect(typeof client.from).toBe('function')
  })

  it('returns the same cached instance on repeated calls', async () => {
    const { getSupabase } = await import('./supabaseClient')
    const a = getSupabase()
    const b = getSupabase()
    expect(a).toBe(b)
  })
})
