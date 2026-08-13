
import React from "react";
import {
  Headphones,
  UserPlus,
  Building2,
  CreditCard,
  MapPin,
  HelpCircle,

  MessageCircle,
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import ScrollTop from "./ScrollTop";


// ---- Data ----

const footerLinkColumns = [
  {
    title: "হোম",
    links: ["বই", "ইলেকট্রনিক্স", "অ্যাকসেসরিজ", "গিফট কার্ড", "স্টেশনারি"],
  },
  {
    title: "শপ বাই",
    links: [
      "বই ক্যাটাগরি",
      "ইলেকট্রনিক্স ক্যাটাগরি",
      "বই মেলা ২০২৬",
      "ইসলামিক বই",
      "প্রি-অর্ডার",
      "বেস্ট সেলিং",
      "এক্সট্রা ডিসকাউন্ট",
      "স্টেশনারি",
    ],
  },
  {
    title: "পণ্যসমূহ",
    links: ["লেখকগণ", "প্রকাশকগণ", "তালিকা"],
  },
  {
    title: "সাপোর্ট",
    links: [
      "অর্ডার ট্র্যাক করুন",
      "যোগাযোগ করুন",
      "পণ্য খুঁজুন",
      "সচরাচর জিজ্ঞাসা",
      "হেল্প ডেস্ক",
      "লেখক/প্রকাশক রিকোয়েস্ট",
      "রিটেইলার রিকোয়েস্ট",
    ],
  },
  {
    title: "আমাদের সম্পর্কে জানুন",
    links: ["আমাদের সম্পর্কে", "সাইট ম্যাপ", "ক্যারিয়ার", "ব্লগ"],
  },
  {
    title: "পলিসি",
    links: [
      "শর্তাবলী",
      "গোপনীয়তা পলিসি",
      "হ্যাপি রিটার্ন পলিসি",
      "রিফান্ড পলিসি",
    ],
  },
];

const contactInfo = [
  {
    icon: Headphones,
    label: "Customer Care:",
    lines: [
      "Hotline: 16297 (9 AM to 8 PM, Saturday to Thursday)",
      { text: "care@rakib.com", bold: true },
    ],
  },
  {
    icon: UserPlus,
    label: "Become a seller:",
    lines: [{ text: "seller@rakib.com", bold: true }],
  },
  {
    icon: Building2,
    label: "Corporate Sales:",
    lines: [
      { text: "01700000000 (Whatsapp)", bold: true },
      { text: "sales@rakib.com", bold: true },
    ],
  },
  {
    icon: CreditCard,
    label: "Retailer:",
    lines: [
      { text: "01700000001 (Whatsapp)", bold: true },
      { text: "wholesale@rakib.com", bold: true },
    ],
  },
  {
    icon: MapPin,
    label: "Address:",
    lines: [{ text: "Dhaka, Bangladesh", bold: true }],
  },
  {
    icon: HelpCircle,
    label: "Email Us:",
    lines: [{ text: "rakib@gmail.com", bold: true }],
  },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", bg: "bg-[#1877F2]" },
  { icon: FaTwitter, href: "#", bg: "bg-[#1DA1F2]" },
  { icon: FaTelegramPlane, href: "#", bg: "bg-[#26A5E4]" },
  { icon: FaWhatsapp, href: "#", bg: "bg-[#25D366]" },
  { icon: FaLinkedinIn, href: "#", bg: "bg-[#0A66C2]" },
  {
    icon: FaInstagram,
    href: "#",
    bg: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  },
  { icon: FaYoutube, href: "#", bg: "bg-[#FF0000]" },
];

// ---- Component ----

function Footer() {


  return (
    <footer className="relative w-full border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr_0.9fr]">
          {/* Brand + contact */}
          <div>
            <Link href="/rokomari" className="inline-block">
              <span className="text-2xl font-bold text-teal-600">রকিব</span>
              <span className="text-sm text-teal-600">.dev</span>
            </Link>
            <p className="mt-1 text-xs text-gray-400">ওয়েব সার্ভিসেস লিঃ</p>

            <div className="mt-6 space-y-5">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-3">
                    <Icon size={18} className="mt-0.5 shrink-0 text-gray-500" />
                    <div className="text-sm text-gray-600">
                      <p>{item.label}</p>
                      {item.lines.map((line, lineIdx) =>
                        typeof line === "string" ? (
                          <p key={lineIdx}>{line}</p>
                        ) : (
                          <p
                            key={lineIdx}
                            className="font-semibold text-gray-800">
                            {line.text}
                          </p>
                        ),
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {footerLinkColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-semibold text-gray-900">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-teal-600">
                      <span className="text-gray-400">○</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Stay connected */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Stay Connected
            </h3>
            <div className="mb-6 flex flex-wrap gap-2">
              {socialLinks.map(({ icon: Icon, href, bg }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className={`flex h-8 w-8 items-center justify-center rounded ${bg} text-white`}>
                  <Icon size={16} />
                </a>
              ))}
            </div>

     
          </div>
          <div className="">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-100">
                <span className="text-lg">📱</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">
                Download App
              </span>
            </div>

            <div className="mb-4 flex gap-2">
              <a
                href="#"
                className="flex items-center gap-1.5 rounded-md border border-gray-800 bg-black px-3 py-1.5 text-white">
                <span className="text-lg"></span>
                <span className="text-xs leading-tight">
                  Download on the
                  <br />
                  <span className="font-semibold">App Store</span>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-1.5 rounded-md border border-gray-800 bg-black px-3 py-1.5 text-white">
                <span className="text-lg">▶</span>
                <span className="text-xs leading-tight">
                  GET IT ON
                  <br />
                  <span className="font-semibold">Google Play</span>
                </span>
              </a>
            </div>

            {/* QR placeholder */}
            <div className="flex h-50 w-60 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-xs text-gray-400 ">
              QR Code
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full border-t border-gray-100 bg-gray-50 py-4">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-3 px-6 text-sm text-gray-600">
          <span>© 2024-2026 Rakib.dev</span>
          <span className="flex items-center gap-1 rounded border border-green-300 bg-green-50 px-2 py-0.5 text-xs text-green-700">
            🔒 DMCA PROTECTED
          </span>
        </div>
      </div>

      {/* Scroll to top */}
      <ScrollTop />

      {/* Chat bubble */}
      <button
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg hover:bg-sky-600"
        aria-label="Chat with us">
        <MessageCircle size={24} />
      </button>
    </footer>
  );
}

export default Footer;
