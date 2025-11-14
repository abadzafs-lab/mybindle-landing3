# Setup Guide

## Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Open browser**
   - Navigate to `http://localhost:3001`
   - The server should open automatically

## Required Images

Add the following images to make the landing page complete:

### Public Images (`public/images/`)

- `hero-phone.png` - Phone mockup for hero section (recommended: 600x1200px)
- `app-store.png` - App Store badge (recommended: 180x60px)
- `google-play.png` - Google Play badge (recommended: 180x60px)

### Optional Images

- `public/images/feature-icons/` - Feature icons (if using custom icons)
- `public/images/testimonials/` - User profile images for testimonials

### Assets (`src/assets/`)

- `logo.svg` - Logo file (if using SVG logo)
- `phone-mockup.png` - Alternative phone mockup
- `illustrations/` - Any illustration assets

### Favicon

- `public/favicon.ico` - Website favicon

## Image Sources

You can find free app store badges and phone mockups from:

- **App Store Badges**: Apple Developer Resources
- **Google Play Badges**: Google Play Brand Guidelines
- **Phone Mockups**: Figma, Unsplash, or design tools
- **Placeholder Images**: Use placeholder services like placeholder.com or unsplash.com

## Customization

### Colors

Edit `tailwind.config.js` to change the primary color scheme.

### Content

Edit the component files in `src/components/` to customize:

- Hero section text
- Feature descriptions
- Testimonials
- Footer links

### Styling

- Global styles: `src/styles/global.css`
- Tailwind styles: `src/index.css`
- Component styles: Inline Tailwind classes in components

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Troubleshooting

### Images not loading

- Make sure images are in the correct directory
- Check image file names match exactly (case-sensitive)
- Verify image paths in components

### Styling issues

- Run `npm install` to ensure all dependencies are installed
- Check that Tailwind CSS is properly configured
- Clear browser cache

### Port already in use

- Change the port in `vite.config.js`
- Or use: `npm run dev -- --port 3002`
