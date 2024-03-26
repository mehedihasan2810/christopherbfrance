import { AvatarFallback, AvatarImage, Avatar } from "./ui/avatar";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
};

export function PostHeader({ title, coverImage }: Props) {
  return (
    <>
      <h1 className="mb-4 font-semibold text-[3.2rem] mt-8 text-foreground">
        {title}
      </h1>

      <div className="flex items-center gap-4 mt-8">
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
    </>
  );
}
