import React from 'react';

function Boxs({ src, title, desc }) {
  return (
    <div className='mx-auto flex space-x-2 rounded-[10px] bg-[#0f2130] w-[350px] max-w-full p-3'>
      <div className='icon w-[50px] h-[50px] bg-[#1c3850ce] flex items-center justify-center rounded-[50px]'>
        <img src={src} alt={title} />
      </div>
      <div className='grid '>
        <h3 className='font-bold text-white text-[1rem]'>{title}</h3>
        <p className='text-sm text-[#fff7] '>{desc}</p>
      </div>
    </div>
  );
}

export default Boxs;
