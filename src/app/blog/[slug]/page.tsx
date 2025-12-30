import BlogContentClient from "./components/blog-content-client";


export default async function BlogContent({ params }: { params: { slug: string } }) {
    const {slug} = await params;
    
    return <BlogContentClient slug={slug} />;
}