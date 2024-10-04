import { useContext } from "react";
import { AudioContextType, AudioContext } from "../context/AudioProvider";

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
