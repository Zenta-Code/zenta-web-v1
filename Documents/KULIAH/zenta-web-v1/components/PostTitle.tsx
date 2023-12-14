const PostTitle = ({ post }: any) => {
  return (
    <>
      <h1 className="font-bold text-center text-5xl p-4  ">
        {post.title}!
      </h1>
      <div className="flex flex-wrap justify-center">
        {post.categories.map((category: any) => (
          <div id={category._id} className="mx-2 my-4">
            <p
              style={{ backgroundColor: category.favoriteColor.hex }}
              className={`bg-${category.favoriteColor.hex} text-black font-cubano text-center p-2 text-sm rounded-md`}
            >
              {category.title}
            </p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm">
        Published {new Date(post.publishedAt).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
    </>
  );
};

export default PostTitle;