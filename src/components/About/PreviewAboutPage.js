'use client';

import { usePreview } from '../../../lib/sanity.preview';

import AboutPage from './AboutPage';

function PreviewAboutPage({ query }) {
  const contactInfo = usePreview(null, query);

  return <AboutPage contacts={contactInfo} />
}

export default PreviewAboutPage;
