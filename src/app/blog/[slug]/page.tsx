import BlogContentClient from "./components/blog-content-client";

export async function generateStaticParams() {
  return [
    { slug: 'post-1' },
    { slug: 'post-2' },
  ];
}

export default async function BlogContent({ params }: { params: { slug: string } }) {
    const {slug} = await params;
    
    return <BlogContentClient slug={slug} />;
}