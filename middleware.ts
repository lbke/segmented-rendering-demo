import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // get the current params from the cookies, eg theme
  // you can also get them from headers, url, route params...
  // you could also do some more advanced check, like authentication/authorization
  const theme = req.cookies.get("theme") || "none";

  if (!["fire", "water", "grass", "none"].includes(theme)) {
    throw new Error(
      `Valid themes are fire, water and grass, received ${theme}. Clear your cookies and try again.`
    );
  }
  // we use an URL rewrite: end user can't see it, but this let's
  // use alter the URL based on the request content
  // => now you can render a different page depending on a cookie
  req.nextUrl.pathname = `/${theme}`;
  const res = NextResponse.rewrite(req.nextUrl);
  return res;
}

export const config = {
  matcher: ["/", "/:theme"],
};
