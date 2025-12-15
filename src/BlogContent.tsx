import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import Free5GCDPI from "./blog/2025f-free5gc-dpi/content.mdx"
import { Breadcrumb } from "antd";

export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) =>
    <h1 className="text-4xl font-bold mt-8" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) =>
    <h2 className="text-3xl font-semibold mt-6" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-2xl font-semibold mt-6" {...props} />,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) =>
    <img loading="lazy" {...props} />,
  pre: (props: React.HTMLAttributes<HTMLPreElement>) =>
    <pre className="overflow-x-auto" {...props} />,
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => <a className="underline text-blue-500" {...props} />,
};

export const BlogContent = () => {
    const { slug } = useParams()

    const posts: Record<string, React.ReactNode> = {
        "2025f-free5gc-dpi": <Free5GCDPI components={mdxComponents}></Free5GCDPI>
    }

    const [Post, setPost] = useState<React.ReactNode | null>(null);

    useEffect(() => {
        if(slug == undefined){
            setPost(null);
            return;
        }

        const Post = posts[slug];

        if (!Post) {
            setPost(null);
            return;
        }
        
        setPost(Post)
    }, [slug]);
    
    return (
        <>
            { Post != null ? 
            <div className="md:w-[50%] mx-auto flex flex-col gap-3 mb-[50px]">
                <Breadcrumb>
                    <Breadcrumb.Item href="#/blog">Blog</Breadcrumb.Item>
                    <Breadcrumb.Item>{slug}</Breadcrumb.Item>
                </Breadcrumb>
                {Post}
            </div> : <p>Not found.</p>
            }
        </>
    )
}