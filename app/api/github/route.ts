import { NextRequest, NextResponse } from "next/server";

const headers = { Accept: "application/vnd.github+json", "User-Agent": "portfolio-site" };

export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username") || process.env.GITHUB_USERNAME || "luvtankha";
  if (!/^[a-zA-Z0-9-]{1,39}$/.test(username)) return NextResponse.json({ error: "Invalid username" }, { status: 400 });

  const [profileResponse, reposResponse] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } }),
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=owner`, { headers, next: { revalidate: 3600 } }),
  ]);

  if (!profileResponse.ok || !reposResponse.ok) return NextResponse.json({ error: "GitHub unavailable" }, { status: 502 });
  const profile = await profileResponse.json();
  const repos = await reposResponse.json();
  return NextResponse.json({ profile, repos }, { headers: { "Cache-Control": "public, s-maxage=3600" } });
}
