"use client";

import { useScroll } from "@/hooks/use-scroll";
import { classMerge } from "@/utils/class-merge";
import React from "react";

export const Navbar = () => {
  const { isScrolled } = useScroll();

  return (
    <header
      className={classMerge(
        "max-w-full border fixed w-full",
        isScrolled ? "border-b-gray-800" : "border-transparent"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between gap-3 text-white h-14">
        <h4 className="text-white text-2xl font-semibold">PINJOC</h4>
        <button className="inline-flex bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors duration-300 cursor-pointer">
          Launch App
        </button>
      </nav>
    </header>
  );
};
