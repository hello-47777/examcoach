import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware:
 *
 * 1. 尾斜杠规范化 (skipTrailingSlashRedirect: true 后由此接管)
 *    将带尾斜杠的页面 URL 以标准 301 重定向到无斜杠版本,
 *    避免内置 308 + Refresh 头触发 Google Search Console "重定向错误"。
 *    例: /wiki/ → /wiki (301), /glossary/ → /glossary (301)
 *
 * 2. 将当前 pathname 写入请求头 x-pathname
 *    让 Server Component (如 ArticleSchema) 能在 layout 中
 *    通过 headers().get('x-pathname') 读取当前路由, 从而生成
 *    按文章粒度的 JSON-LD schema, 无需修改每个 page.tsx。
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 尾斜杠 301 规范化 (根路径 "/" 不处理)
  // 注意: 不修改 request.nextUrl 的 pathname (NextURL 缓存 href 会导致
  // location 保留尾斜杠自引用循环), 用 new URL() 全新构造目标地址
  if (pathname.length > 1 && pathname.endsWith('/')) {
    const stripped = pathname.replace(/\/+$/, '') + (request.nextUrl.search || '');
    return NextResponse.redirect(new URL(stripped, request.url), 301);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  // 全站页面路由生效 (排除 Next.js 内部路径与静态资源),
  // 以统一处理任意页面的尾斜杠变体, 如 /wiki/、/glossary/、/topics/
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/|.*\\.[\\w]+$).*)'],
};
