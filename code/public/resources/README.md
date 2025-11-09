# Resources Directory

This directory contains all media files (images and videos) for the portfolio projects.

## Directory Structure

```
resources/
├── images/
│   ├── capynote.png
│   ├── skull_ingame.png
│   ├── smileweb_interface.png
│   ├── smileweb_collision.png
│   ├── train.png
│   ├── verybadsplit_interface.png
│   └── signature.png
└── video/
    └── TerrariaLike.mp4
```

## Adding New Project Media

To add media for a new project:

1. Place your images in `public/resources/images/`
2. Place your videos in `public/resources/video/`
3. Update the project data in `src/data/projectsData.js`
4. The media types supported are:
   - `image`: Single image
   - `images`: Multiple images
   - `video`: MP4 video file
   - `youtube`: YouTube embed URL

## Example Media References

- Images: `../../resources/images/your-image.png`
- Videos: `../../resources/video/your-video.mp4`
- YouTube: `https://www.youtube.com/embed/VIDEO_ID`
