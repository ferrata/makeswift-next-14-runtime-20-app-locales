import { NextRequest, NextResponse } from 'next/server'

import { getLocale, locales } from '@/localization'

export function middleware(request: NextRequest): NextResponse {
  console.log(`${request.method} ${request.nextUrl.pathname}`)

  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )
  if (pathnameHasLocale) return NextResponse.next()

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  console.log(`Redirecting to ${request.nextUrl.pathname}`)

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and paths to the makeswift api handlers
    '/((?!_next|api/makeswift).*)',
  ],
}
