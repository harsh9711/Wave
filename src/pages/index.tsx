"use client";

import { Navbar } from "@/components/Navbar";
import { EventsSection } from "@/components/EventsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GallerySection } from "@/components/GallerySection";
import { JoinSection } from "@/components/JoinSection";
import { Footer } from "@/components/Footer";
import Marquee from "react-fast-marquee";
import { SITE } from "@/lib/config";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((e) => {
          console.warn("Autoplay prevented:", e);
        });
      }
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasConsented = localStorage.getItem("visitorConsent");
      if (!hasConsented) {
        setShowModal(true);
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}

      <section className="relative w-full h-screen overflow-hidden bg-[url('/fallback.jpg')] bg-cover bg-center">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
        >
          <source src="/kurukshetra.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Welcome to {SITE.name}
          </h1>
        </div>
      </section>


      {/* Visitor Consent Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto text-center">
            <h2 className="text-xl font-bold mb-4">We respect your privacy</h2>
            <p className="text-gray-600 mb-6">
              Do you consent to anonymous data collection for improving experience?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  localStorage.setItem("visitorConsent", "true");
                  setShowModal(false);
                }}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* College Marquee */}
      <section className="py-12 bg-card overflow-hidden border-y border-border">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">
          {SITE.name} is in every college 🌍
        </h2>
        <Marquee gradient={false} speed={60} pauseOnHover>
          {[
            "IIT Delhi",
            "IIT Bombay",
            "NIT Trichy",
            "BITS Pilani",
            "DTU",
            "NSUT",
            "DU",
            "IIT Madras",
            "IIT Kharagpur",
            "IIIT Delhi",
          ].map((college, i) => (
            <span
              key={i}
              className="mx-8 text-xl font-medium text-foreground/70 hover:text-primary transition"
            >
              {college}
            </span>
          ))}
        </Marquee>
      </section>

      <EventsSection />
      <TestimonialsSection />
      <GallerySection />
      <JoinSection />

      <section id="donate" className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Your contribution helps us organize more events, workshops, and reach more students
            across the country. Every donation makes a difference!
          </p>
          <button className="bg-secondary hover:bg-secondary/90 text-foreground font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
            Donate Now ❤️
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
