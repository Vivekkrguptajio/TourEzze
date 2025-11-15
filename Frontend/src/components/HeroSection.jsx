import { useState, useEffect } from "react";
import "../styles/HeroSection.css";

const slides = [
  {
    image: "/Photos/HeroImage/Photo1.jpg",
    title: "Mesmerizing Waterfalls",
    desc: "Experience the beauty and power of Jharkhand’s iconic falls.",
  },
  {
    image: "/Photos/HeroImage/Photo2.avif",
    title: "Rich Tribal Culture",
    desc: "Discover vibrant art, traditions, and festivals.",
  },
  {
    image: "/Photos/HeroImage/Photo3.avif",
    title: "Untouched Forests",
    desc: "Walk through dense greenery full of wildlife.",
  },
  {
    image: "/Photos/HeroImage/Photo4.avif",
    title: "Cultural Vibrance",
    desc: "Feel the warmth of Jharkhand's heritage.",
  },
  {
    image: "/Photos/HeroImage/Photo5.avif",
    title: "Nature’s Peace",
    desc: "Experience serenity and natural wonders.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full h-screen relative overflow-hidden flex flex-col justify-center">

      {/* Crossfade Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`fade-image ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        ></div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT — Smooth Upgraded Version */}
        <div>
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tour-title">
            Discover Jharkhand
          </h1>

          <h2 className="text-yellow-400 text-3xl md:text-5xl font-bold mt-2 tracking-tight">
            Smart, Safe, Sustainable
          </h2>

          <p className="text-gray-200 mt-5 text-lg md:text-xl max-w-lg leading-relaxed">
            Experience the untouched beauty of nature, rich tribal culture,  
            and spiritual heritage — now enhanced with AI-powered planning.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition shadow-lg">
              Plan My Trip →
            </button>

            <button className="px-6 py-3 bg-white/20 border border-white/30 text-white font-medium rounded-lg hover:bg-white/30 transition backdrop-blur-sm">
              Explore Destinations
            </button>
          </div>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="text-right">
          <h2
            key={`title-${current}`}
            className="text-white text-3xl md:text-4xl font-bold tour-title text-slide"
          >
            {slides[current].title}
          </h2>

          <p
            key={`desc-${current}`}
            className="text-gray-300 mt-3 text-base md:text-lg tour-sub text-slide"
          >
            {slides[current].desc}
          </p>
        </div>

      </div>

      {/* SUBTLE BOTTOM DETAILS */}
      <div className="relative z-10 mt-10 flex justify-center gap-16 text-white opacity-90">

        <div className="text-center">
          <h3 className="text-3xl font-bold">50+</h3>
          <p className="text-sm opacity-80">Destinations</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold">1000+</h3>
          <p className="text-sm opacity-80">Local Artisans</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold">24/7</h3>
          <p className="text-sm opacity-80">AI Support</p>
        </div>

      </div>

    </section>
  );
}
