# MyBindle Landing Page

A modern, responsive landing page for the MyBindle mobile app built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Beautiful, clean UI with smooth animations
- **Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Fast Performance**: Optimized with Vite for lightning-fast loading
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **SEO Friendly**: Optimized for search engines

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3001`

3. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
mybindle-landing/
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── hero-phone.png
│       ├── app-store.png
│       ├── google-play.png
│       ├── feature-icons/
│       └── testimonials/
├── src/
│   ├── assets/
│   │   ├── logo.svg
│   │   ├── phone-mockup.png
│   │   └── illustrations/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── HowToInstall.jsx
│   │   ├── Testimonials.jsx
│   │   ├── DownloadSection.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── LandingPage.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── README.md
└── vite.config.js
```

## 🧩 Components

- **Navbar**: Fixed navigation bar with smooth scrolling links
- **HeroSection**: Hero section with app mockup and download buttons
- **FeaturesSection**: Showcase of app features
- **HowToInstall**: Step-by-step installation guide
- **Testimonials**: User testimonials section
- **DownloadSection**: Call-to-action download section
- **Footer**: Footer with links and social media

## 🎨 Styling

This project uses **Tailwind CSS** for styling. The configuration is in `tailwind.config.js`.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🖼️ Images

Add the following images to `public/images/`:

- `hero-phone.png` - Hero section phone mockup
- `app-store.png` - App Store badge
- `google-play.png` - Google Play badge

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Vite and configure the build

### Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

