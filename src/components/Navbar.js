'use client'

import { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

import Arrow from '/public/icons/Arrow.svg';
import Burger from '/public/icons/Burger.svg'
import Cross from '/public/icons/Cross.svg'

function Navbar({ author }) {
  const [navButton, setNavButtonClosed] = useState(true);
  const pathname = usePathname();
  const arrowClassNames = 'left-3 transition-all duration-1000 sm:absolute';
  const clickHandler = () => {
    setNavButtonClosed(true);
  };

  return (
    <nav className="absolute top-0 flex flex-col h-30 w-full p-3 bg-[#0D0C1D] z-[2] sm:static sm:bg-transparent sm:flex-col sm:w-[30rem] sm:h-80 sm:p-0">
      <div className="flex justify-between">
        <header className="">
          <h1 className="text-5xl sm:text-5xl">{author}</h1>
          <h2 className="text-1xl ml-0.5 mb-2 sm:mb-20">Software Engineer//Web Developer</h2>
        </header>
        <div className="block sm:hidden">
          <button onClick={() => setNavButtonClosed(!navButton)}>
            {navButton ? <Burger /> : <Cross />}
          </button>
        </div>
      </div>
      <div className={`left-0 -bottom-30 w-full flex flex-col text-[1.6rem] bg-[#0D0C1D] sm:bg-transparent sm:block ${navButton ? 'hidden' : 'block'}`}>
        <div className="flex flex-row items-center">
          <Arrow className={`${arrowClassNames} ${pathname === "/" ? "opacity-100 visible" : "opacity-0 invisible"}`} />
          <Link
            className="transition duration-400 hover:opacity-60"
            href="/"
            onClick={() => clickHandler()}
          >
            Home
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <Arrow className={`${arrowClassNames} ${pathname === "/about" ? "opacity-100 visible" : "opacity-0 invisible"}`} />
          <Link
            className="transition duration-400 hover:opacity-60"
            href="/about"
            onClick={() => clickHandler()}
          >
            About
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <Arrow className={`${arrowClassNames} ${pathname === "/projects" ? "opacity-100 visible" : "opacity-0 invisible"}`} />
          <Link
            className="transition duration-400 hover:opacity-60"
            href="/projects"
            onClick={() => clickHandler()}
          >
            Projects
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <Arrow className={`${arrowClassNames} ${pathname === "/contact" ? "opacity-100 visible" : "opacity-0 invisible"}`} />
          <Link
            className="transition duration-400 hover:opacity-60"
            href="/contact"
            onClick={() => clickHandler()}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
