"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

// ---- Types ----

interface Slide {
  id: number;
  imageUrl: string;
  alt: string;
  href?: string;
}

interface CategoryLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

// ---- Data ----

const categoryLinks: CategoryLink[] = [
  { label: "লেখক", href: "#", hasDropdown: true },
  { label: "বিষয়", href: "#", hasDropdown: true },
  { label: "প্রকাশনী", href: "#", hasDropdown: true },
  { label: "বইমেলা ২০২৬", href: "#" },
  { label: "একাডেমিক বই", href: "#" },
  { label: "ই-বুক", href: "#" },
  { label: "অতিরিক্ত ছাড়ের বই", href: "#" },
  { label: "প্যারালাল Text", href: "#", hasDropdown: true },
  { label: "ভর্তি প্রস্তুতি", href: "#", hasDropdown: true },
  { label: "ইসলামি বই", href: "#" },
  { label: "ইংরেজি ভাষার বই", href: "#" },
  { label: "পশ্চিমবঙ্গের বই", href: "#" },
];

const slides: Slide[] = [
  {
    id: 1,
    imageUrl:
      "https://rokbucket.rokomari.io/banner/DESKTOPfef0241f-a454-4226-8542-87632fc1e5b1.webp",
    alt: "রকমারি ইবুক অফার",
  },
  {
    id: 2,
    imageUrl:
      "https://rokbucket.rokomari.io/banner/DESKTOP0ba4dcc8-1fb7-44d0-9f2a-55d847fe1cbe.webp",
    alt: "বইমেলা অফার",
  },
  {
    id: 3,
    imageUrl:
      "https://rokbucket.rokomari.io/banner/DESKTOP579f0150-d7ab-4e70-93f7-532e6035ab51.webp",
    alt: "একাডেমিক বই অফার",
  },
];

// ---- Category nav ----

function CategoryNav() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-4 py-3 text-sm text-gray-700">
        {categoryLinks.map((cat) => (
          <a
            key={cat.label}
            href={cat.href}
            className="flex shrink-0 items-center gap-1 hover:text-teal-600">
            {cat.label}
            {cat.hasDropdown && <span className="text-xs">▾</span>}
          </a>
        ))}
      </div>
    </nav>
  );
}

// ---- Carousel ----

function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % slides.length) + slides.length) % slides.length);
    },
    [slides.length],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-md">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
          <a
            key={slide.id}
            href={slide.href ?? "#"}
            className="h-full w-full shrink-0">
            <img
              src={slide.imageUrl}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />
          </a>
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow hover:bg-white">
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow hover:bg-white">
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${
              idx === current ? "w-6 bg-blue-500" : "w-2 bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ---- Side promo box ----

function SidePromo() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between rounded-md bg-gradient-to-b from-blue-500 to-blue-600 p-4 text-center text-white">
      <div>
        <p className="text-sm font-medium leading-snug">
          অ্যাপে ১ম অর্ডারে ফ্রি শিপিং
        </p>
        <p className="text-sm font-medium leading-snug">৯৯৯৳+ এমাউন্টে</p>
        <p className="mt-2 text-xs text-blue-100">প্রোমোকোডঃ APP1ST</p>
      </div>

      <div className="my-3 rounded-md bg-white p-2">
        {/* Replace with an actual QR code image/component */}
        <div className="flex h-24 w-24 items-center justify-center bg-white text-[10px] text-gray-400">
          QR Code
        </div>
      </div>

      <div className="flex w-full flex-col gap-2">
        <a
          href="#"
          className="flex items-center justify-center gap-2 rounded-md bg-black px-3 py-1.5 text-xs">
          <Download size={14} />
          <span className="text-left leading-tight">
            Download on the
            <br />
            <span className="font-semibold">App Store</span>
          </span>
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-2 rounded-md bg-black px-3 py-1.5 text-xs">
          <Download size={14} />
          <span className="text-left leading-tight">
            GET IT ON
            <br />
            <span className="font-semibold">Google Play</span>
          </span>
        </a>
      </div>

      <p className="mt-2 text-[11px] text-blue-100">
        Scan the QR code to Download App
      </p>
    </div>
  );
}

// ---- Full hero section ----

function HeroSection() {
  return (
    <section className="w-full h-full bg-gray-100 pb-11 rounded-2xl">
      <CategoryNav />

      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="grid h-80 grid-cols-1 gap-4 md:grid-cols-[1fr_260px]">
          <HeroCarousel slides={slides} />
          <SidePromo />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
