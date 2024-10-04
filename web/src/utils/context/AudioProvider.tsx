import React, { createContext, useRef, useState } from "react";

export type AudioContextType = {
  play: () => void;
  pause: () => void;
  isPlaying: boolean;
};

export const AudioContext = createContext<AudioContextType | undefined>(
  undefined
);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <AudioContext.Provider value={{ play, pause, isPlaying }}>
      <audio ref={audioRef} src="/audio/sampai-jadi-debu.mp3" loop={true} />
      {children}
    </AudioContext.Provider>
  );
};
