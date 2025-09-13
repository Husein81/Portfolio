import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Drawer from "./Drawer";
import Icon from "../icon";

interface Item {
  name: string;
  path: string;
  icon: JSX.Element;
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 120);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems: Item[] = [
    { name: "Home", path: "Home", icon: <Icon name="House" /> },
    { name: "About", path: "About", icon: <Icon name="Info" /> },
    { name: "Projects", path: "Projects", icon: <Icon name="Folder" /> },
    { name: "Skills", path: "Skills", icon: <Icon name="CodeXml" /> },
    { name: "Contact", path: "Contact", icon: <Icon name="Mails" /> },
  ];

  const content = menuItems.map((item, index) => (
    <Link
      key={index}
      className="duration-200 hover:scale-105 group block"
      to={item.path}
      smooth={true}
      duration={500}
    >
      <li
        className="flex items-center gap-3 p-4 text-iron cursor-pointer hover:text-white rounded-xl transition-all duration-200"
        onClick={() => setMobileOpen(false)}
      >
        <span className="relative font-medium">
          {item.name}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mountain-meadow to-secondary group-hover:w-full transition-all duration-300"></span>
        </span>
      </li>
    </Link>
  ));

  const handleToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleToggleClose = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/90 backdrop-blur-lg border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        <h1 className="text-xl py-2 font-semibold">
          Hussein{" "}
          <span className="bg-gradient-to-r from-mountain-meadow to-secondary bg-clip-text text-transparent">
            Nasrallah
          </span>
        </h1>
        <div className="sm:hidden">
          <button
            onClick={handleToggle}
            aria-label="menu"
            className="hover:bg-white/10 p-2 rounded-lg transition-colors duration-200"
          >
            <Icon name="Menu" className="text-slate-50" />
          </button>
        </div>
        <ul className="hidden sm:flex">{content}</ul>
      </div>

      {/* Animated Drawer */}
      <AnimatePresence mode="wait">
        {mobileOpen && <Drawer content={content} onClose={handleToggleClose} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
