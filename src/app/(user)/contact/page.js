import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from '../../../../lib/sanity.client'

import ContactPage from "@component/components/Contact/ContactPage";
import PreviewContactPage from "@component/components/Contact/PreviewContactPage";
import PreviewSuspense from '@component/components/PreviewSuspense';

export default async function Contact() {
  const authorQuery = groq`*[_type=='author'][0].name`;
  const authorReq = await client.fetch(authorQuery);
  const contactQuery = groq`
    *[_type == "contact" && author._ref in *[_type=="author" && name=="${authorReq}"]._id ]{
      facebook, email, github, instagram, linkedin
      }[0]
  `;
  const contactReq = await client.fetch(contactQuery);

  if (previewData()) {
    return <PreviewSuspense
      fallback={(
        <div role="status">
          <p className="text-center text-lg animate-pulse">Loading Preview Data...</p>
        </div>
      )}
    >
      <div className="flex justify-end items-end w-full h-full" >
        <PreviewContactPage query={contactQuery} />
      </div>
    </PreviewSuspense>
  }

  return (
    <div className="flex justify-end items-end w-full h-full">
      <ContactPage contacts={contactReq} />
    </div>
  )
};
