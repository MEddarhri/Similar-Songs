import { useSession, signOut } from 'next-auth/react';
import React from 'react';
import { BsSpotify } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import Icon from './Icon';

function Navbar({ setShowSearch, showSearch }) {
  const { data: session } = useSession();

  function handleClick() {
    if (showSearch) {
      document.body.classList.remove('overflow-hidden');
      setShowSearch(false);
    } else {
      scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      document.body.classList.add('overflow-hidden');
      setShowSearch(true);
    }
  }
  return (
    <nav className='flex items-center px-5 py-4 md:px-12 md:py-8'>
      <a href={'/'} className='mr-auto'>
        <Icon w={80} color='#3cedba' />
        {/* <BsSpotify className='text-[2rem] md:text-[3rem]  text-[#3cedba]' /> */}
      </a>
      {showSearch == false && (
        <div className='flex items-centerr space-x-4'>
          <p className='text-center hidden md:block pt-1  font-bold text-white text-[1.125rem]'>
            {'Find songs similar to :'}
          </p>
          <div
            className='search px-3 py-1 rounded-[30px] bg-[#0f2130] text-sm text-[#fff9] sm:text-base sm:w-[250px] sm:py-2 cursor-pointer sm:px-6'
            onClick={handleClick}
          >
            Enter track
          </div>
          {session && (
            <button className='p-1 ' onClick={() => signOut()}>
              <FiLogOut className='text-[1.4rem] md:text-[1.6rem] text-red-600' />
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
