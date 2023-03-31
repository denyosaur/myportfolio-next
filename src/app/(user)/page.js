import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from '../../../lib/sanity.client'

import HomePage from "@component/components/HomePage/HomePage";
import PreviewHomePage from "@component/components/HomePage/PreviewHomePage";
import PreviewSuspense from '@component/components/PreviewSuspense';

export default async function Page() {
  const authorQuery = groq`*[_type=='author'][0].name`;
  const author = await client.fetch(authorQuery);
  const pitchInfo = groq`
    *[_type == "about" && author._ref in *[_type=="author" && name=="${author}"]._id ]
    { elevatorPitch }[0].elevatorPitch
  `;
  const elevatorPitch = await client.fetch(pitchInfo);

  if (previewData()) {
    return <PreviewSuspense
      fallback={(
        <div role="status">
          <p className="text-center text-lg animate-pulse">Loading Preview Data...</p>
        </div>
      )}
    >
      <div className="flex justify-end items-end w-full h-full" >
        <PreviewHomePage query={pitchInfo} />
      </div>
    </PreviewSuspense>
  }

  return (
    <div className="flex justify-end items-end w-full h-full">
      <HomePage elevatorPitch={elevatorPitch} />
    </div>
  )
};
