import { PostCard } from "@/components/post-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { getAllPortfolios } from "@/lib/api";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Work",
};

const Page = () => {
  const allPortfolios = getAllPortfolios();
  return (
    <main>
      <div
        className="bg-gradient-dot"
        style={{
          backgroundRepeat: "repeat",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 24px 24px",
        }}
      >
        <div className="my-8 max-w-7xl px-4 mx-auto">
          <Link href="/">
            <h1 className="mb-4 font-semibold text-foreground text-[3.2rem] mt-8">
              Christopher France
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-4 mt-8 max-w-7xl px-4 mx-auto">
          <Avatar className="size-11 ring-2 ring-offset-2 ring-offset-transparent">
            <AvatarImage
              src="/assets/christopher.jpg"
              alt="Christopher Blow France"
            />
            <AvatarFallback>CBF</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="font-semibold">Christopher Blow France</p>
            <div className="space-x-4">
              <Link href="/" className={buttonVariants({ variant: "default" })}>
                Home
              </Link>
              <Link
                href="/resume"
                className={buttonVariants({ variant: "default" })}
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl my-8 mx-auto px-4 2md:flex 2md:flex-wrap 2md:justify-between 2md:[&>a]:w-[35%] 2md:[&>a]:m-4 2md:[&>a:nth-child(1)]:w-[50%] 2md:[&>a:nth-child(4)]:w-[50%] 2md:[&>a:nth-child(5)]:w-[50%]">
          {allPortfolios.map((portfolio, index) => (
            <PostCard
              key={index}
              title={portfolio.title}
              cover={portfolio.cover}
              slug={portfolio.slug}
              excerpt={portfolio.excerpt}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
