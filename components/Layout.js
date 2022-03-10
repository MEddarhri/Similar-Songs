import React from 'react';
import Head from 'next/head';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>ExM Songs : Find Similar Songs</title>
        <link rel='icon' href='/images/exm-logo-official.svg' />
      </Head>
      {children}
    </div>
  );
}

export default Layout;
