import React from "react";
import Image from "next/image";
import {
  AiOutlineMenu,
  AiFillCamera,
  AiOutlineSearch,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
const Nabar = () => {
  return (
    <div>
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <AiOutlineMenu />
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <Image src="/suwone.png" height={100} width={100} />
          </a>
          <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <AiFillCamera />
            <AiOutlineSearch />
            <AiFillHeart />
            <AiOutlineShoppingCart />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nabar;
