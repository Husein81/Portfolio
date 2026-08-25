import { motion, useScroll, useSpring } from "framer-motion";
import { Github, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems, site } from "../../data/site";
import { useActiveSection } from "../../hooks/useActiveSection";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetCloseButton,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import ThemeToggle from "../ui/ThemeToggle";
import MobileMenu from "./MobileMenu";

// Stable reference for the observer hook.
const SECTION_IDS = navItems.map((item) => item.id);

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-2.5 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-background"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "border-b border-border bg-background/90 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="shell flex h-16 items-center justify-between gap-6">
          {/* Monogram + full name: the mark stays when the name won't fit. */}
          <a
            href="#home"
            className="group -ml-2 flex min-h-11 items-center gap-2.5 px-2 transition-colors duration-200"
          >
            <span className="font-mono text-sm font-medium text-accent">HN</span>
            <span className="hidden text-sm font-medium tracking-tight transition-colors duration-200 group-hover:text-accent sm:inline">
              {site.name}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center">
              {navItems.map((item, index) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`group relative flex items-baseline gap-1.5 px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors duration-200 hover:text-foreground ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <span
                        className={
                          isActive
                            ? "text-accent"
                            : "text-input transition-colors duration-200 group-hover:text-accent"
                        }
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                      {isActive ? (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-x-3 -bottom-px h-px bg-accent"
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <Button
              asChild
              variant="ghost"
              size="icon"
              aria-label="GitHub profile"
              className="hidden sm:inline-flex"
            >
              <a href={site.github} target="_blank" rel="noreferrer">
                <Github className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
              </a>
            </Button>

            <ThemeToggle />

            <Button asChild size="sm" className="ml-2 hidden lg:inline-flex">
              <a href="#contact">Get in touch</a>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="ml-1 lg:hidden"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full p-0 sm:max-w-sm">
                <SheetTitle className="sr-only">Site menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Jump to a section of the site
                </SheetDescription>
                <SheetHeader className="border-b border-border">
                  <span className="flex items-baseline gap-2.5">
                    <span className="font-mono text-sm font-medium text-accent">
                      HN
                    </span>
                    <span className="text-sm font-medium tracking-tight">
                      {site.name}
                    </span>
                  </span>
                  <SheetCloseButton />
                </SheetHeader>
                <MobileMenu activeId={activeId} />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Scroll progress, drawn on the header's own bottom rule. */}
        <motion.div
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
          aria-hidden="true"
        />
      </header>
    </>
  );
};

export default Nav;
