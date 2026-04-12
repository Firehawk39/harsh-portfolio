"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Magnetic from "@/components/ui/Magnetic";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Guides", path: "/guides" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full py-4 lg:py-6 lg:px-12 z-50">
      <div className="flex items-center justify-between w-full max-w-2xl">
        {/* Scrollable Container for Links */}
        <div className="flex overflow-x-auto minimal-scrollbar mask-fade-right lg:mask-none flex-1">
          <ul className="flex items-center gap-1 min-w-max">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path} className="relative">
                  <Magnetic>
                    <Link
                      href={item.path}
                      className={cn(
                        "relative block px-3 py-2 text-[16px] lg:text-[17px] font-semibold tracking-tight transition-colors hover:text-foreground",
                        isActive ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="nav-active-pill"
                          className="absolute inset-0 bg-accent/20 rounded-full -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  </Magnetic>
                </li>
              );
            })}
          </ul>
        </div>
        
        {/* Theme Toggle - Now integrated but without the isolated rectangle look */}
        <div className="flex items-center ml-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
