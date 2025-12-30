import BlogContentClient from "./components/blog-content-client";

export async function generateStaticParams() {
  return [
    { slug: '2025f-deep-dive-setup-py' },
    { slug: '2025f-free5gc-dpi' },
  ];
}

export default async function BlogContent({ params }: { params: { slug: string } }) {
    const {slug} = await params;
    
    return <BlogContentClient slug={slug} />;
}