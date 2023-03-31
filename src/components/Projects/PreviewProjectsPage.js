'use client';

import { usePreview } from '../../../lib/sanity.preview';

import ProjectsPage from './ProjectsPage';

function PreviewProjectsPage({ query }) {
  const pitchInfo = usePreview(null, query);

  return <ProjectsPage elevatorPitch={pitchInfo} />
}

export default PreviewProjectsPage;
