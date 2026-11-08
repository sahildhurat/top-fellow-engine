import { NextRequest, NextResponse } from "next/server";
import manifest from "@/data/stories_manifest.json";
import chunk1 from "@/data/stories-1.json";
import chunk2 from "@/data/stories-2.json";
import chunk3 from "@/data/stories-3.json";
import chunk4 from "@/data/stories-4.json";
import chunk5 from "@/data/stories-5.json";
import chunk6 from "@/data/stories-6.json";

const CHUNKS: Record<string, any> = {
  "1": chunk1,
  "2": chunk2,
  "3": chunk3,
  "4": chunk4,
  "5": chunk5,
  "6": chunk6,
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const chunk = searchParams.get("chunk") || "1";
  const getManifest = searchParams.get("manifest");

  if (getManifest === "true") {
    return NextResponse.json(manifest, {
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  }

  if (CHUNKS[chunk]) {
    return NextResponse.json(CHUNKS[chunk], {
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  }

  return NextResponse.json({ error: "Chunk not found" }, { status: 404 });
}
