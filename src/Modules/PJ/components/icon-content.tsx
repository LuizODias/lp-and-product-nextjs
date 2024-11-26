interface Props {
  icon: React.ReactNode;
}

export const IconContent = ({ icon }: Props) => {
  return (
    <div className="flex justify-center text-primary-base items-center rounded-full bg-secondary h-12 w-12 border-8 border-[#C0D4F5]">
      {icon}
    </div>
  );
};
