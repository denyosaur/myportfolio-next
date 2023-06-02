"use client"
import React, { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import Tile from './Tile';

import { useWindowSize } from '../Page/hooks';

const Background = ({ color, grid, setGrid }) => {
  const gridRef = useRef();
  const [width, height] = useWindowSize();

  const createTiles = (quantity) => {
    return Array.from(Array(quantity)).map((tile, index) => {
      return <Tile key={index} index={index} color={color} />
    })
  }

  useEffect(() => {
    anime({
      targets: '.tile',
      backgroundColor: 'rgb(65, 90, 119)',
      delay: anime.stagger(40, {
        grid: [grid.columns, grid.rows],
        from: 1,
      })
    })
  }, [grid])

  useEffect(() => {
    let columns = Math.floor(width / 30);
    let rows = Math.floor(height / 30);

    setGrid({ columns, rows });
  }, [height, width, setGrid]);

  const gridStyles = () => ({
    gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
    gridTemplateColumns: `repeat(${grid.columns}, 1fr)`,
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
        {createTiles(grid.columns * grid.rows)}
      </div>
    </div>
  )
}

export default Background;
