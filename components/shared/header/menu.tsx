// import Link from "next/link";
import React from "react";
import CartButton from "./cart-button";
// import { UserIcon } from "lucide-react";
import UserButton from "./user-button";

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex w-full gap-2">
        <UserButton/>

        <CartButton />

      </nav>
    </div>
  );
};

export default Menu;
