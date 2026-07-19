import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  if (secret === 'EL-KOPTAN-VAULT-2026') {
    return NextResponse.next();
  }
  return new NextResponse('Access Denied: Sovereign Vault Protected', { status: 403 });
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
