import nextMDX from '@next/mdx'

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "github-dark"
};

const withMDX = nextMDX({
  options: {
    rehypePlugins: [['rehype-prism-plus']],
  },
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true
})