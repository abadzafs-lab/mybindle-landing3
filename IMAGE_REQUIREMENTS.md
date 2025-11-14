# Image Requirements

## Required Images

To make the landing page fully functional, you need to add the following images:

### Public Images (`public/images/`)

1. **logo.svg** - MyBindle logo (optional - if not provided, logo image will be hidden)
   - Recommended size: 32x32px or larger
   - Format: SVG

2. **hero-phone.png** - Hero section phone mockup
   - Recommended size: 600x1200px or similar phone proportions
   - Format: PNG with transparent background

3. **app-store.png** - App Store badge
   - Recommended size: 180x60px
   - Format: PNG
   - You can download from: https://developer.apple.com/app-store/marketing/guidelines/

4. **google-play.png** - Google Play badge
   - Recommended size: 180x60px
   - Format: PNG
   - You can download from: https://play.google.com/intl/en_us/badges/

5. **phone-mockup.png** - Phone mockup for HowToInstall section
   - Recommended size: 320x640px or similar
   - Format: PNG

## Optional Images

### Feature Icons (`public/images/feature-icons/`)

- Custom icons for features (currently using emoji)

### Testimonials (`public/images/testimonials/`)

- User profile images for testimonials (currently using initials)

## Image Sources

### Free Resources:

- **Unsplash**: https://unsplash.com/ (for phone mockups)
- **Pexels**: https://www.pexels.com/ (for photos)
- **App Store Badges**: Apple Developer Resources
- **Google Play Badges**: Google Play Brand Guidelines

### Phone Mockup Tools:

- **Figma**: Create custom phone mockups
- **Smartmockups**: https://smartmockups.com/
- **Mockup World**: https://www.mockupworld.co/

## Notes

- All images in `public/images/` are accessed via `/images/filename.png`
- The app will work without images, but they will show as broken image icons
- The logo has error handling - if the image doesn't load, it will be hidden automatically
- Make sure image file names match exactly (case-sensitive)
