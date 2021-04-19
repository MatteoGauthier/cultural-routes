import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug } from '../../lib/mdx';
import RouteLayout from '../../layouts/route';
import MDXComponents from '../../components/MDXComponents';

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: {
      ...MDXComponents
    }
  });

  return (
    <RouteLayout frontMatter={frontMatter}>{content}</RouteLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('routes');

  return {
    paths: posts.map(p => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('routes', params.slug);

  return { props: { ...post } };
}
