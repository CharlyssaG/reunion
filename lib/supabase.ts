import { createClient } from '@supabase/supabase-js'

const url  = process.env.NEXT_PUBLIC_SUPABASE_URL  ?? ''
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

// Client is only valid at runtime when env vars are present.
// The vote page is force-dynamic so this is never called at build time.
export const supabase = createClient(url, anon)
