import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

export function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = [],
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    const isAuthRequired = requireAuth.some((path) =>
      pathname.startsWith(path),
    );

    if (isAuthRequired) {
      const token = req.cookies.get("userSession");

      if (!token) {
        const loginUrl = new URL("/", req.url);
        return NextResponse.redirect(loginUrl);
      }
    }

    return middleware(req, next);
  };
}

export default withAuth(
  function middleware(req: NextRequest) {
    return NextResponse.next();
  },
  ["/test", "/result", "/home"],
);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
