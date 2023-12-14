"use client"
import { usePreview } from "../lib/sanity.preview";
import Bloglist from "./BlogList";

type Props = {
    query: string;
};

export default function PreviewBlogList({ query }: Props) {
    const posts= usePreview(null, query);

    console.log("Loading Posts...", posts);
    return <Bloglist posts={posts} />;
}