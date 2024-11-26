import Skeleton from "react-loading-skeleton";

export const ListPostsSkeleton = () => {
  return (
    <div className="flex flex-row sm:flex-col w-full justify-between gap-4 h-[270px] sm:h-[596px]">
      {[...Array(3)].map((_, index) => {
        return (
          <section
            className={`sm:h-auto leading-3 border border-gray-mid transparent rounded-lg pt-9 pb-14 px-6 w-full relative`}
            key={index}
          >
            <div>
              <h2
                className={`text-2xl leading-6 font-bold tracking-[0.24px] text-gray-dark`}
              >
                <Skeleton />
              </h2>
            </div>

            <div className="rounded-xl mt-1 w-[100px]">
              <div>
                <Skeleton />
              </div>
            </div>

            <div className="pb-6 mt-[10px] h-full">
              <div className="h-full">
                <Skeleton />
              </div>
            </div>

            <div
              className="flex flex-row w-full justify-center absolute bottom-4 left-0 px-6"
              itemScope
            >
              <div className={"w-[233px]"}>
                <div className="w-full rounded-3xl py-2.5 px-7.5">
                  <Skeleton />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
