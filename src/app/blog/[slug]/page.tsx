import { Metadata } from "next";
import BlogContentClient from "./components/blog-content-client";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [
    { slug: '2025f-deep-dive-setup-py' },
    { slug: '2025f-free5gc-dpi' },
  ];
}

type PostMeta = {
  title: string
  description: string
  coverImage: string
}

const postMetaMap: Record<string, PostMeta> = {
  "2025f-free5gc-dpi": {
    title: "c1ydeh's page - Efficient and Hardware-Independent Deep Packet Inspection for Free5GC",
    description: "This is the technical article for this project started in 2025 fall. We aims to introduce software-based deep packet inspection (DPI) that having the same efficient on hardware-support solution. We propose 3 different method: P4 Assist Method, Full Copy Method, and XDP Method.",
    coverImage: "/image/blog/2025f-free5gc-dpi/cover.png",
  },
  "2025f-deep-dive-setup-py": {
    title: "c1ydeh's page - Solve solvcon CI issue by deep dive setup.py in modmesh",
    description: "This is the technical article to record the step of issue solving on solvcon/solvcon GitHub Actions. Due to lack of shared object of packaging, it's necessary to clearify the problem first, then trying to find a good practice to solve the issue.",
    coverImage: "/image/blog/2025f-deep-dive-setup-py/cover.png",
  },
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const {slug} = await params
  const meta = await postMetaMap[slug]

  if (!meta) {
    notFound()
  }

  return {
    metadataBase: new URL('https://c1ydeh.net'),
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [meta.coverImage],
    },
  }
}

export default async function BlogContent({ params }: { params: { slug: string } }) {
    const {slug} = await params;
    
    return <BlogContentClient slug={slug} />;
}