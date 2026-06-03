import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  fallbackSrc?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  showControls?: boolean;
  aspectRatio?: "video" | "square" | "portrait";
}

const VideoPlayer = ({
  src,
  poster,
  fallbackSrc = "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
  className = "",
  autoPlay = false,
  muted = true,
  loop = true,
  showControls = false,
  aspectRatio = "video"
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [showPlayButton, setShowPlayButton] = useState(!autoPlay);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[9/16]"
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowPlayButton(true);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setShowPlayButton(false);
      }
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    if (!showControls) {
      handlePlayPause();
    }
  };

  return (
    <div className={`relative group ${aspectClasses[aspectRatio]} ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg"
        poster={poster}
        preload="metadata"
        muted={isMuted}
        loop={loop}
        playsInline
        onClick={handleVideoClick}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        <source src={fallbackSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Overlay */}
      {showPlayButton && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div 
            className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={handlePlayPause}
          >
            <Play className="w-8 h-8 text-black ml-1" />
          </div>
        </div>
      )}

      {/* Custom Controls */}
      {showControls && (
        <div className="absolute bottom-4 left-4 right-4 bg-black/50 rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePlayPause}
              className="text-white hover:text-red-400 transition-colors duration-200"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            
            <button
              onClick={handleMuteToggle}
              className="text-white hover:text-red-400 transition-colors duration-200"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
