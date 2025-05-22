import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./Search";
import Menu from "./menu";
import { Button } from "@/components/ui/button";
import data from "@/lib/data";

const Header = () => {
  return (
    <header className="bg-black justify-between text-white">
      <div className="px-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href={"/"}
              className="flex items-center header-button text-2xl font-extrabold m-1"
            >
              <Image
                src="/logo.svg"
                alt={`${APP_NAME} logo`}
                width={150}
                height={100}
              />
            </Link>
          </div>
          <div className=" hidden md:block flex-1 max-w-xl">
            <Search />
          </div>
          <Menu />
        </div>
        <div className="md:hidden block py-2">
          <Search />
        </div>
      </div>
      <div className="flex items-center p-3 mb-[1px] bg-gray-800">
        <Button
          variant={"ghost"}
          className="header-button flex items-center gap-1 text-base "
        >
          All
        </Button>
        <div className="flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]">
          {data.headerMenus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              className="header-button text-base"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
