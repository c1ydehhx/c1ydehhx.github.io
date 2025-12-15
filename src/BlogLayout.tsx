import { MDXProvider } from "@mdx-js/react";

export const BlogLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const components = {
        h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-3xl font-bold mt-8" {...props} />,
        h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-2xl font-semibold mt-6" {...props} />,
        img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img loading="lazy" {...props} />,
        pre: (props: React.HTMLAttributes<HTMLPreElement>) => <pre className="overflow-x-auto" {...props} />,
    };
    return (
        <article className="prose mx-auto">
            <MDXProvider components={components}>
                {children}
            </MDXProvider>
        </article>
    );
}

export default BlogLayout;