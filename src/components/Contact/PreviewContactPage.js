'use client';

import { usePreview } from '../../../lib/sanity.preview';

import ContactPage from './ContactPage';

function PreviewContactPage({ query }) {
  const contactInfo = usePreview(null, query);
  console.log(contactInfo)
  return <ContactPage contacts={contactInfo} />
}

export default PreviewContactPage;
