'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import SearchIcon from '../icons/SearchIcon';
import Avatar from 'react-avatar';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" bg-gray-500/10 flex flex-col md:flex-row gap-5 px-7">
      <div
        className="
    absolute
    top-0
    left-0
     filter
     blur-3xl
     -z-50
     w-full
      h-96
     bg-gradient-to-br
     from-purple-400
     to-orange-500
     opacity-40 
   
   "
      ></div>

      <div>
        <Image
          src="/trellologo.png"
          height={500}
          width={500}
          alt="logo"
          className=" h-24 w-48 object-contain"
        ></Image>
      </div>
      <div className=" flex items-center justify-end flex-1 gap-5">
        <form className=" rounded-md  flex-1 flex items-center md:flex-initial shadow-md bg-white p-2 gap-2 ">
          <SearchIcon></SearchIcon>
          <input
            type="search"
            placeholder="search"
            className=" outline-none flex-1"
          ></input>
          <button type="submit" hidden></button>
        </form>

        <Avatar name="Hari SUdarsan" size="50" round></Avatar>
      </div>
    </nav>
  );
};

export default Navbar;
