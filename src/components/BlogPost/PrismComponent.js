'use client'

import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';

import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-twilight.css";

const PrismComponent = ({ children }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll(); // <--- prepare Prism 
    };
    highlight();
  }, []);

  return (
    <pre className="">
      <code ref={codeRef} className="language-javascript bg-[#1b1d20]">
        {children}
      </code>
    </pre>
  );
};

export default PrismComponent;
