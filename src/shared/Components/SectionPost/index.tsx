import { Button, Span } from "@/shared";
import { postTypes } from "@/shared/types/modelTypes";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export interface SectionPostProps {
  post: postTypes;
  generic?: boolean;
}

export const SectionPost = ({
  post,
  generic = false,
}: SectionPostProps) => {
  const colorClasses = () => {
    return "transparent";
  };

  const colorCategory = () => {
    return "bg-slate-100";
  };

  const borderClasses = useMemo(() => "border-gray-mid", [])

  const [postSubtitle, setPostSubtitle] = useState("")

  useEffect(() => {
    let html = post.excerpt.rendered
    var div = document.createElement("div")
    div.innerHTML = html
    setPostSubtitle(div.textContent || div.innerText || "")
  }, [post.excerpt.rendered])

  return (
    <section
      className={`sm:h-auto leading-3 border ${borderClasses} ${colorClasses()} rounded-lg pt-9 pb-14 px-6 w-full relative gap-2 flex flex-col`}
      key={post.id}
    >
      <div>
        <h2
          className={`text-2xl leading-6 font-bold tracking-[0.24px] text-gray-dark`}
        >
          {post.title.rendered}
        </h2>
      </div>

      <div className={`${colorCategory()} rounded-xl px-2 w-fit`}>
        <Span
          text="Crédito"
          size="small"
          weight="normal"
          color={"gray"}
          letter="normal"
        />
      </div>

      <div className="pb-6">
        <p
          className={`leading-4  md:text-base text-sm  tracking-[0.42px] undefined font-normal text-gray-dark`}
        >
          {postSubtitle}
        </p>
      </div>

      <div
        className="flex flex-row w-full justify-center absolute bottom-4 left-0 dt:px-6"
        itemScope
      >
        {
          <Link
            href={post.link}
            className={"w-2/3"}
            itemProp="Leia mais"
            rel="noopener noreferrer"
            passHref
            target="_blank"
          >
            <Button
              className={`w-full font-bold`}
              customType="secondary"
            >
              <p className="button-large">

              LEIA MAIS
              </p>
            </Button>
          </Link>
        }
      </div>
    </section>
  );
};
