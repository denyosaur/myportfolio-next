'use client'

import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';

const PrismComponent = ({ children }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
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
