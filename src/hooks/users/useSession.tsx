import { createClient } from "@/lib/supabase/client";
import { useQuery } from "@tanstack/react-query";

export default function useSession() {
  return useQuery({
    queryKey: ["get-user-session"],
    queryFn: async () => {
      const supabase = createClient();
      const sessionUser = await supabase.auth.getUser();
      const { error, data } = await supabase
        .from("users")
        .select("*,user_info(email),subscription(*)")
        .eq("id", sessionUser.data.user?.id!)
        .single();
      if (error) {
        throw error;
      }
      return data;
    },
  });
}
