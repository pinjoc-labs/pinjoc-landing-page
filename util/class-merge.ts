import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export const classMerge = (...classes: ClassValue[]) => {
  return twMerge(clsx(classes));
};
