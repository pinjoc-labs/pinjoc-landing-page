import { classMerge } from "@/util/class-merge";
import Image from "next/image";
import PinjocLogo from "@/assets/images/logo.png";

const Logo = ({
  width = 30,
  height = 30,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <Image
      src={PinjocLogo}
      alt="logo"
      width={width}
      height={height}
      className={classMerge("inline-block mb-1.5", className)}
    />
  );
};

export default Logo;
