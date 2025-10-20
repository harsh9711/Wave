"use client";

import Marquee from "react-fast-marquee";
import { SITE } from "@/lib/config";

export default function Home() {
  return (
    <main className="3bg-black text-white">
      {/* 1️⃣ Hero Section */}
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
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider">
            Welcome to {SITE.name}
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-300">
            {SITE.tagline}
          </p>
        </div>
      </section>

      {/* 2️⃣ Auto-Scrolling College Section */}
      <section className="py-12 bg-gray-900 overflow-hidden">
        <h2 className="text-center text-3xl font-semibold mb-8">
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
          ].map((college, i) => (
            <span
              key={i}
              className="mx-8 text-xl font-medium text-gray-300 hover:text-white transition"
            >
              {college}
            </span>
          ))}
        </Marquee>
      </section>

      {/* 3️⃣ What WAVE Does */}
      <section className="py-16 bg-black text-center">
        <h2 className="text-4xl font-bold mb-6">What {SITE.name} Does</h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-10">
          {SITE.name} connects students across colleges to grow together in
          leadership, learning, and spirituality. We organize interactive
          sessions, workshops, and community projects that inspire positive
          change and holistic growth.
        </p>

        <div className="grid md:grid-cols-3 gap-6 px-6 md:px-20">
          {[
            { title: "Leadership Events", desc: "Empowering youth through guidance and teamwork." },
            { title: "Skill Workshops", desc: "Hands-on sessions for real-world learning." },
            { title: "Spiritual Sessions", desc: "Balance your mind and soul through meditation." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔜 Placeholder for Next Sections */}
      <section className="py-16 text-center bg-gray-900">4️⃣ Events</section>
      <section className="py-16 text-center bg-black">5️⃣ Testimonials</section>
      <section className="py-16 text-center bg-gray-900">6️⃣ Gallery</section>
      <section className="py-16 text-center bg-black">7️⃣ Join Us</section>
      <section className="py-16 text-center bg-gray-900">8️⃣ Footer</section>
    </main>
  );
}
