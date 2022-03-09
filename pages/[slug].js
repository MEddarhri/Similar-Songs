import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { BsSpotify } from 'react-icons/bs';
import { FaPatreon } from 'react-icons/fa';
import { MdOutlineErrorOutline } from 'react-icons/md';
import Boxs from '../components/Boxs';
import SongSuggestion from '../components/SongSuggestion';
import Search from '../components/Search';
import dateFormat from 'dateformat';

function Slug({ data }) {
  const { tracks } = data;
  const [showSearch, setShowSearch] = useState(false);

  if (data.tracks == undefined) {
    return (
      <div className='bg-[#12273a] flex flex-col h-screen relative max-w-[1440px] mx-auto'>
        {showSearch && <Search setShowSearch={setShowSearch} />}
        <Navbar setShowSearch={setShowSearch} showSearch={showSearch} />
        <main className='flex-1 flex flex-col space-y-5 items-center justify-center px-[20px] '>
          <MdOutlineErrorOutline className='text-[5rem] text-[#ed3ca9]' />
          <h1 className='text-[1.125rem] sm:text-[2rem] md:text-[3rem] font-bold text-center  text-white'>
            We could not find any similar songs to this track. Try searching for
            something different.
          </h1>
        </main>
      </div>
    );
  } else {
    return (
      <div className='bg-[#12273a] relative max-w-[1440px] mx-auto'>
        {showSearch && <Search setShowSearch={setShowSearch} />}
        <Navbar setShowSearch={setShowSearch} showSearch={showSearch} />
        <div className='py-[50px] px-[20px] md:px-[60px] md:py-[50px] lg:px-[150px]'>
          <h3 className='text-[.85rem] tracking-wide text-[#fff9] font-medium uppercase mb-2'>
            Songs similar to:
          </h3>
          <h1 className='text-[1.75rem] font-bold text-white mb-2 md:text-[2.3rem]'>
            {`${data.track} By ${data.artist}`}
          </h1>
          <p className='text-[.85rem] text-[#fff9] font-medium mb-4'>
            {`${data.trackCount} songs, ${
              dateFormat(data.duration, 'h') +
              ' h ' +
              dateFormat(data.duration, 'mm')
            } minutes of similar songs, enjoy!`}
          </p>
          <div className='md:flex md:space-x-10'>
            <button className='flex items-center space-x-2 px-6 py-3 mb-8 rounded-[50px] border-2  border-[#3cedba] text-[#3cedba] hover:bg-[#3cedba] hover:text-[#12273a] transition'>
              <BsSpotify className='text-[22px]' />
              <span className='font-bold'>Add playlist to Spotify</span>
            </button>
            <div className=' flex space-x-2 rounded-[10px] bg-[#0f2130]   p-3 md:p-2  md:rounded-none md:bg-transparent'>
              <div className='icon w-[40px] h-[40px] bg-[#1c3850ce] flex items-center justify-center rounded-[50px]  md:bg-white'>
                <FaPatreon className='text-white md:text-black' />
              </div>
              <div>
                <h3 className='font-bold text-white text-[1rem] md:text-sm'>
                  Help us keep going.
                </h3>
                <p className='text-sm text-[#fff7] md:underline hover:no-underline transition cursor-pointer '>
                  Support us on patreon
                </p>
              </div>
            </div>
          </div>

          <ul className='py-4'>
            {tracks.map((item, index) => (
              <SongSuggestion key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const { artist, track } = context.query;
  const payload = { artist, track };
  let data;
  try {
    const res = await fetch(
      'https://thingproxy.freeboard.io/fetch/https://api.spotalike.com/v1/playlists',
      {
        method: 'POST',
        body: JSON.stringify(payload),
      }
    );
    data = await res.json();
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      data,
    },
  };
}
export default Slug;
