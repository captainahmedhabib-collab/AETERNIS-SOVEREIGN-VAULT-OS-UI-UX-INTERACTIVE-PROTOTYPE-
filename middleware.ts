import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');

  // التحقق من وجود الرمز السري السيادي
  if (secret === 'EL-KOPTAN-VAULT-2026') {
    return NextResponse.next();
  }

  // في حال عدم المطابقة، يتم الرد بالرفض
  return new NextResponse('Access Denied: Sovereign Vault Protected', { status: 403 });
}

export const config = {
  matcher: '/',
};
