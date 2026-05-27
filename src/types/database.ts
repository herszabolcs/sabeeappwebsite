export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      demo_requests: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          property_name: string | null
          room_count: string | null
          message: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          property_name?: string | null
          room_count?: string | null
          message?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          property_name?: string | null
          room_count?: string | null
          message?: string | null
        }
        Relationships: []
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}
