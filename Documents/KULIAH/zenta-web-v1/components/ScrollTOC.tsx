"use client"
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const ScrollTOC = ({ post }: any) => {
  const [showTOC, setShowTOC] = useState(true);
  const headings = post.body.filter((block: { _type: string; style: string; }) => block._type === "block" && block.style?.startsWith("h"));

  const tableOfContents: { text: string; level: number; id: string }[] = headings.map((heading: { children: { text: string }[]; style: string | any[]; _key: any; }) => ({
    text: heading.children[0].text,
    level: Number(heading.style.slice(1)),
  }));
  const toggleTOC = () => {
    setShowTOC(!showTOC);
  };

  return (
    <div className="p-4 relative">
      <div className="flex mb-2 justify-between items-center rounded-lg p-2 dark:bg-[#151618] bg-[#e0e3e7a9]">
        <h2 className="text-2xl font-bold inline-block">
          Table of Contents
        </h2>
        <button
          onClick={toggleTOC}
          className="p-1 right-2 rounded-full bg-white dark:bg-emerald-900 shadow-md hover:shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-900 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ transform: `rotate(${showTOC ? 90 : 180}deg)` }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${showTOC ? "max-h-96" : "max-h-0"
          }`}
      >
        <ol className="space-y-2 mx-5 dark:bg-[#15161896] bg-[#e0e3e763] transform transition-transform rounded-lg p-4">
          {tableOfContents.map(({ text, level }: any) => {
            let margin = 0;
            let fontSize = 'text-base';
            if (level === 2) {
              margin = 0;
              fontSize = 'text-lg font-bold';
            }
            if (level === 3) {
              margin = 10;
            } if (level === 4) {
              margin = 10;
            }
            // Add more levels as needed
            return (
              <li key={text} className={`mx-${margin}`}>
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-100}
                  className={`block hover:text-blue-600 transition-colors ${fontSize}`}
                >
                  {text}
                </Link>
              </li>
            )
          })}


        </ol>
      </div>
    </div>
  );
};

export default ScrollTOC;