import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface tab {
	inView: boolean;
	title: string;
  id: string;
}

interface Props {
	tabs: tab[];
}

export const StickySectionTab = ({ tabs }: Props) => {

  const [refFirst, inViewTabFirst] = useInView({
    threshold: 0.99,
  });

  const [refLast, inViewTabLast] = useInView({
    threshold: 0.99,
  });

  const scrollAnchor = (elementID: string) => {
    const element = document.getElementById(elementID)
    element?.scrollIntoView({ behavior: 'instant', block: "nearest", inline: "center"})
  }

  useEffect(() => {
		for(var i = 0; i< tabs.length; i++) {
			if (tabs[i].inView) {
				scrollAnchor(`anchor-section-${i+1}`)
			}
		}
  }, [tabs]);

	const tabOnView = (index: number, length: number) => {
		if(index === 0) return refFirst
		else if(index === length+1) return refLast
		return undefined
	}

	const sectionOnView = (index: number) => {
		return tabs.findIndex(tab => tab.inView) === index
	}

  return (
    <>
      <div className="linear-gradient h-0 hidden w-full top-[76px] z-30 sm:flex flex-row justify-between">
        <div
          className={`h-8 z-30 relative -left-[1px] top-2 ${
            !inViewTabFirst ? "linear-section-tab w-14" : "w-0"
          }`}
        />
        <div
          className={`h-8 z-30 relative float-right -right-[1px] top-2 ${
            !inViewTabLast ? "linear-section-tab-right w-14" : "w-0"
          }`}
        />
      </div>
      <div
        id="section-tab"
        className="z-20 bg-white h-min flex flex-col sm:flex-row w-2/12 tb:w-4/12 sm:w-full top-[87px] text-xs dt:text-base overflow-x-scroll section-tab sm:pr-8"
      >
				{
					tabs.map((tab, index) => {
						return (
							<div id={`anchor-${tab.id}`} key={index} className={`border-b-[1px] ${sectionOnView(index) ? "border-primary-base" : "border-gray-dark"}`}>
								<a
									href={`#${tab.id}`}
									ref={tabOnView(index, tabs.length)}
									className={`anchor button-small w-full sm:w-auto px-2 whitespace-nowrap flex items-center text-primary-base dt:hover:text-primary-dark h-10 border-b-2  
									${sectionOnView(index) ? "border-primary-base" : "border-transparent"}`}
								>
									{tab.title.toLocaleUpperCase()}
								</a>
							</div>
						)
					})
				}
      </div>
    </>
  );
};
