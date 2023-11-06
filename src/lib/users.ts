import {createClient} from '@supabase/supabase-js'
import {VUE_APP_SUPABASE_URL, VUE_APP_SUPABASE_KEY  } from '../../envRegistration'

export const supabase = createClient(
    VUE_APP_SUPABASE_URL ,
    VUE_APP_SUPABASE_KEY 
 )