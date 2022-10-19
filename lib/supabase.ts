import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dkfldbqxdqdqxjimbydr.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrZmxkYnF4ZHFkcXhqaW1ieWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYxMDYxMTQsImV4cCI6MTk4MTY4MjExNH0.zqYkIGkJqM8_NKOAxp0-Wx_TkNAZRGlr_KVkc6P70Fo"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})