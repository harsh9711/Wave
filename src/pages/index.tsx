"use client";

import { Navbar } from "@/components/Navbar";
import { EventsSection } from "@/components/EventsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GallerySection } from "@/components/GallerySection";
import { JoinSection } from "@/components/JoinSection";
import { Footer } from "@/components/Footer";
import Marquee from "react-fast-marquee";
import { SITE } from "@/lib/config";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";

const Index = () => {
  // ✅ Correct: call the hook at the top level (not inside useEffect)
  useVisitorTracking(
    "https://script.google.com/macros/s/AKfycbys7fzSQMSXUEA2v-8VdrfHWTRLIkfot84w2r2r0tzvs_WSd9ZdhAbzN2pfWbmMyhiX/exec"
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-white mb-6 animate-fade-in">
            Welcome to {SITE.name}
          </h1>
          <p className="mt-4 text-xl md:text-3xl text-white/90 max-w-3xl">
            {SITE.tagline}
          </p>
        </div>
      </section>

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

      {/* Donate Section */}
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
