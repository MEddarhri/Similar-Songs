import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import dateFormat from 'dateformat';

function SongSuggestion({ item }) {
  let duration = dateFormat(item.duration, 'm:ss');
  return (
    <li className='song-suggestion  transition'>
      <div className='flex p-2 cursor-pointer items-center'>
        <a href={`spotify:track:${item.spotifyId}`}>
          <div className='play bg-[#ffffff1a] my-auto mr-4 sm:mr-8 w-[50px] h-[50px] rounded-[50px] flex items-center justify-center'>
            <BsFillPlayFill className='text-white text-[1.4rem] ' />
          </div>
        </a>
        <a href={`spotify:track:${item.spotifyId}`} className='flex-1'>
          <div className='details '>
            <h1 className='text-[1.125rem] leading-6 font-medium text-white'>
              {item.name}
            </h1>
            <p className='text-sm text-[#717d89]'>{`${item.artist} - ${duration}`}</p>
          </div>
        </a>
        <a
          href={`/songs-similar-to?artist=${item.artist}&track=${item.name}`}
          className='goto my-auto ml-auto w-[50px] h-[50px]  flex items-center justify-center lg:hidden'
        >
          <BiArrowBack className='text-[#717d89] rotate-180 text-[1.5rem] font-bold' />
        </a>
        <a
          href={`/songs-similar-to?artist=${item.artist}&track=${item.name}`}
          className='more hidden text-[1rem] py-1 text-white font-bold px-4  rounded-[40px] border border-white bg-transparent hover:bg-white hover:text-[#12273a] transition'
        >
          More like this
        </a>
      </div>
    </li>
  );
}

export default SongSuggestion;
