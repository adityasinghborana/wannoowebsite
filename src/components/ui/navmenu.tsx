// ../components/ui/navmenu.js
import React from "react";
import { clsx } from "clsx";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import Link from "next/link";

const Navmenu = () => {
  return (
    <div>
      <div className="w-full justify-center  ">
        <Menubar className="h-[80px] flex w-full justify-between px-20 rounded-t-none shadow-lg ">
          <div>
            <Image src="/logo_orange.png" alt="alt" width={180} height={80} />
          </div>
          <div className="flex">
            <MenubarMenu>
              <ul className="flex space-x-4 p-4">
                <li>
                  <Link href="/" className="hover:hover">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/tours" className="hover:hover">
                    Tours
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:hover">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:hover">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:hover">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:hover">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </MenubarMenu>
          </div>
        </Menubar>
      </div>
    </div>
  );
};

export default Navmenu;
