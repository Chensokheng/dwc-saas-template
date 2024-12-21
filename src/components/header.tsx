"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { NavItem } from "@/components/nav-item";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { MobileNavItem } from "@/components/mobile-nav-item";
import useSession from "@/hooks/users/useSession";

export function Header() {
  const { data: user } = useSession();

  return (
    <motion.header
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container mt-0 flex items-center justify-between gap-10 py-4 md:mt-4"
    >
      <Logo />
      <div className="flex items-center gap-10">
        <nav className="hidden items-center justify-end gap-10 md:flex">
          <NavItem href="/about" label="About" />
          <NavItem href="/docs" label="Docs" />
          <NavItem href="/blog" label="Blog" />
          <NavItem href="/pricing" label="Pricing" />
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          {user?.subscription?.user_id ? (
            <Button asChild>
              <Link href="/dashboard" className="cursor-pointer">
                Dashboard
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href="#pricing" className="cursor-pointer">
                Get Started
              </Link>
            </Button>
          )}
        </div>
      </div>
      <MobileNavbar>
        <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <MobileNavItem href="/about" label="About" />
            <MobileNavItem href="/docs" label="Docs" />
            <MobileNavItem href="/blog" label="Blog" />
            <MobileNavItem href="/pricing" label="Pricing" />
            <Button size="lg" asChild className="mt-2 w-full">
              <Link href="#" className="cursor-pointer">
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </motion.header>
  );
}
