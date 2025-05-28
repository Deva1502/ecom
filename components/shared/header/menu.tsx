import Link from "next/link";
import React from "react";
import CartButton from "./cart-button";
import { UserIcon } from "lucide-react";

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex w-full gap-2">
        <Link href="/cart" className="header-button">
          <UserIcon className=" h-8 w-8" />
          <span className=" font-bold">SignIn</span>
        </Link>

        <CartButton />
      </nav>
    </div>
  );
};

export default Menu;
