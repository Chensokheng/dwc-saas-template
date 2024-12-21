import { createClient } from "@supabase/supabase-js";
import { Database } from "../../../database.types";

export const createSupabaseAdmin = () =>
  createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SERVICE_ROLE_KEY!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
