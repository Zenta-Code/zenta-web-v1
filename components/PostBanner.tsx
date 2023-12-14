import Image from "next/image";
import urlFor from "../lib/urlFor";

const PostBanner = ({ post }: any) => {
  const imageUrl = urlFor(post.mainImage).url();
  const dimensionsMatch = imageUrl.match(/-(\d+)x(\d+)\./);
  const width = dimensionsMatch ? parseInt(dimensionsMatch[1], 10) : 0;
  const height = dimensionsMatch ? parseInt(dimensionsMatch[2], 10) : 0;
   return (
    <div className="inline-flex px-2 overflow-hidden relative w-full flex-col drop-shadow-xl items-center">
      <Image
        className="rounded-3xl h-72 object-cover object-left lg:object-center"
        loading="lazy"
        src={urlFor(post.mainImage).url()}
        alt=""
        width={width}
        height={height}
      />
      <br></br>
    </div>
  );
};

export default PostBanner;