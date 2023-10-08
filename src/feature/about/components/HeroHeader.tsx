"use client";

import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { sketch } from "../sketch/sketch";

export const HeroHeader = () => {
  return (
    <div id="next-p5-wrapper">
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
};
