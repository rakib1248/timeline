import { products } from "@/data/product";
import BookCard from "./CardRokomari";

export function BookList() {
  const titles = "Best Selling Ebooks";
  return (
    <section className="w-full ">
      {titles && (
        <h2 className="m-4 px-4 text-lg font-semibold text-gray-800">
          {titles}
        </h2>
      )}
      <div className="flex gap-4 flex-wrap px-4 pb-2 scrollbar-hide">
        {products.map((book) => (
          <BookCard key={book.id} {...book}/>
        ))}
      </div>
    </section>
  );
}
