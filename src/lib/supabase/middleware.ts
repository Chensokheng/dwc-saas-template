import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/auth"];
const subscriptionRoutes = ["/dashboard"];

export async function updateSession(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path) || path.startsWith("/checkout");
  const isPublicRoute = publicRoutes.includes(path);
  const isSubscriptionPage = subscriptionRoutes.includes(path);

  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (isProtectedRoute && !user?.id) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (isSubscriptionPage && user?.user_metadata?.subscription_status !== "active") {
    return NextResponse.redirect(new URL("/#pricing", request.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (isPublicRoute && user?.id && !(request.nextUrl.pathname === "/auth/auth-code-error")) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return supabaseResponse;
}
