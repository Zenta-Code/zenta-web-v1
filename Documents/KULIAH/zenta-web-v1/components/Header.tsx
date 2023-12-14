import Image from "next/image";
import Link from "next/link";
import HeaderLogo from "../public/favicon-128x128.webp";
import SearchBar from "./SearchBar";
import DarkModeBtn from "./DarkModeBtn";
import React from 'react';

const MemoizedSearchBar = React.memo(SearchBar);
const MemoizedDarkModeBtn = React.memo(DarkModeBtn);

const Header = () => {

  return (
    <header className="sticky top-0 z-50 py-4 items-center space-x-2 font-medium backdrop-filter backdrop-blur-lg">
      <div className="mx-auto max-w-5xl px-4 md:px-6 gap-4 flex justify-between items-center flex-nowrap sm:flex-wrap">
        <div className="header-items">
          <Link href="/" className="flex items-center">
            <div>
              <Image src={HeaderLogo} width={36} height={36} alt="Logo" loading="lazy" />
            </div>
            <h1 className="text-lg font-cubano font-bold">
              Tensai Mono</h1>
          </Link>
        </div>
        <div className="flex h-8 items-center space-x-2">
          <MemoizedSearchBar />
          <MemoizedDarkModeBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;