import Image from "next/image";

import BlogRoute from './BlogRoute';

import urlFor from '../../../../lib/urlFor';

function BlogTiles({ post: { mainImage, publishedAt, slug, title } }) {
  const date = new Date(publishedAt).toLocaleDateString(
    "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <BlogRoute route={`/blog/post/${slug.current}`}>
      <div className="flex items-end flex-col relative text-2xl w-[35rem] group cursor-pointer h-72 mb-6 rounded-md" >
        <div className="relative w-full h-72 drop-shadow-xl transition-transform duration-200-ease-out rounded-md">
          <Image
            alt="blog post image"
            className="object-cover lg:object:center rounded-md"
            src={urlFor(mainImage).url()}
            fill
          />
        </div>
        <div className="flex flex-col absolute top-0 w-full bg-black rounded drop-shadow-lg text-white p-5 flex justify-between ">
          <h2 className="text-xl">{title}</h2>
          <p className="text-xl mt-2">{date}</p>
        </div>
      </div>
    </BlogRoute>
  )
};

export default BlogTiles;
