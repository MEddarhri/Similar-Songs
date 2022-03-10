import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import spotifyApi from '../lib/spotify';

function useSpotify() {
  const { data } = useSession();

  useEffect(() => {
    if (data) {
      spotifyApi.setAccessToken(data.user.token);
    }
  }, [data]);

  return spotifyApi;
}

export default useSpotify;
