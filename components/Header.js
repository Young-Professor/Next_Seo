import React from "react";
import Link from 'next/link'

function Header() {
  return (
    <div className=" shadow-lg bg-[#d9ebf3] flex justify-between  h-14 p-3 items-center">
      <div>
        <a>My Logo</a>
      </div>
      <div className="flex space-x-10 items-center mx-5 text-xl text-blue-500 menuItems">
          <Link exact='true' href="/" ><b>Home</b></Link>
          <Link  href="/Services"><b>Services</b></Link>
          <Link  href="/" ><b>Collections</b></Link>
          <Link  href="/contacts" ><b>Contact</b></Link>
          <Link  href="/about" ><b>About</b></Link>
      </div>
      <div className="flex space-x-4 mx-2 profile ">
        <p className="mt-2 ">
          <Link href="/Login">Login</Link>
        </p>
        <p className="mt-2">
          <Link href="/Register">Register</Link>
        </p>
      </div>
    </div>
  );
}
export default Header;

