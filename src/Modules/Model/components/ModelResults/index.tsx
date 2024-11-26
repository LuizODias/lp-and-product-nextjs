interface Props {
  table: string[][]
}

const colorTR = [
  ["bg-[#132F5E]", " text-white"],
  ["bg-[#37488E]", " text-white"],
  ["bg-[#72A0EA]", " text-black"],
  ["bg-[#9EBEF0]", " text-black"],
  ["bg-[#EAF1FC]", " text-black"],
]

export const ModelResults = ({ table } : Props) => {
  return (
    <div className="flex flex-col gap-2 text-gray-dark">
      <div
        key={0}
        className="bg-gray-light p-6 rounded-t-3xl gap-2 rounded-b-xl flex flex-row"
      >
        <h5 className="font-semibold w-level sm:hidden">
          {table[0][0]}
        </h5>
        <h5 className="font-semibold w-range sm:hidden">
          {table[0][1]}
        </h5>
        <h5 className="font-semibold w-title sm:hidden">
          {table[0][2]}
        </h5>
        <h5 className="font-semibold w-description sm:hidden">
          {table[0][3]}
        </h5>

        <h5 className="font-semibold w-full hidden sm:block"> Score de {table[0][2]} </h5>
      </div>  
      {
        table.map((row, index) => {
          let islast = index + 1 === table.length;
          if (index != 0) {
            return (
              <div
                key={index}
                className={`${colorTR[index - 1][0] + colorTR[index-1][1]} p-6 flex flex-row text-xl gap-2 sm:flex-col ${islast ? "rounded-b-3xl" : "rounded-b-xl"} rounded-t-xl`}
              >
                <h6 className="font-semibold w-level sm:w-full">
                  <p className="hidden sm:inline font-normal text-sm mr-1">
                    {table[0][0]}:
                  </p>
                  {row[0]}
                </h6>
                <h6 className="font-semibold w-range sm:w-full">
                  <p className="hidden sm:inline font-normal text-sm mr-1">
                    {table[0][1]}:
                  </p>
                  {row[1]}
                </h6>
                <h6 className="font-semibold w-title sm:w-full">
                  <p className="hidden sm:inline font-normal text-sm mr-1">
                    {table[0][2]}:
                  </p>
                  {row[2]}
                </h6>
                <p className="text-base font-semibold w-description sm:w-full">
                  {row[3]}
                </p>
              </div>
            )
          }
        }
      )}
    </div>
  );
};
