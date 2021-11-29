import { signIn,useSession } from "next-auth/react"
import { useEffect } from "react"
import spotifyAPI from "../lib/spotify"

export const useSpotify = () => {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (session) {
      // If refresh token attempt fails, direct user to login...
      if (session.error === "RefreshAccessTokenError") {
          signIn()
      }
      spotifyAPI.setAccessToken(session.user.accessToken)
    }
  }, [session])
  return spotifyAPI
}
