import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from '../../../../lib/sanity.client'

import PreviewSuspense from '@component/components/PreviewSuspense';
import AboutPage from "@component/components/About/AboutPage";
import PreviewAboutPage from "@component/components/About/PreviewAboutPage";

export default async function About() {
  const authorQuery = groq`*[_type=='author'][0].name`;
  const authorReq = await client.fetch(authorQuery);
  const aboutQuery = groq`
    *[_type == "about" && author._ref in *[_type=="author" && name=="${authorReq}"]._id ]
    { about, resumeLink, skills }[0]
  `;
  const aboutReq = await client.fetch(aboutQuery);

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
    <div className="flex justify-end items-end w-full h-full">
      <AboutPage aboutInfo={aboutReq} />
    </div>
  )
};
