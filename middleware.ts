import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/", 
    "/api/webhooks/clerk", 
    "/pricing", 
    "/blog", 
    "/features",
    "/__server_sent_events__" // ✅ Add this line
  ]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
