import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllPortfolios,
  getPortfolioBySlug,
  wrapImagesWithFigure,
} from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/components/post-body";
import { PostHeader } from "@/components/post-header";
import { Portfolio } from "@/interfaces/portfolio";
import Link from "next/link";

export default async function Post({ params }: Params) {
  console.log(params.slug);
  const posts = getAllPortfolios();
  const post = posts.find(
    (portfolio: Portfolio) => portfolio.slug === params.slug
  );

  if (!post) {
    return notFound();
  }

  const contentHtml = await markdownToHtml(post.content || "");
  const content = wrapImagesWithFigure(contentHtml);

  return (
    <main>
      <article className="max-w-2xl mx-auto px-4">
        <PostHeader title={post.title} coverImage={post.cover} />

        <div className="flex justify-between items-center w-full mt-14 lg:mt-0 lg:m-0 ">
          <div>
            {post.prevSlug && (
              <Link
                href={`/${post.prevSlug}`}
                className="lg:fixed lg:left-4 lg:top-1/2 lg:-translate-y-1/2 bg-secondary py-3 px-4 rounded-md max-w-fit min-w-36 group hover:bg-secondary/80 block"
              >
                <div className="text-left">
                  <p className="uppercase transition-transform translate-x-0 group-hover:translate-x-1 text-sm">
                    PREV
                  </p>
                  <p className="text-foreground text-lg capitalize font-bold transition-transform translate-x-0 group-hover:translate-x-1">
                    {post.prevSlug?.replaceAll("-", " ")}
                  </p>
                </div>
              </Link>
            )}
          </div>
          <div>
            {post.nextSlug && (
              <Link
                href={`/${post.nextSlug}`}
                className="lg:fixed lg:right-4 lg:top-1/2 lg:-translate-y-1/2 bg-secondary py-3 px-4 rounded-md min-w-36 group hover:bg-secondary/80 block max-w-fit"
              >
                <div className="text-right">
                  <p className="uppercase transition-transform translate-x-0 group-hover:-translate-x-1 text-sm">
                    NEXT
                  </p>
                  <p className="text-foreground text-lg capitalize font-bold transition-transform translate-x-0 group-hover:-translate-x-1">
                    {post.nextSlug?.replaceAll("-", " ")}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>

        <PostBody content={content} />
      </article>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPortfolioBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;
  const description = `${post.excerpt}`;

  return {
    title,
    description,
  };
}

export async function generateStaticParams() {
  const portfolios = getAllPortfolios();

  return portfolios.map((portfolio: Portfolio) => ({
    slug: portfolio.slug,
  }));
}
