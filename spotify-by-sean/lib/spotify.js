import SpotifyWebApi from "spotify-web-api-node";

// the scopes are what I'm asking for or permissions I'm asking Spotify to allow me to do.
const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-email",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-modify-playback-state",
  "user-read-recently-played",
  "user-follow-read",

].join(",");

const params = {
  scope: scopes,
}

const queryParamString = new URLSearchParams(params).toString();

const LOGIN_URL = "https://accounts.spotify.com/authorize?" + queryParamString.toString()

const spotifyAPI = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

export default spotifyAPI;
export { LOGIN_URL };