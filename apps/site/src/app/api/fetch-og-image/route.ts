import { NextResponse } from "next/server";
import { unfurl } from "unfurl.js";

export const revalidate = 600;

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  if (!url)
    return new Response("Missing required url parameter.", {
      status: 400,
      statusText: "Missing required url parameter.",
    });

  const result = await unfurl(url);
  const ogImage = result.open_graph.images?.[0];

  return NextResponse.json({ ogImage });
};
