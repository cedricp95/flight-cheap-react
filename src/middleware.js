// middleware.ts
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
   console.log("DSAds");
   console.log(request)
  //return true//NextResponse.redirect(new URL('/about_us', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}