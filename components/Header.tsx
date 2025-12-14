"use client";

import Image from "next/image";
import Logo from "../public/android-chrome-192x192.png";
import Link from "next/link";
import { MenuIcon, PhoneIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navStructure } from "@/constants/index";

const MobileMenu = () => {
  const { t } = useLanguage();

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <MenuIcon className="text-primary cursor-pointer w-6 h-6" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left mb-4">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4">
          <ul className="flex flex-col gap-2">
            {navStructure.map((item, index) => (
              <Link key={index} href={item.link}>
                <motion.li
                  whileHover={{ color: "hsl(var(--primary))" }}
                  className="text-lg py-2 border-b border-border"
                >
                  <SheetTrigger className="w-full text-left">
                    {t.nav[item.key as keyof typeof t.nav]}
                  </SheetTrigger>
                </motion.li>
              </Link>
            ))}
          </ul>
          <div className="mt-4">
            <LanguageSwitcher />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const DesktopNav = () => {
  const { t } = useLanguage();

  return (
    <ul className="hidden gap-8 lg:flex text-lg items-center">
      {navStructure.map((item, index) => (
        <Link key={index} href={item.link}>
          <motion.li
            className="transition-colors font-medium"
            whileHover={{ color: "hsl(var(--primary))", scale: 1.05 }}
          >
            {t.nav[item.key as keyof typeof t.nav]}
          </motion.li>
        </Link>
      ))}
      <li>
        <LanguageSwitcher />
      </li>
    </ul>
  );
};

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    document.addEventListener("scroll", HandleScroll);

    return () => {
      document.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-center ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-transparent"
      } fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <nav className="flex items-center justify-between px-6 lg:px-8 py-4 max-w-[90rem] w-full">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="Dr Violeta Vladimirov"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="hidden md:flex flex-col">
            <span className="font-bold text-lg text-primary leading-tight">Dr Violeta Vladimirov</span>
            <span className="text-xs text-muted-foreground">Stomatološka ordinacija</span>
          </div>
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-4">
          <Link href="tel:+381628561867" className="hidden sm:block">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "hsl(var(--primary))",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-primary/10 text-primary border-2 border-primary font-semibold text-sm lg:text-base py-2 px-4 transition-all"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="hidden lg:inline">{t.nav.callUs}</span>
              <span className="lg:hidden">+381 62 856 1867</span>
            </motion.button>
          </Link>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
