import Boxs from '../components/Boxs';
import { useState } from 'react';
import Search from '../components/Search';
import { signOut } from 'next-auth/react';

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);

  function handleShowSearch() {
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    document.body.classList.add('overflow-hidden');
    setShowSearch(true);
  }
  return (
    <div className=' relative bg-[#12273a] bg-image max-w-[1440px] mx-auto min-h-screen '>
      <div className='absolute z-10 w-full h-full top-0 left-0 right-0  overlay '></div>
      <div className='relative z-20 px-[10vw] py-[15vw]'>
        <img
          className='w-[50px] mx-auto mb-[30px]'
          src='/images/spotify.png'
          alt='spotify image'
        />
        <p className='text-center mx-auto mb-[30px] max-w-[440px] text-[1.125rem] font-medium text-[#fff7]'>
          {`
          Give us your favorite track and we’ll give you a Spotify playlist with
          similar songs that you’ll love.`}
        </p>
        {showSearch == false && (
          <div className='mx-auto flex flex-col items-center justify-center'>
            <p className='text-center mb-[30px] font-bold text-white text-[1.125rem]'>
              {'Find songs similar to :'}
            </p>
            <div
              className='input w-[320px] max-w-full bg-[#0f2130] text-[1.125rem] text-[#fff7] font-medium px-[30px] py-[10px] rounded-[40px]'
              onClick={handleShowSearch}
            >
              Enter track
            </div>
          </div>
        )}
        <div className='py-[50px] flex flex-col space-y-4'>
          <Boxs
            src='/images/patreon.svg'
            title='Help us keep going.'
            desc='Support us on patreon'
          />
          <Boxs
            src='/images/improve.svg'
            title='What do you think of Spotalike?'
            desc={`We'd love your feedback.`}
          />
          <button
            className='text-sm px-6 py-1 rounded-[5px] bg-green-400'
            onClick={() => signOut()}
          >
            SIGN OUT
          </button>
        </div>
      </div>
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </div>
  );
}
