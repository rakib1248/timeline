import React from "react";
import {
  Search,
  Smartphone,
  User,
  ShoppingCart,
  Headphones,
} from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-100 text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-1 text-gray-700">
            <Headphones size={16} />
            <span className="font-medium">Hotline: 16297</span>
            <span className="text-gray-500">(9.00 AM to 11.00 PM)</span>
          </div>

          <nav className="flex items-center gap-4 text-teal-700">
            <a href="#" className="hover:underline">
              অর্ডার ট্র্যাক করুন
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">
              রকমারি উদ্যোক্তা
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">
              ঘরে বসে আয় করুন
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">
              বই ডোনেশন
            </a>
          </nav>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
        {/* Logo */}
        <Link href="/rokomari" className="shrink-0 text-2xl font-bold text-teal-600">
          রকমারি<span className="text-sm align-top">.com</span>
        </Link>

        {/* Search */}
        <div className="relative flex-1 max-w-2xl">
          <input
            type="text"
            placeholder="Search by electronics (Room Heaters, Smart Watch, Auto"
            className="w-full rounded-full border border-gray-300 px-4 py-2.5 pr-12 text-sm outline-none focus:border-teal-500"
          />
          <button
            type="button"
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-teal-50 p-2 text-teal-600 hover:bg-teal-100">
            <Search size={18} />
          </button>
        </div>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-6 text-sm text-gray-700">
          <button className="flex items-center gap-2 hover:text-teal-600">
            <Smartphone size={18} />
            <span className="leading-tight text-left">
              Download
              <br />
              Rokomari App
            </span>
          </button>

          <button className="flex items-center gap-2 hover:text-teal-600">
            <User size={18} />
            <span>Sign In</span>
          </button>

          <button className="hover:text-teal-600">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
