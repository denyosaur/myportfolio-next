import BlogTiles from './BlogTiles';

import './Blog.css';

const BlogPage = ({ blogList }) => (
  <div className="flex absolute items-end flex-col text-2xl w-full h-[71.5vh] sm:h-[93.7vh] overflow-auto blog-scroll mb-[-2.3rem] top-[-2.25rem] pt-10 sm:pt-40" >
    {blogList.map(post => <BlogTiles key={post.slug.current} post={post} />)}
  </div>
);

export default BlogPage;
