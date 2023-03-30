import Link from "next/link";

function Navbar() {
  return (
    <header className="flex flex-col items-start justify-betwen w-75">
      <h1 className="text-5xl">Daniel H Kim</h1>
      <h2 className="text-1xl ml-0.5 mb-20">Software Engineer//Web Developer</h2>
      <div className="flex flex flex-col">
        <Link
          className="text-4xl m-[5px]"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-4xl m-[5px]"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-4xl m-[5px]"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="text-4xl m-[5px]"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </header>
  )
}

export default Navbar;
