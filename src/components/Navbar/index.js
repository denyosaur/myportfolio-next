'use client'

import { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from './constants';
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
        {Object.keys(navLinks).map(navLink => (
          <div className="flex flex-row items-center" key={navLinks[navLink]}>
            <Arrow className={`${arrowClassNames} ${pathname === navLinks[navLink] ? "opacity-100 visible" : "opacity-0 invisible"}`} />
            <Link
              className="transition duration-400 hover:opacity-60"
              href={navLinks[navLink]}
              onClick={() => clickHandler()}
            >
              {navLink}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;
