import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from '../../../../lib/sanity.client'

import PreviewSuspense from '@component/components/PreviewSuspense';
import ProjectsPage from "@component/components/Projects/ProjectsPage";
import PreviewProjectsPage from "@component/components/Projects/PreviewProjectsPage";

export default async function Projects() {
  const authorQuery = groq`*[_type=='author'][0].name`;
  const authorReq = await client.fetch(authorQuery);
  const projectsQuery = groq`
    *[_type == "projects" && author._ref in *[_type=="author" && name=="${authorReq}"]._id ]
    | order(orderNumber asc)
    { projectName, projectUrl, githubLink, image, tools }
  `;
  const projectsReq = await client.fetch(projectsQuery);

  if (previewData()) {
    return <PreviewSuspense
      fallback={(
        <div role="status">
          <p className="text-center text-lg animate-pulse">Loading Preview Data...</p>
        </div>
      )}
    >
      <div className="flex justify-end items-end w-full h-full" >
        <PreviewProjectsPage query={projectsQuery} />
      </div>
    </PreviewSuspense>
  }

  return (
    <div className="flex relative justify-end items-end w-full h-full">
      <ProjectsPage projects={projectsReq} />
    </div>
  )
};
