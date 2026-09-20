import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username") || "vercel";
  if (!/^[a-zA-Z0-9-]{1,39}$/.test(username)) return NextResponse.json({ error: "Invalid username" }, { status: 400 });
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`, { headers: { Accept: "application/vnd.github+json", "User-Agent": "portfolio-site" }, next: { revalidate: 3600 } });
  if (!response.ok) return NextResponse.json({ error: "GitHub unavailable" }, { status: 502 });
  return NextResponse.json(await response.json(), { headers: { "Cache-Control": "public, s-maxage=3600" } });
}
