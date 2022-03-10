import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

function index() {
  return (
    <div className='w-full h-screen text-white flex flex-col items-center justify-center space-y-2 bg-blue-300'>
      <h1>LOGIN WITH SPOTIFY</h1>
    </div>
  );
}

export default index;
