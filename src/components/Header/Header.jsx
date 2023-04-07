import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
    <div>
      <div className="navbar bg-lime-500 shadow-lg lg:px-12">
        <div className="flex-1">
          <a className="btn btn-ghost bg-blue-700 text-white normal-case text-2xl font-bold">
             IT Books Cafe
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal px-1 text-1xl font-bold">
                <li className='mr-9'>
                    <NavLink to='/' className={({isActive}) => isActive && 'bg-red-700 text-white px-3 py-1 rounded-md'}>Home</NavLink>
                </li>
                <li className='mr-9'>
                   <NavLink to='/books' className={({isActive}) => isActive && 'bg-red-700 text-white px-3 py-1 rounded-md'}>Books</NavLink>
                </li>
                <li className='mr-9'>
                    <NavLink to='/about' className={({isActive}) => isActive && 'bg-red-700 text-white px-3 py-1 rounded-md'}>About</NavLink>
                </li>
                <li className='mr-9'>
                    <NavLink to='/blogs' className={({isActive}) => isActive && 'bg-red-700 text-white px-3 py-1 rounded-md'}>Blogs</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://picsum.photos/500/300?random=3" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Header;