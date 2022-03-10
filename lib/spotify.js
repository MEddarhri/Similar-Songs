import SpotifyWebApi from 'spotify-web-api-node';

const scopes = [
  // 'user-read-email',
  // 'playlist-read-private',
  // 'playlist-read-collaborative',
  // 'playlist-modify-private',
  // 'playlist-modify-public',
  // 'user-read-email',
  // 'user-read-private',
  // 'user-library-read',
  // 'user-top-read',
  // 'user-read-playback-state',
  // 'user-read-recently-played',
  // 'streaming',
  // 'app-remote-control',
  // 'user-library-modify',
  // 'user-follow-modify',
  // 'user-follow-read',
  'playlist-modify-public',
].join(',');

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `http://accounts.spotify.com/authorize?scope=playlist-modify-public`;

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };
