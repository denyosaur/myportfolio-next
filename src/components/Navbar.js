import Link from "next/link";

function Navbar({ author }) {
  return (
    <nav className="flex flex-col font-thin items-start justify-betwen w-[30rem]">
      <header className="text-5xl">{author}</header>
      <h1 className="text-1xl ml-0.5 mb-20">Software Engineer//Web Developer</h1>
      <div className="flex flex-col text-[1.6rem]">
        <Link
          className=""
          href="/"
        >
          Home
        </Link>
        <Link
          className=""
          href="/about"
        >
          About
        </Link>
        <Link
          className=""
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className=""
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
