import { BookList } from "@/components/rokomari/BookList";
import HeroSection from "@/components/rokomari/HeroSection";

export default function RokomariPage() {
  return (
    <div className="container mx-auto" >
        <HeroSection/>
      <BookList/>
    </div>
  );
}
