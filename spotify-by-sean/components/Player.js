import { useSession } from "next-auth/react"
import { useRecoilState } from "recoil"
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom"
import { useSpotify } from "../hooks/useSpotify"
import useSongInfo from "../hooks/useSongInfo"
import { useState } from "react"

const Player = () => {
  const spotifyAPI = useSpotify()
  const { data: session, status } = useSession()
  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useState(isPlaying)
  const [volume, setVolume] = useState(50)

  const songInfo = useSongInfo()

  return (
    <div>
      {/* Left side */}
      <div>
        <img className="hidden md:inline h-10 w-10"
          src={songInfo?.album.images?.[0].url} alt="" />
      </div>
    </div>
  )
}

export default Player
