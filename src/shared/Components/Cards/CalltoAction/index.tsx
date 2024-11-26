import { modelDefault } from "@/constants/models";
import { Button, useDefaultContext } from "@/shared"
import Link from "next/link"

export const CalltoAction = () => {
  const { setModel } = useDefaultContext();

  return (
    <div  className="rounded-2xl bg-[#20509E] px-6 w-full text-white py-[60px] justify-center flex">
      <div className="w-full gap-6 flex flex-col dt:w-8/12 tb:w-10/12 justify-center">
        <h2 className="sm:leading-8 sm:text-[32px]">
          Otimize a sua operação, comece hoje
        </h2>
        <h4 className="text-[#BED3F5]">
          Contrate scores de crédito precisos, descomplicados e com custo mais acessível
        </h4>
        <div className="flex justify-center">
          <Link href="/contato" className="flex flex-row justify-end rounded-3xl dt:text-base tb:text-[13px] sm:text-xs">
            <Button 
              className="h-12 px-6"
              customType="inverseSecondary"
              size="full"
              >
              <h6>
                QUERO CONTRATAR
              </h6>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
