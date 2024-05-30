"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Button } from './ui/button';
import {  SignInButton, SignedIn, SignedOut, UserButton,SignUpButton } from '@clerk/nextjs'



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Destinations' },
    { id: 2, text: 'Businesses' },
    { id: 3, text: 'About Us' },
  ];

  return (
    <div className="w-full bg-[#66cc99] text-black">
      <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4">
        {/* Logo */}
        <div className='ml-4 cursor-pointer'>
          <Image
            src="/Rehbar-logo.png"
            alt='logo'
            width={80}
            height={80}
          />
        </div>
        
        {/* Desktop Navigation */}
        <ul className='hidden md:flex justify-center w-full'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 hover:bg-[#006837] rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
            >
              {item.text}
            </li>
          ))}
        </ul>
        
        {/* Authentication Buttons */}
        <div className='hidden md:flex items-center space-x-4'>
          <SignedOut>
            <SignInButton>
              <Button className="bg-[#006837] text-slate-300 hover:text-[#006837] hover:bg-slate-300">Sign up</Button>
            </SignInButton>
          </SignedOut>
          <SignedOut>
            <SignUpButton>
              <Button className="text-[#006837] bg-slate-300 hover:bg-[#006837] hover:text-slate-300" variant="secondary">Login</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
<SignedIn>
  <UserButton showName className="userIcon">
<Button variant="destructive">
  Log out
</Button>
  </UserButton>
</SignedIn>
          </SignedIn>
        </div>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <div className='cursor-pointer bg-[#66cc99]'>
          <Image
            src="/Rehbar-logo.png"
            alt='logo'
            width={80}
            height={80}
          />
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#006837] duration-300 hover:text-white cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
        <div className='px-4'>
          <SignedOut>
            <SignInButton>
              <Button className="w-full bg-[#006837] text-slate-300 hover:text-[#006837] hover:bg-slate-300 my-2">Sign up</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton>
              <Button className="w-full text-[#006837] bg-slate-300 hover:bg-[#006837] hover:text-slate-300 my-2" variant="secondary">Login</Button>
            </UserButton>
          </SignedIn>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
