"use client"
import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';

import Tile from './tile';

const Background = ({ setGrid }) => {
  const gridRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  let columns = Math.floor(dimensions.width / 30);
  let rows = Math.floor(dimensions.height / 30);

  const createTiles = (quantity) => {
    return Array.from(Array(quantity)).map((tile, index) => {
      return <Tile key={index} index={index} />
    })
  }

  const handleResize = () => {
    if (gridRef.current) {
      setDimensions({
        width: gridRef.current.offsetWidth,
        height: gridRef.current.offsetHeight
      });
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
    setGrid({ columns, rows });

    anime({
      targets: '.tile',
      backgroundColor: 'rgb(27, 38, 59)',
      delay: anime.stagger(40, {
        grid: [columns, rows],
        from: 1,
      })
    })
    return window.removeEventListener('resize', handleResize);
  }, [columns, rows, setGrid]);


  useLayoutEffect(() => {
    if (gridRef.current) {
      setDimensions({
        width: gridRef.current.offsetWidth,
        height: gridRef.current.offsetHeight
      });
    }
  }, []);

  const gridStyles = () => ({
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    overflow: 'hidden',
  });

  return (
    <div className="absolute w-[95vw] h-[82.5vh] sm:h-[94vh] m-auto left-0 right-0 top-0 bottom-0 z-[1]" >
      <video
        autoPlay
        className="absolute object-cover w-full h-full"
        loop
        muted
      >
        <source src="/backgroundVideo.mp4" type="video/mp4" />
      </video>
      <div
        ref={gridRef}
        className={`absolute tile-grid grid h-full w-full opacity-80`}
        style={gridStyles()}
      >
        {createTiles(columns * rows)}
      </div>
    </div>
  )
}

export default Background;
