import Link from "next/link";

interface Props {
  category: string,
  modelName: string 
}

export const Route = ({ category, modelName }: Props) => {
  return (
    <div className="w-full py-5 text-sm leading-4 font-semibold">
      <Link href={'/'} className=""> <u>Produtos</u> </Link> / {category} / {modelName}
    </div>
  );
}
