import Image from "next/image";
import Link from "next/link";
import urlFor from "../../../lib/urlFor";
import PrismComponent from './PrismComponent';

import './BlogPost.css';

export const RichTextComponents = {
  li: ({ children }) => <li className="special-list-item">{children}</li>,
  span: ({ children }) => <p className="special-list-item">{children}</p>,
  normal: ({ children }) => <p className="special-list-item">{children}</p>,
  image: ({ asset }) => (
    <div className="relative w-full h-56 sm:h-72 m-2 sm:m-10 mx-auto">
      <Image
        alt='blog post image'
        className="object-contain"
        fill
        src={urlFor(asset).url()}
      />
    </div>
  ),
  h1: ({ children }) => (
    <h1 className="text-5xl py10 font-bold"> {children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-4xl py10 font-bold"> {children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-3xl py10 font-bold"> {children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-2xl py10 font-bold"> {children}</h4>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-[#0D0C1D] border-l-4 pl-5 py-5 my-5">
      {children}
    </blockquote>
  ),
  myCodeField: ({ code, filename }) => (
    <div className="relative w-full max-w-4xl h-auto m-10 mx-auto whitespace-pre-wrap bg-[#36353b] rounded-lg">
      <div className="flex justify-start items-center bg-gray-800 border-b-[0.1rem] h-8 px-4 h-10">
        <h3 className="font-bold">
          {filename}
        </h3>
      </div>
      <div className="overflow-y-auto code-snippet">
        <PrismComponent>
          {code}
        </PrismComponent>
      </div>

    </div>
  ),
};
