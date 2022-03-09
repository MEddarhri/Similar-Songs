import React from 'react';

function SongSearch({ item, song }) {
  const regex = new RegExp(`${song}`, 'gi');
  let name;
  let artist;

  if (item.name.match(regex)) {
    const indexName = item.name.toLowerCase().indexOf(song.toLowerCase());
    name = (
      <h3 className='text-[1rem] font-medium leading-5 '>
        {item.name.slice(0, indexName)}
        <span className='text-[#3cedba]'>
          {item.name.slice(indexName, indexName + song.length)}
        </span>
        {item.name.slice(indexName + song.length)}
      </h3>
    );
  } else {
    name = <h3 className='text-[1rem] font-medium '>{item.name}</h3>;
  }

  if (item.artist.match(regex)) {
    const indexArtist = item.artist.toLowerCase().indexOf(song.toLowerCase());

    artist = (
      <p className='text-sm text-[#fff8]'>
        {item.artist.slice(0, indexArtist)}
        <span className='text-[#3cedba]'>
          {item.artist.slice(indexArtist, indexArtist + song.length)}
        </span>
        {item.artist.slice(indexArtist + song.length)}
      </p>
    );
  } else {
    artist = <p className='text-sm text-[#fff8]'>{item.artist}</p>;
  }

  return (
    <a href={`/songs-similar-to?artist=${item.artist}&track=${item.name}`}>
      <li className='songSearch transition flex space-x-3 p-2 rounded-[10px] hover:bg-[#3cedba]  cursor-pointer'>
        <div className='flex items-center justify-center px-2'>
          <img
            className='max-w-[none]'
            src='/images/search-icon.svg'
            alt='search-icon'
          />
        </div>
        <div>
          {name}
          {artist}
        </div>
      </li>
    </a>
  );
}

export default SongSearch;
