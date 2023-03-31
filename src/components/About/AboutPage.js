function AboutPage({ contacts }) {
  const contactKeys = Object.keys(contacts);

  return (
    <div className="flex items-end flex-col font-thin text-2xl w-80" >
      About
    </div>
  )
}

export default AboutPage;
