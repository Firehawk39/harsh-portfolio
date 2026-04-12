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
    <nav className="w-full py-6 lg:px-12 z-50">
      <div className="flex items-center justify-between w-full max-w-3xl">
        {/* Integrated Links */}
        <div className="flex overflow-x-auto minimal-scrollbar mask-fade-right lg:mask-none flex-1">
          <ul className="flex items-center gap-2 min-w-max">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path} className="relative">
                  <Magnetic>
                    <Link
                      href={item.path}
                      className={cn(
                        "relative block px-4 py-2 text-[15px] lg:text-[16px] font-bold tracking-tight transition-all duration-300",
                        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="nav-active-pill"
                          className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
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
        
        {/* Integrated Theme Toggle */}
        <div className="flex items-center ml-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
