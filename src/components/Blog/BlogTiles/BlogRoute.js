'use client';

import Link from 'next/link';

const BlogRoute = ({ children, route, }) => (
  <Link href={route}>
    {children}
  </Link>
)

export default BlogRoute;
