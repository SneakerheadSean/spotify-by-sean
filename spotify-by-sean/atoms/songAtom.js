import { atom } from "recoil";

export const currentTrackIdState = atom({
  key: "currentTrackIdState", // unique ID ; since atoms need to have different "keys"
  default: null, // aka initail value
})

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false, 
})