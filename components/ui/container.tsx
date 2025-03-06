import { classMerge } from "@/util/class-merge";
import * as React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={classMerge("mx-auto container", className)}>{children}</div>
  );
};

export default Container;
