import { groq } from 'next-sanity';
import { client } from '../../../../../../lib/sanity.client';

import BlogPost from '@component/components/BlogPost';

export const generateStaticParams = async () => {
  const query = groq`*[_type=='post']
    {
      slug
    }`
  const slugsQuery = await client.fetch(query);
  const slugRoutes = slugsQuery.map(slug => slug.slug.current);

  return slugRoutes.map(slug => ({ slug }));
};

const Post = async ({ params: { slug } }) => {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
  }`;

  const post = await client.fetch(query, { slug });

  return (
    <div className="flex relative justify-end items-end w-full h-full pt-[6rem] sm:pt-0 top-[1.25rem] sm:top-0 absolute">
      <BlogPost content={post} />
    </div>
  )
};

export default Post;
