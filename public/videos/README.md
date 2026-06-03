# Video Assets for Black Cord Production

This directory contains the video assets used throughout the website. To add real videos, place your video files here with the following naming convention:

## Required Video Files:

### Service Pages:
- `tiktok-viral-demo.mp4` - TikTok viral video demonstration
- `instagram-reels-demo.mp4` - Instagram Reels demonstration  
- `youtube-shorts-demo.mp4` - YouTube Shorts demonstration
- `motion-graphics-demo.mp4` - Motion graphics demonstration
- `cash-cow-channels-demo.mp4` - Cash Cow Channels demonstration
- `magnates-media-style-demo.mp4` - Magnates Media Style demonstration
- `documentary-style-demo.mp4` - Documentary Style demonstration
- `faceless-videos-demo.mp4` - Faceless Videos demonstration
- `thumbnails-demo.mp4` - Thumbnail design demonstration

### Portfolio:
- `portfolio-showcase.mp4` - Main portfolio showcase video
- `portfolio-1.mp4` - Portfolio item 1
- `portfolio-2.mp4` - Portfolio item 2
- `portfolio-3.mp4` - Portfolio item 3
- `portfolio-4.mp4` - Portfolio item 4
- `portfolio-5.mp4` - Portfolio item 5

### Featured Videos:
- `featured-tiktok-viral.mp4` - Featured TikTok viral video
- `featured-cash-cow-documentary.mp4` - Featured cash cow documentary

## Video Specifications:

### TikTok/Instagram Reels/YouTube Shorts (9:16 aspect ratio):
- Resolution: 1080x1920 (Full HD)
- Duration: 15-60 seconds
- Format: MP4
- Codec: H.264
- Bitrate: 2-5 Mbps

### Motion Graphics/Portfolio (16:9 aspect ratio):
- Resolution: 1920x1080 (Full HD) or 1280x720 (HD)
- Duration: 30 seconds - 3 minutes
- Format: MP4
- Codec: H.264
- Bitrate: 5-10 Mbps

## Fallback Videos:
If local videos are not available, the site will automatically fall back to sample videos from sample-videos.com.

## Quick Setup:
To quickly add sample videos for testing, you can download free sample videos from:
- https://sample-videos.com/
- https://www.learningcontainer.com/sample-video-files/
- https://file-examples.com/index.php/sample-video-files/

### Recommended Sample Videos:
1. **Portfolio Videos** (16:9 aspect ratio):
   - Download 5 different sample videos (1-3 minutes each)
   - Rename them as: `portfolio-1.mp4`, `portfolio-2.mp4`, etc.
   - Place in `/public/videos/` directory

2. **Featured Video** (16:9 aspect ratio):
   - Download 1 high-quality sample video
   - Rename as: `featured-tiktok-viral.mp4`
   - Place in `/public/videos/` directory

3. **Thumbnails** (JPG format):
   - Create or download thumbnail images
   - Rename as: `tiktok-videos-thumbnail.jpg`, `cash-cow-channels-thumbnail.jpg`, etc.
   - Place in `/public/videos/thumbnails/` directory

## Adding Your Videos:
1. Export your videos in the specified formats
2. Place them in this `/public/videos/` directory
3. Ensure filenames match exactly as listed above
4. Test video playback across different browsers and devices

## Optimization Tips:
- Compress videos for web delivery
- Use appropriate bitrates for quality vs. file size
- Consider adding WebM format for better browser support
- Test loading times on slower connections
