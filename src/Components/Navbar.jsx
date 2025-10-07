import React from 'react';
import icon from "../../public/book.svg"
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center py-2.5'>
        <img src={icon} className='size-12' alt="" />
        <ul className='flex gap-5 items-center'>
          <Link to='/'><li>Home</li></Link>
          <Link to='price'><li>Pricing</li></Link>
          <Link to='step'><li>Steps</li></Link>
        </ul>
        <button className='btn bg-linear-to-br from-purple-400 via-pink-500 to-pink-700 rounded-lg text-white font-medium'>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg>
          Get Started</button>

      </nav>
    </div>
  );
};

export default Navbar;