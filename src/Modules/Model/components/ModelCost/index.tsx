interface Props {
  table: string[][];
}

const colorTR = ["bg-[#EAF1FC]", "bg-[#D7E4F9]"];

export const ModelCost = ({ table }: Props) => {
  return (
    <div className="flex flex-col gap-[8px] text-gray-dark">
      <div className="bg-gray-light p-6 gap-2 rounded-t-3xl rounded-b-xl flex flex-row">
        {table[0].map((item, index) => {
          return (
            <div key={index}>
              <h5
                className={`${
                  index && "text-right"
                } dt:text-left font-semibold w-full`}
              >
                {item}
              </h5>
              <div className={`w-2 bg-white ${index+1 === table[0].length ? " hidden": ""}`} />
            </div>
          );
        })}
      </div>
      {table.map((row, index) => {
        let islast = index + 1 === table.length;
        if (index != 0) {
          return (
            <div
              key={index}
              className={`${
                colorTR[index % 2]
              } p-6 flex flex-row text-xl gap-2 ${
                islast ? "rounded-b-3xl" : "rounded-b-xl"
              } rounded-t-xl`}
            >
              {[...Array(table[0].length)].map((_, index) => {
                return (
                  <h6
                    key={index}
                    className={`${
                      index && "text-right"
                    } dt:text-left font-semibold w-full sm:w-full`}
                  >
                    {row[index]}
                  </h6>
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
};
