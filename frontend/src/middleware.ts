import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublic = path === "/log-in" || path === '/sign-up'; // Ensure path comparison is accurate

  let cookie = request.cookies.get('token')?.value;

  if (isPublic && cookie) {
    const origin = request.nextUrl.origin; // Get the origin for absolute URL
    return NextResponse.redirect(`${origin}/`); // Use absolute URL for redirect
  }

  if (!isPublic && !cookie) {
    const origin = request.nextUrl.origin; // Get the origin for absolute URL
    return NextResponse.redirect(`${origin}/log-in`); // Use absolute URL for redirect
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/profile',
    '/dashboard/customer',
    '/change-password',
    '/sign-up',
    '/log-in'
  ]
}