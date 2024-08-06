import { clerkMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export default clerkMiddleware(async (auth, req) => {
  // Handle beforeAuth logic if needed (currently empty)
  // async beforeAuth(auth, req) {}

  const url = req.nextUrl
  const searchParams = url.searchParams.toString()
  

  const pathWithSearchParams = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`

  // Rewrite for subdomains
  const hostname = req.headers.get('host') as string;
  const customSubDomain = hostname.split(`${process.env.NEXT_PUBLIC_DOMAIN}`).filter(Boolean)[0]

  if (customSubDomain) {
    return NextResponse.rewrite(new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url))
  }

  // Redirect logic for specific routes
  if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
    return NextResponse.redirect(new URL(`/agency/sign-in`, req.url))
  }

  // Rewrite logic for specific routes
  if (url.pathname === '/' || (url.pathname === '/site' && url.host === process.env.NEXT_PUBLIC_DOMAIN)) {
    return NextResponse.rewrite(new URL('/site', req.url))
  }

  if (url.pathname.startsWith('/agency') || url.pathname.startsWith('/subaccount')) {
    return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url)) // other cases satisfied
  }

  // No rewrite or redirect for other routes (implicit return)
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'], // should not matches these matchers
}
