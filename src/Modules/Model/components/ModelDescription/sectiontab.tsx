"use client"
import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  inviewprops: {
    inView: boolean;
    inView2: boolean;
    inView3: boolean;
    inView4: boolean;
    inView5: boolean;
    inView6: boolean;
  };
}

export const SectionTab = ({ inviewprops }: Props) => {
  const { inView, inView2, inView3, inView4, inView5, inView6 } = inviewprops;

  const [ref, inViewTab] = useInView({
    threshold: 0.99,
  });

  const [ref2, inViewTab2] = useInView({
    threshold: 0.99,
  });

  const scrollAnchor = (elementID: string) => {
    const element = document.getElementById(elementID);
    element?.scrollIntoView({ behavior: 'instant', block: "nearest", inline: "center"}  );
  }

  useEffect(() => {
    if (inView) {
      scrollAnchor("anchor-section-1")
    } else if (inView2 && !inView) {
      scrollAnchor("anchor-section-2")
    } else if (inView3 && !inView2) {
      scrollAnchor("anchor-section-3")
    } else if (inView4 && !inView3) {
      scrollAnchor("anchor-section-4")
    } else if (inView5 && !inView4) {
      scrollAnchor("anchor-section-5")
    } else if (inView6 && !inView5) {
      scrollAnchor("anchor-section-6")
    }
  }, [inView, inView2, inView3, inView4, inView5, inView6]);

  return (
    <>
      <div className="linear-gradient h-0 w-full top-[76px] z-30 flex flex-row justify-between">
        <div
          className={`h-8 z-30 relative -left-[1px] ${
            !inViewTab ? "linear-section-tab w-14" : "w-0"
          }`}
        />
        <div
          className={`h-8 z-30 relative float-right -right-[1px] top-2 ${
            !inViewTab2 ? "linear-section-tab-right w-14" : "w-0"
          }`}
        />
      </div>
      <div
        id="section-tab"
        className="z-20 bg-white flex flex-row w-full top-[87px] border-b-[1px] border-gray-dark whitespace-nowrap text-xs dt:text-base overflow-x-scroll section-tab sm:pr-8"
      >
        <div id="anchor-section-1">
          <a
            href="#section-1"
            ref={ref}
            className={`anchor inline-block text-primary-base ${
              inView ? "border-primary-base" : "border-transparent"
            } dt:hover:text-primary-dark p-4 dt:h-12 h-12 border-b-2 font-bold`}
          >
            O QUE É
          </a>
        </div>
        <div id="anchor-section-2">
          <a
            href="#section-2"
            className={`anchor inline-block text-primary-base ${
              inView2 && !inView ? "border-primary-base" : "border-transparent"
            } dt:hover:text-primary-dark p-4 dt:h-12 h-12 border-b-2 font-bold`}
          >
            CASOS DE USO
          </a>
        </div>
        <div id="anchor-section-3">
          <a
            href="#section-3"
            className={`anchor inline-block text-primary-base ${
              inView3 && !inView2 ? "border-primary-base" : "border-transparent"
            } dt:hover:text-primary-dark p-4 dt:h-12 h-12 border-b-2 font-bold`}
          >
            BENEFICÍOS
          </a>
        </div>
        <div id="anchor-section-4">
          <a
            href="#section-4"
            className={`anchor inline-block text-primary-base ${
              inView4 && !inView3 ? "border-primary-base" : "border-transparent"
            } dt:hover:text-primary-dark p-4 dt:h-12 h-12 border-b-2 font-bold`}
          >
            COMO FUNCIONA
          </a>
        </div>
        <div id="anchor-section-5">
          <a
            href="#section-5"
            className={`anchor inline-block text-primary-base ${
              inView5 && !inView4 ? "border-primary-base" : "border-transparent"
            } dt:hover:text-primary-dark p-4 dt:h-12 h-12 border-b-2 font-bold`}
          >
            DIFERENCIAIS
          </a>
        </div>
        <div id="anchor-section-6">
          <a
            href="#section-6"
            ref={ref2}
            className={`anchor inline-block text-primary-base ${
              inView6 && !inView5 ? "border-primary-base" : "border-transparent"
            } dt:hover:text-primary-dark p-4 dt:h-12 h-12 border-b-2 font-bold`}
          >
            CUSTO
          </a>
        </div>
      </div>
    </>
  );
};
