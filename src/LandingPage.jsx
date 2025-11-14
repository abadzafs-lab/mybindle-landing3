import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/HeroSection";
import Features from "./components/FeaturesSection";
import InstallSteps from "./components/HowToInstall";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ConnectionSection from "./components/ConnectionSection";
import DownloadSection from "./components/DownloadSection";
import { AnimatePresence, motion } from "framer-motion";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>MyBindle — Stay Connected</title>
        <meta
          name="description"
          content="MyBindle — Stay connected with friends and family. Fast, private, delightful."
        />
        <meta property="og:title" content="MyBindle — Stay Connected" />
        <meta
          property="og:description"
          content="Fast, private, and delightful social app."
        />
      </Helmet>

      <div className="min-h-screen bg-[#F7F7F9] text-[#1F1F35]">
        <Navbar />

        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Hero />
            <Features />
            <ConnectionSection />
            <InstallSteps />
            <CTA />
            <Testimonials />
            <DownloadSection />
          </motion.main>
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
}
