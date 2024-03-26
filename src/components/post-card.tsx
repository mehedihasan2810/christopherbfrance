import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  cover: string;
  excerpt: string;
  slug: string;
};

export function PostCard({ title, cover, excerpt, slug }: Props) {
  return (
    <Link as={`/${slug}`} href="/[slug]" className="block">
      <div className="flex flex-col my-8 sm:mt-14 sm:mb-4 group">
        <Image
          src={cover}
          alt={`Cover Image for ${title}`}
          className="object-contain sm:object-cover sm:object-[center_top] sm:h-[300px] shadow-2xl"
          width={1300}
          height={300}
        />
        <div className="p-0">
          <h2 className="relative mt-8 text-[1.5rem] font-sans font-bold transition-transform translate-x-0 group-hover:translate-x-1">
            {title}
          </h2>
          <p className="my-4 font-sans transition-transform translate-x-0 group-hover:translate-x-1">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}
