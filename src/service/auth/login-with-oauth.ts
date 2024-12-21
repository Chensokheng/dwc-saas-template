import { createClient } from "@/lib/supabase/client";

export const loginWithOAuth = async (provider: "google" | "github", next = "/") => {
  const supabase = createClient();
  await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.origin}/auth/callback?next=${next}`,
    },
  });
};
