import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";

interface VideoPlayerProps {
  src?: string;
  vimeoId?: string;
  poster?: string;
  fallbackSrc?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  showControls?: boolean;
  aspectRatio?: "video" | "square" | "portrait";
  hoverToPlay?: boolean;
  title?: string;
}

const VideoPlayer = ({
  src,
  vimeoId,
  poster,
  fallbackSrc = "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
  className = "",
  autoPlay = false,
  muted = true,
  loop = true,
  showControls = false,
  aspectRatio = "video",
  hoverToPlay = true,
  title = "Video Player"
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [showPlayButton, setShowPlayButton] = useState(!autoPlay);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[9/16]"
  };

  // Determine if using Vimeo
  const isVimeo = !!vimeoId;

  // Vimeo embed URL
  const vimeoEmbedUrl = vimeoId 
    ? `https://player.vimeo.com/video/${vimeoId}?autoplay=0&muted=${muted ? 1 : 0}&loop=${loop ? 1 : 0}&byline=0&portrait=0&title=0&badge=0&controls=${showControls ? 1 : 0}&background=${hoverToPlay && !autoPlay ? 1 : 0}`
    : "";

  const handlePlayPause = () => {
    if (!isVimeo && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowPlayButton(true);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setShowPlayButton(false);
      }
    } else if (isVimeo && iframeRef.current) {
      const iframe = iframeRef.current;
      const message = isPlaying ? 'pause' : 'play';
      iframe.contentWindow?.postMessage(JSON.stringify({ method: message }), 'https://player.vimeo.com');
      setIsPlaying(!isPlaying);
      setShowPlayButton(isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (!isVimeo && videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    if (!showControls) {
      handlePlayPause();
    }
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Hover to play functionality
  useEffect(() => {
    if (!hoverToPlay || autoPlay) return;

    if (!isVimeo && videoRef.current) {
      if (isHovering) {
        videoRef.current.play();
        setShowPlayButton(false);
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setShowPlayButton(true);
        setIsPlaying(false);
      }
    } else if (isVimeo && iframeRef.current && hoverToPlay) {
      const iframe = iframeRef.current;
      if (isHovering) {
        iframe.contentWindow?.postMessage(JSON.stringify({ method: 'play' }), 'https://player.vimeo.com');
        setIsPlaying(true);
        setShowPlayButton(false);
      } else {
        iframe.contentWindow?.postMessage(JSON.stringify({ method: 'pause' }), 'https://player.vimeo.com');
        setIsPlaying(false);
        setShowPlayButton(true);
      }
    }
  }, [isHovering, isVimeo, hoverToPlay, autoPlay]);

  // Auto play on mount
  useEffect(() => {
    if (autoPlay && !isVimeo && videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log('Autoplay prevented');
      });
    }
  }, [autoPlay, isVimeo]);

  return (
    <div 
      ref={containerRef}
      className={`relative group ${aspectClasses[aspectRatio]} ${className} rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-red-500/20`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Loading State */}
      {isLoading && !isVimeo && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center z-10">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Video Element - HTML5 */}
      {!isVimeo && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
          poster={poster}
          preload="metadata"
          muted={isMuted}
          loop={loop}
          playsInline
          onClick={handleVideoClick}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedData={() => setIsLoading(false)}
          onError={() => setHasError(true)}
        >
          <source src={src || fallbackSrc} type="video/mp4" />
          <source src={(src || fallbackSrc).replace('.mp4', '.webm')} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Video Element - Vimeo */}
      {isVimeo && (
        <iframe
          ref={iframeRef}
          src={vimeoEmbedUrl}
          className="w-full h-full rounded-2xl pointer-events-none"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
          onLoad={() => setIsLoading(false)}
        />
      )}

      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Play/Pause Overlay */}
      {showPlayButton && !autoPlay && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div 
            className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-red-500/50"
            onClick={handlePlayPause}
          >
            <Play className="w-10 h-10 text-white ml-1" />
          </div>
        </div>
      )}

      {/* Premium Custom Controls */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePlayPause}
                className="text-white hover:text-red-500 transition-all duration-200 transform hover:scale-110"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              
              {!isVimeo && (
                <button
                  onClick={handleMuteToggle}
                  className="text-white hover:text-red-500 transition-all duration-200 transform hover:scale-110"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              )}
            </div>

            <button
              onClick={handleFullscreen}
              className="text-white hover:text-red-500 transition-all duration-200 transform hover:scale-110"
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      )}

      {/* Title Badge */}
      {title && title !== "Video Player" && (
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {title}
        </div>
      )}

      {/* Error State */}
      {hasError && !isVimeo && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center">
          <svg className="w-16 h-16 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-white text-lg">Failed to load video</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {/* Hover Indicator */}
      {hoverToPlay && !autoPlay && (
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {isPlaying ? 'Playing...' : 'Hover to play'}
        </div>
      )}
    </div>
  );
};

// Example usage component with the specific Vimeo video
const VideoShowcase = () => {
  return (
    <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
        {/* Left Content */}
        <motion.div className="space-y-6 sm:space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  We're Not Just Editors
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 300 4" preserveAspectRatio="none">
                  <line x1="0" y1="2" x2="300" y2="2" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="6 4"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ef4444"/>
                      <stop offset="100%" stopColor="#dc2626"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                We're Your Creative Partners
              </span>
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg border-l-4 border-red-500/30 pl-5">
            Here's the thing — we've been where you are. We know the struggle of creating content that actually gets watched. 
            That's why we don't just edit videos; <span className="text-foreground font-medium">we craft stories</span> that hook viewers from the first second and keep them coming back for more.
          </p>

          <div className="space-y-5">
            <motion.div 
              className="flex items-start gap-4 group"
              initial="hidden"
              animate="visible"
              variants={fadeVariants}
              transition={{ delay: 0.2 }}
            >
              <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="text-foreground font-semibold">We make videos that actually make money</span>
                <p className="text-sm text-muted-foreground/80 mt-1">Content that drives conversions and boosts your ROI</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-4 group"
              initial="hidden"
              animate="visible"
              variants={fadeVariants}
              transition={{ delay: 0.4 }}
            >
              <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="text-foreground font-semibold">TikTok & Instagram content that goes viral</span>
                <p className="text-sm text-muted-foreground/80 mt-1">Optimized for algorithms to maximize reach and engagement</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-4 group"
              initial="hidden"
              animate="visible"
              variants={fadeVariants}
              transition={{ delay: 0.6 }}
            >
              <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="text-foreground font-semibold">Documentary-style videos that keep people watching</span>
                <p className="text-sm text-muted-foreground/80 mt-1">Storytelling that increases watch time and retention</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="pt-4 flex flex-wrap gap-6 border-t border-border/50"
            initial="hidden"
            animate="visible"
            variants={fadeVariants}
            transition={{ delay: 0.8 }}
          >
            <div>
              <div className="text-2xl font-bold text-red-500">500+</div>
              <div className="text-xs text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500">10M+</div>
              <div className="text-xs text-muted-foreground">Views Generated</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500">98%</div>
              <div className="text-xs text-muted-foreground">Retention Rate</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Video Player with Vimeo */}
        <motion.div className="relative order-first md:order-last">
          <VideoPlayer
            vimeoId="1066089898"
            title="Magnates Media Style Edit"
            aspectRatio="video"
            hoverToPlay={true}
            showControls={true}
            loop={true}
            muted={false}
            autoPlay={false}
            className="w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default VideoPlayer;
export { VideoShowcase };