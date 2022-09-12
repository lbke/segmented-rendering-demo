import { NextRequest, NextResponse } from "next/server";

/**
 *
 * We could set the cookie using client-side JavaScript
 * for this basic theming example,
 * but an API route offers more possibilites:
 * - set an HTTP-only cookie
 * - use server logic to define the value (encrypt the cookie,
 * check that the user can indeed set this value etc.)
 *
 * I am using an Edge API route cause it's more fun
 * but you could use a "normal" API route
 * */
export default async (req: NextRequest) => {
  const url = new URL(req.url);
  const theme = url.searchParams.get("theme");

  const res = NextResponse.next();

  if (theme && ["fire", "water", "grass"].includes(theme)) {
    res.cookies.set("theme", theme);
  } else {
    // delete cookie if theme is not valid
    // FIXME: doesn't seem to add a proper Set-Cookie header
    // and set("theme", null) won't work either
    //res.cookies.delete("theme");
    res.cookies.set("theme", "none");
  }
  return res;
};

export const config = {
  runtime: "experimental-edge",
};
