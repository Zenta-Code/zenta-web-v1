import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import { Post } from "../../../../typings";
import YouTubePlayer from "../../../../components/YouTubePlayer";
import type { Metadata } from 'next'
import ScrollTOC from "../../../../components/ScrollTOC";
import PostBanner from "../../../../components/PostBanner";
import PostTitle from "../../../../components/PostTitle";
type Props = {
    params: {
        slug: string;
    };
};
export const revalidate = 30;


export async function generateStaticParams() {
    const query = groq`*[_type=='post']{
        slug
    }`;
    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current)

    return slugRoutes.map((slug) => ({
        slug
    }))
}
async function getPost({ params: { slug } }: Props) {
    const query = groq`
        *[_type=='post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `;
    const post = await client.fetch(query, { slug });
    return post
}

export async function generateMetadata(slug: any): Promise<Metadata> {
    const post = await getPost(slug);
    return {
        title: post.title,
        description: post.description,
        keywords: post.categories[0].title,
        authors: post.author
    }
}
async function Post(slug: any) {
    const post = await getPost(slug);
    const { youtubeVideoId } = post;
    return (
        <article className="">
            <section className="max-w-7xl mx-auto">
                <PostBanner post={post} />
            </section>
            <section>
                <div className='mx-auto bg-[#f0f3f7] dark:bg-[#1d1e20] dark: p-2 rounded-3xl drop-shadow-xl max-w-4xl '>
                    <PostTitle post={post} />
                    <div className="  m-5">
                        <hr className="border-[#F7AB0A] pb-5" />
                        {youtubeVideoId && <YouTubePlayer videoId={youtubeVideoId} />}
                        <ScrollTOC post={post} />
                        <PortableText value={post.body} components={RichTextComponents} />
                    </div>
                </div>
            </section>
        </article>
    )
}



export default Post