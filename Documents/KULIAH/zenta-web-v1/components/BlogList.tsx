import { Post } from "../typings";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";
import Banner from "./Banner";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div>
      <Banner />
      <div className="mx-auto px-5 max-w-4xl">
        <hr className="border-[#F7AB0A] py-2" />
        <div className="p-5 shadow-lg rounded-xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 gap-y-16 pb-24">
          {posts.map((post, index) => (
            <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
              <div className="hover:bg-[#c6cbcf] dark:hover:bg-[#2b2c30] hover:brightness-110 h-full hover:scale-105 rounded-3xl flex flex-col group cursor-pointer">
                <div className="relative w-full h-60 drop-shadow-xl transition-transform duration-200 ease-out">
                  <Image
                    className="rounded-3xl object-cover object-center"
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                    loading="lazy"
                    fill
                  />
                </div>
                <div className="p-5 flex-1">
                  <p className="text-3xl py-2 font-bold">{post.title}</p>
                  <p className="text-sm line-clamp-2">{post.description}</p>
                  <p className="text-sm py-2">{formatDate(post._createdAt)}</p>
                  <div className="flex flex-wrap">
                    {post.categories.map((category: any) => (
                      <div
                        key={category._id}
                        style={{ backgroundColor: category.favoriteColor.hex }}
                        className="text-sm text-center text-black px-2 py-1 rounded-lg font-cubano flex-shrink-0 mr-2 mb-2"
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ClientSideRoute>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;