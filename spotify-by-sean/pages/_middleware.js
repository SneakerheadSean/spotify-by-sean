import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  // Token will exist if user is logged in...
  const token = await getToken({ req, secret: process.env.JWT_SECRET })

  const { pathname } = req.nextUrl
  // Allow the request if the token exits...or if its a request for next-auth session & provider fetching
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next()
  }
  // If not, redirect them to the login page...
  if (!token && pathname !== "/login") {
      return NextResponse.redirect("/login")
  }
}