import Footer from "@/components/rokomari/Footer";
import Header from "@/components/rokomari/Header";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}

      <Footer />
    </div>
  );
}

export default layout;
