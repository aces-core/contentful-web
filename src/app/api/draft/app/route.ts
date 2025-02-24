import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const draft = await draftMode();

  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const locale = searchParams.get("locale");

  if (secret !== process.env.NEXT_PUBLIC_CF_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  if (!locale) {
    return new Response("Invalid locale", { status: 401 });
  }

  draft.enable();

  const cookieStore = await cookies();
  const cookie = cookieStore.get("__prerender_bypass")!;
  cookieStore.set({
    name: "__prerender_bypass",
    value: cookie?.value,
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "none",
  });

  redirect(`/draft/app`);
}
