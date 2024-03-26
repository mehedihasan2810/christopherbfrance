export interface Portfolio {
  date: string;
  title: string;
  excerpt: string;
  cover: string;
  order: string;
  slug: string;
  prevSlug: string | null;
  nextSlug: string | null;
  content: string;
}
