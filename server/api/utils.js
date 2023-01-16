import { createClient } from '@supabase/supabase-js'

export const bypassRls = () => {
    const config = useRuntimeConfig()
    // createClient(config.supabaseUrl, config.serviceKey)
}