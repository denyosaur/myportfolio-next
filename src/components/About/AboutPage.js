function AboutPage({ aboutInfo: { about, resumeLink, skills } }) {

  return (
    <div className="flex flex-col justify-between text-2xl w-full h-full text-base" >
      <div className="text-sm s:text-2xl">
        {skills.map((skill, index) => {
          return index === skills.length - 1 ? `${skill}` : `${skill}/ /`
        })}
      </div>
      <div className="flex flex-col items-end text-base">
        <div className="flex justify-end w-80 underline underline-offset-1">
          <a
            className="flex flex-row items-end"
            href={resumeLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume Download
          </a>
        </div>
        <div className="whitespace-pre-line w-80">
          {about}
        </div>
      </div>
    </div>
  )
}

export default AboutPage;
