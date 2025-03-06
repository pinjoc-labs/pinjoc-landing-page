"use client";

import { useScroll } from "@/hook/use-scroll";
import { classMerge } from "@/util/class-merge";
import React from "react";
import Container from "./container";
import Link from "next/link";
import { Button } from "./button";

export const Navbar = () => {
  const { isScrolled } = useScroll();

  return (
    <header
      className={classMerge(
        "max-w-full border fixed w-full transition-transform duration-300 z-50",
        isScrolled ? "border-b-[#292929] bg-[#111]" : "border-transparent"
      )}
    >
      <Container className="flex items-center justify-between gap-3 text-white h-14">
        <h4 className="text-white text-2xl font-semibold">PINJOC</h4>
        <Link href={"https://pinjoc.vercel.app/"}>
          <Button className="px-4 py-2 rounded-full cursor-pointer">
            Launch App
          </Button>
        </Link>
      </Container>
    </header>
  );
};
