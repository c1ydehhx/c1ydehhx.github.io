import nextMDX from '@next/mdx'

const withMDX = nextMDX({
  options: {
    rehypePlugins: [['rehype-prism-plus']],
  },
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  distDir: "build"
})