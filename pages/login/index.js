import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

function index({ providers }) {
  return (
    <div className='w-full h-screen text-white flex flex-col items-center justify-center space-y-2 bg-blue-300'>
      <h1>LOGIN WITH SPOTIFY</h1>
      {Object.values(providers).map((provider) => (
        <button
          key={provider.name}
          className='text-sm px-6 py-1 rounded-[5px] bg-green-400'
          onClick={() => signIn()}
        >
          LOGIN WITH {provider.name.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default index;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
