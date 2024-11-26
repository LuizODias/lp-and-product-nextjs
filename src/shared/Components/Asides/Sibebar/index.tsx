import Link from "next/link";
import { useRef } from "react";
import { HamburguerIcon, useDefaultContext } from "@/shared";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

export const Sidebar = () => {
  const boxRef = useRef<HTMLInputElement>(null);
  const { isOpen, openMenu, closeMenu } = useDefaultContext();

  return (
    <>
      <div
        className="flex items-center justify-center dt:hidden w-[40px] h-[40px] cursor-pointer"
        onClick={() => openMenu()}
      >
        <HamburguerIcon />
      </div>
      <div
        className={`top-0 left-0  w-screen h-screen z-30 cursor-default ${isOpen ? "fixed " : "hidden "}`}
        onClick={closeMenu}
      />
      <div
        ref={boxRef}
        className={`py-2 rounded flex dt:hidden fixed h-[110vh] top-0 right-0 z-50 w-[240px] bg-white ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="flex flex-col gap-6 w-full text-darkTextColor"
          itemScope
        >
          <div
            className="w-full flex p-2.5 justify-end"
            onClick={() => closeMenu()}
          >
            <XMarkIcon height={25} width={25} />
          </div>
          <Link
            rel="noopener noreferrer"
            className={`w-full justify-end flex p-2.5 border-x-2 border-white hover:border-primary-base hover:bg-[#F7FAFF] hover:text-primary-base`}
            href="/"
            passHref
            onClick={closeMenu}
            itemProp="Home"
          >
            Home
          </Link>
          <Link
            target="_blank"
            className="w-full justify-end flex p-2.5 border-x-2 border-white hover:border-primary-base hover:bg-[#F7FAFF] hover:text-primary-base"
            href=""
            itemProp="Sobre"
            onClick={closeMenu}
          >
            Sobre
          </Link>
          <Link
            className={`w-full justify-end flex p-2.5 border-x-2 border-white hover:border-primary-base hover:bg-[#F7FAFF] hover:text-primary-base`}
            href="/contato"
            onClick={closeMenu}
            itemProp="Contato"
          >
            Contato
          </Link>
        </div>
      </div>
    </>
  );
};
