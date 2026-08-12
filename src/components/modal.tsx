"use client";
/* eslint-disable react-hooks/set-state-in-effect */
import { X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

export function Modal({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => setShow(true), 10);
      return () => clearTimeout(t);
    }
    setShow(false);
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#1E2A22]/50 p-4 backdrop-blur-sm transition-opacity duration-150 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}>
      <div
        className={`w-full max-w-md rounded-md border border-[#E8E1D3] bg-[#FBF9F4] shadow-[0_20px_50px_rgba(30,42,34,0.25)] transition-all duration-150 ${
          show ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="flex items-center justify-between border-b border-[#E8E1D3] px-4 py-3">
            <h2
              className="text-[15px] font-semibold text-[#1E2A22]"
              style={{ fontFamily: "'Fraunces', serif" }}>
              {title}
            </h2>
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-sm p-1 text-[#9A9384] transition-colors hover:bg-[#F0EBDF] hover:text-[#1E2A22]">
              <X size={16} />
            </button>
          </div>
        )}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
