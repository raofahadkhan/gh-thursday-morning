import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(req: NextRequest) {
    const token = cookies().get('token');

    const isAuthenticated = token?.value === 'true';
    const { pathname } = req.nextUrl;

    if (!isAuthenticated && pathname !== '/login') {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    if (isAuthenticated && pathname === '/login') {
        return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/login', '/'],
};
