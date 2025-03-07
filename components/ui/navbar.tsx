"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./button";
import Logo from "./logo";

export const Navbar = () => {
  return (
    <header className="fixed w-full mt-8 top-0 z-50">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-center border border-white/15 px-5 py-3 rounded-full backdrop-blur-2xl">
          <div className="flex items-center w-full justify-between">
            <h1 className="text-white text-3xl uppercase font-extrabold inline-flex items-center">
              pinj
              <Logo width={33} height={33} className="mb-0" />c
            </h1>
            <Link href={"https://pinjoc.vercel.app/"}>
              <Button className="rounded-full">Launch App</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
