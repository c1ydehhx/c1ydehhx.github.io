'use client';
import "./prism-vsc-dark-plus.css"
import Free5GCDPI from "@/blog/2025f-free5gc-dpi/content.mdx"
import DeepDiveSetupPy from "@/blog/2025f-deep-dive-setup-py/content.mdx"

import { useEffect, useState } from "react";
import { Breadcrumb } from "antd";

const mdxComponents = {
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

const posts: Record<string, React.ReactNode> = {
    "2025f-free5gc-dpi": <Free5GCDPI components={mdxComponents}></Free5GCDPI>,
    "2025f-deep-dive-setup-py": <DeepDiveSetupPy components={mdxComponents}></DeepDiveSetupPy>
}

export default function BlogContentClient({
  slug,
}: {
  slug: string;
}) {
  const [currentPost, setCurrentPost] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    setCurrentPost(posts[slug]);
  }, [slug]);

  return (
    <>
      {currentPost != null ? (
        <div className="md:w-[50%] mx-auto flex flex-col gap-3 mb-[50px]">
          <Breadcrumb items={[
            {
              href: "/blog",
              title: "blog",
            },
            {
              title: `${slug}`
            }
          ]}>
          </Breadcrumb>
          {currentPost}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}