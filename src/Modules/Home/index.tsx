"use client"
import React, { useEffect, useRef, useState } from "react";
import { Banner, FrameLayout, ListModels, useDefaultContext } from "@/shared";
import {
  Discover,
  Documentation,
  FAQ,
  Features,
  CallToAction,
  Models,
} from "./components";
import GoTop from "./components/GoTop";

export const Home = () => {
  const { models } = useDefaultContext();
  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState("hidden");
  const refScrollUp = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  const handleVisibleButton = () => {
    const position = window.scrollY;
    setSrollPosition(position);

    if (scrollPosition > 200) {
      return setshowGoTop(
        "fixed w-8 h-8 bg-[#AEC8F3] rounded-full right-8 bottom-8"
      );
    } else if (scrollPosition < 50) {
      return setshowGoTop("hidden");
    }
  };

  const handleScrollUp = () => {
    refScrollUp?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <FrameLayout>
      <div ref={refScrollUp} />
      <article className="flex flex-col items-center w-full">
        <Banner />
        <Features />
        <Discover />
        <Models />
        <Documentation />
        <FAQ />
        <CallToAction />
        <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
      </article>
    </FrameLayout>
  );
};
