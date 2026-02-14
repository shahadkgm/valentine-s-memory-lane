import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MusicPlayerProps {
  audioSrc?: string;
}
const BASE_PATH = import.meta.env.BASE_URL;
const MusicPlayer = ({ audioSrc = `${BASE_PATH}rab-rakha1.mp3` }: MusicPlayerProps) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.loop = true;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.log);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-40 flex gap-2">
      <audio ref={audioRef} src={audioSrc} />
      
      <button
        onClick={togglePlay}
        className={cn(
          "p-3 rounded-full transition-all duration-300",
          "bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl",
          "hover:scale-110 active:scale-95",
          isPlaying && "pulse-love"
        )}
      >
        <Music size={24} className={cn("text-primary", isPlaying && "animate-pulse")} />
      </button>
      
      <button
        onClick={toggleMute}
        className={cn(
          "p-3 rounded-full transition-all duration-300",
          "bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl",
          "hover:scale-110 active:scale-95"
        )}
      >
        {isMuted ? (
          <VolumeX size={24} className="text-primary" />
        ) : (
          <Volume2 size={24} className="text-primary" />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
