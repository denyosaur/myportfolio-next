"use client"
import React, { useState } from 'react';
import anime from 'animejs/lib/anime.es.js';

import Background from '../Background';
import Navbar from '../Navbar';

const Page = ({ author, children }) => {
  const [count, setCount] = useState(0);
  const [grid, setGrid] = useState({ columns: 0, rows: 0 });

  const colors = [
    'rgb(13, 27, 42)',
    'rgb(27, 38, 59)',
    'rgb(65, 90, 119)',
    'rgb(119, 141, 169)',
    'rgb(224, 225, 221)',
  ]
  const handleClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const elements = document.elementsFromPoint(x, y);
    const index = findTileIndex(elements)

    setCount(prev => prev + 1)

    anime({
      targets: '.tile',
      backgroundColor: colors[count % (colors.length - 1)],
      delay: anime.stagger(40, {
        grid: [grid.columns, grid.rows],
        from: index,
      })
    })
  };

  const findTileIndex = (elementArray) => {
    const elementWithId123 = elementArray.find(el => el.className === 'tile h-8 w-8');
    return elementWithId123.getAttribute('data-index');
  };

  return (
    <>
      <div
        className="absolute flex flex-col w-[94.2vw] h-[82.5vh] sm:h-[93.5vh] m-auto left-0 right-0 top-0 bottom-0 z-[2] sm:flex-row sm:p-9"
        onClick={handleClick}
      >
        <Navbar author={author} />
        <div className="h-40 w-full sm:hidden"></div>
        <div className="flex h-full w-full px-5 pb-5 sm:p-0">
          {children}
        </div>
      </div>
      <Background setGrid={setGrid} />
    </>
  )
}

export default Page;
