import React, { useState, useEffect, useRef } from 'react';
import SongSearch from './SongSearch';

function Search({ setShowSearch }) {
  const [song, setSong] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  useOutsideAlerter(searchRef, setShowSearch);
  function handleBack() {
    document.body.classList.remove('overflow-hidden');
    setShowSearch(false);
  }

  function handleChange(e) {
    setSong(e.target.value);
    if (e.target.value == '') {
      setSearchResults([]);
    }
  }
  function handleClear() {
    setSearchResults([]);
    setSong('');
  }

  useEffect(() => {
    async function fn() {
      try {
        const res = await fetch(
          `https://thingproxy.freeboard.io/fetch/https://api.spotalike.com/v1/tracks/search?q=${song}`
        );

        const songs = await res.json();

        setSearchResults(songs.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (song) {
      fn();
    }
  }, [song]);

  return (
    <div
      className='absolute inset-0  p-2 backdrop w-full h-screen  text-white z-30 bg-[#21364ae7] md:w-[500px] md:top-0 md:left-0 md:pt-[120px]'
      ref={searchRef}
    >
      <p className='text-center hidden md:block mb-[30px] font-bold text-white text-[1.25rem]'>
        {'Find songs similar to :'}
      </p>
      <div
        className={`flex  px-3  py-3 rounded-tl-[15px] rounded-tr-[15px] ${
          searchResults.length == 0
            ? 'rounded-br-[15px]  rounded-bl-[15px]'
            : 'mb-[1px]'
        }  bg-[#0f2130] max-w-[450px] mx-auto`}
      >
        <button
          className='flex items-center w-[35px]  justify-center px-2 mr-[20px]'
          onClick={handleBack}
        >
          <img className='max-w-[none]' src='/images/go-back.svg' alt='back' />
        </button>
        <input
          className='bg-transparent w-full  outline-none  font-medium text-[1.125rem]'
          type='text'
          placeholder='Enter track'
          onChange={handleChange}
          value={song}
          autoFocus
        />
        {song.length >= 1 && (
          <button
            className='flex items-center w-[35px] justify-center px-2 !ml-auto'
            onClick={handleClear}
          >
            <img
              className='w-[26px] max-w-[none] '
              src='/images/clear-input.svg'
              alt='clear'
            />
          </button>
        )}
      </div>
      {searchResults.length >= 1 && (
        <ul className='bg-[#0f2130] py-2 px-3 overflow-hidden rounded-bl-[15px] rounded-br-[15px] w-[450px] max-w-full mx-auto'>
          {searchResults.map((item, index) => (
            <SongSearch key={index} item={item} song={song} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;

function useOutsideAlerter(ref, fn) {
  useEffect(() => {
    function clickOutside(e) {
      if (ref && !ref.current.contains(e.target)) {
        document.body.classList.remove('overflow-hidden');
        fn(false);
      }
    }
    document.addEventListener('mousedown', clickOutside);
    return () => document.removeEventListener('mousedown', clickOutside);
  }, [ref]);
}
