import { BookCardProps, RelatedProduct } from "@/data/product";


/**
 * Returns `count` random, non-repeating items from the given array.
 * Uses Fisher–Yates shuffle so it's unbiased and doesn't mutate the input.
 */
export function getRandomItems<T>(items: T[], count: number): T[] {
  if (count >= items.length) return [...items];

  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

/**
 * Convenience wrapper specifically for picking related products,
 * excluding the currently viewed product (if present) from the pool.
 */
export function getRandomRelatedProducts(
  allProducts: RelatedProduct[],
  currentProductId: number,
  count = 3,
): RelatedProduct[] {
  const pool = allProducts.filter((p) => p.id !== currentProductId);
  return getRandomItems(pool, count);
}
