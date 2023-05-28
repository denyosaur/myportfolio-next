import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from '../../../../lib/sanity.client'

import PreviewSuspense from '@component/components/PreviewSuspense';
import BlogPage from "@component/components/Blog/BlogPage";
import PreviewAboutPage from "@component/components/About/PreviewAboutPage";

export default async function Blog() {
  const authorQuery = groq`*[_type=='author'][0].name`;
  const authorReq = await client.fetch(authorQuery);
  const aboutQuery = groq`
    *[_type == "post" && author._ref in *[_type=="author" && name=="${authorReq}"]._id ] 
      | order(dateTime(publishedAt) desc)
      { mainImage, markdown, publishedAt, slug, title }
  `;
  const blogReq = await client.fetch(aboutQuery);

  if (previewData()) {
    return <PreviewSuspense
      fallback={(
        <div role="status">
          <p className="text-center text-lg animate-pulse">Loading Preview Data...</p>
        </div>
      )}
    >
      <div className="flex justify-end items-end w-full h-full" >
        <PreviewAboutPage query={aboutQuery} />
      </div>
    </PreviewSuspense>
  }

  return (
    <div className="flex relative justify-end items-end w-full h-full">
      <BlogPage blogList={blogReq} />
    </div>
  )
};
