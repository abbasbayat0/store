import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublic = createRouteMatcher(['/', '/products(.*)', '/about']);
const isAdmin = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublic(req)) await auth.protect();
  const { userId } = await auth();
  if (isAdmin(req) && 'user_32TrZDTjoEoGNhNwIXLEaQF8Rxu' !== userId)
    return NextResponse.redirect(new URL('/', req.url));
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
