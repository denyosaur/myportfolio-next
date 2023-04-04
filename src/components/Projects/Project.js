import Image from 'next/image';

import urlFor from '../../../lib/urlFor';

function Project({ project: {
  githubLink,
  image,
  projectName,
  projectUrl,
  tools,
} }) {

  return (
    <div
      className="flex flex-col mt-12 w-80 group sm:w-96 transition duration-400 hover:brightness-150 "
    >
      <div className="flex justify-end relative h-36 group-hover:brightness-80">
        <Image
          className="object-contain object-left image"
          src={urlFor(image).url()}
          alt={projectName}
          fill
        />
        <div className="relative bottom-0 w-full flex-col left-5 sm:left-20 sm:top-3">
          <h3 className="text-5xl">
            <a
              className="flex transition duration-400 hover:opacity-60"
              href={projectUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {projectName}
            </a>
          </h3>
          <h4 className="text-lg">
            <a
              className="flex transition duration-400 hover:opacity-60"
              href={githubLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              Github Repository
            </a>
          </h4>
          <span className="text-base">
            {!!tools && tools.map((tool, index) => {
              return index === tools.length - 1 ? `${tool}` : `${tool}/ /`
            })}
          </span>
        </div>

      </div>
    </div >
  )
}

export default Project;
