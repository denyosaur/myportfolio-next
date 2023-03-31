'use client';

import { usePreview } from '../../../lib/sanity.preview';

import HomePage from './HomePage';

function PreviewHomePage({ query }) {
  const pitchInfo = usePreview(null, query);

  return <HomePage elevatorPitch={pitchInfo} />
}

export default PreviewHomePage;
