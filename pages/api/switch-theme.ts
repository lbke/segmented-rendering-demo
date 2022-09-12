import { NextRequest, NextResponse } from "next/server";

export default async (req: NextRequest) => {
  const url = new URL(req.url);
  const theme = url.searchParams.get("theme");

  const res = NextResponse.next();

  if (theme && ["fire", "water", "grass"].includes(theme)) {
    res.cookies.set("theme", theme);
  } else {
    // delete cookie if theme is not valid
    res.cookies.delete("theme");
  }
  return res;
};

export const config = {
  runtime: "experimental-edge",
};
