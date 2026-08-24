import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware: 将当前 pathname 写入请求头 x-pathname
 *
 * 用途: 让 Server Component (如 ArticleSchema) 能在 layout 中
 * 通过 headers().get('x-pathname') 读取当前路由, 从而生成
 * 按文章粒度的 JSON-LD schema, 无需修改每个 page.tsx。
 *
 * 仅匹配 /wiki/* 路由, 不影响其他页面静态生成。
 */
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  // 仅对 /wiki 及其子路由生效 (含 /wiki 本身与 /wiki/<cat>/<slug>)
  matcher: ['/wiki/:path*'],
};
