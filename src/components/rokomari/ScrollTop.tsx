"use client";

import { ChevronUp } from "lucide-react";

function ScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50"
      aria-label="Scroll to top">
      <ChevronUp size={20} className="text-gray-600" />
    </button>
  );
}

export default ScrollTop;
