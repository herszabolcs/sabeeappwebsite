import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '../types/database'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase: SupabaseClient<Database> | null = isSupabaseConfigured
  ? createClient<Database>(supabaseUrl, supabaseAnonKey)
  : null

export async function submitDemoRequest(data: {
  name: string
  email: string
  property_name?: string
  room_count?: string
  message?: string
}) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.')
  }

  const { error } = await supabase.from('demo_requests').insert({
    name: data.name,
    email: data.email,
    property_name: data.property_name ?? null,
    room_count: data.room_count ?? null,
    message: data.message ?? null,
  })

  if (error) throw error
}
