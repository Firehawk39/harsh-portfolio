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
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

// --- Sub-components (Composed for maintainability) ---

const NavItem = ({ 
  item, 
  isActive 
}: { 
  item: typeof navItems[0]; 
  isActive: boolean 
}) => {
  return (
    <li className="relative">
      <Magnetic>
        <Link
          href={item.path}
          className={cn(
            "relative block px-4 py-2 text-[15px] lg:text-[16px] font-bold tracking-tight transition-all duration-300",
            isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
          aria-current={isActive ? "page" : undefined}
        >
          {isActive && (
            <motion.div
              layoutId="nav-active-pill"
              className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 25,
              }}
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </Link>
      </Magnetic>
    </li>
  );
};

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full py-6 lg:px-12 z-50" role="navigation" aria-label="Main Navigation">
      <div className="flex items-center justify-between w-full max-w-3xl">
        {/* Integrated Links */}
        <div className="flex overflow-x-auto minimal-scrollbar mask-fade-right lg:mask-none flex-1">
          <ul className="flex items-center gap-2 min-w-max">
            {navItems.map((item) => (
              <NavItem 
                key={item.path} 
                item={item} 
                isActive={pathname === item.path} 
              />
            ))}
          </ul>
        </div>
        
        {/* Right side actions */}
        <div className="flex items-center gap-4 ml-4">
          <Magnetic>
            <a 
              href="/pdf/cv.pdf"
              download="Harsh_Solanki_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-10 items-center justify-center rounded-full bg-foreground text-background px-6 text-sm font-bold transition-all hover:bg-accent hover:shadow-[0_0_20px_var(--accent)] active:scale-95"
              aria-label="Download Resume"
            >
              Download CV
            </a>
          </Magnetic>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
