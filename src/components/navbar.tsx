"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="border-b">
      <nav
        className={cn(
          "flex justify-between items-center py-3 px-4  mx-auto",
          pathname === "/work"
            ? "max-w-7xl"
            : pathname === "/resume"
            ? "max-w-[830px]"
            : "max-w-2xl"
        )}
      >
        <Link href="/" className="hidden md:block">
          <h2 className="font-bold text-lg">Christopherbfrance</h2>
        </Link>
        <Link href="/" className="md:hidden">
          <h2 className="font-bold text-lg">Chrisbfrance</h2>
        </Link>
        <div className="flex gap-6 md:gap-8 items-center">
          <Link href="/work" className="hover:underline">
            Work
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
