import { groq } from 'next-sanity';
import { draftMode } from 'next/headers';
import BlogList from '../../components/BlogList';
import PreviewBlogList from '../../components/PreviewBlogList';
import PreviewSuspense from '../../components/PreviewSuspense';
import { client } from '../../lib/sanity.client';

const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories[]->
    } | order(_createdAt desc)
`;

export const revalidate = 30;
export const metadata = {
  title: 'Tensai Mono',
  description:
    'Tensai Mono is a website about programming 🧑‍💻 . I will be posting about my programming progress, good and bad days and more. Also, I might have some videos of me coding 🎥 .  ',
};
export default async function HomePage() {
  if (draftMode().isEnabled) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB04]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
}
