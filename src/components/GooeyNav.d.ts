declare module "@/components/GooeyNav" {
  import { FC } from "react";

  type GooeyNavItem = {
    label: string;
    href: string;
  };

  type GooeyNavProps = {
    items: GooeyNavItem[];
    animationTime?: number;
    particleCount?: number;
    particleDistances?: [number, number];
    particleR?: number;
    timeVariance?: number;
    colors?: number[];
    initialActiveIndex?: number;
  };

  const GooeyNav: FC<GooeyNavProps>;
  export default GooeyNav;
}
