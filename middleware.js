import { NextResponse } from "next/server"

export function middleware(request) {
  const host = request.headers.get("host")
  const url = request.nextUrl.clone()

  // Extract subdomain
  const hostname = host?.split(".") || []

  // Handle Vercel domains and main domains
  const isVercelDomain = host?.includes("vercel.app")
  const isMainDomain = host?.includes("cretivite.com") || isVercelDomain

  let subdomain = null

  if (!isMainDomain && hostname.length > 2) {
    // For custom domains like budi.cretivite.com
    subdomain = hostname[0]
  } else if (isVercelDomain) {
    // For Vercel domains, check if there's a subdomain parameter for testing
    const testSubdomain = url.searchParams.get("subdomain")
    if (testSubdomain) {
      subdomain = testSubdomain
    }
  } else if (host?.includes("localhost") || host?.includes("127.0.0.1")) {
    // For development, check if there's a subdomain parameter
    const testSubdomain = url.searchParams.get("subdomain")
    if (testSubdomain) {
      subdomain = testSubdomain
    }
  }

  // If subdomain exists and it's not 'www'
  if (subdomain && subdomain !== "www") {
    // Set subdomain in headers to be accessed by pages
    const response = NextResponse.next()
    response.headers.set("x-subdomain", subdomain)
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
