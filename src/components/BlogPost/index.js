import PortableText from "react-portable-text";
import Image from "next/image";

import { RichTextComponents } from './BlogRichTextComponents'

import urlFor from '../../../lib/urlFor';
import '../Blog/Blog.css';

function BlogPost({
  content: {
    publishedAt,
    body,
    author: { name },
    mainImage,
    title,
  } }) {
  const date = new Date(publishedAt).toLocaleDateString(
    "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="flex flex-col relative justify-end items-end w-full h-full overflow-auto blog-scroll2" >
      <div className="w-full h-auto">
        <div className="flex flex-col mb-10 w-full h-auto">
          <p className="font-bold mb-4">{date}</p>
          <h2 className="text-5xl font-bold mb-2">{title}</h2>
          <p>By {name}</p>
          <div className="flex justify-center relative h-60 sm:h-80 w-full mt-5 sm:mt-10">
            <Image
              alt="blog post image"
              className="object-contain lg:object:center"
              src={urlFor(mainImage).url()}
              fill
            />
          </div>
        </div>

        <PortableText content={body} serializers={RichTextComponents} />
      </div>

    </article>
  )
}

export default BlogPost;
