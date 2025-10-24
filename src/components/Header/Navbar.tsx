import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Drawer from "./Drawer";
import Icon from "../icon";

type Item = {
  name: string;
  path: string;
  icon: string;
};

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
    { name: "Home", path: "Home", icon: "House" },
    { name: "About", path: "About", icon: "Info" },
    { name: "Projects", path: "Projects", icon: "Folder" },
    { name: "Skills", path: "Skills", icon: "CodeXml" },
    { name: "Contact", path: "Contact", icon: "Mails" },
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
        <Icon name={item.icon} className="text-lg flex sm:hidden" />
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
          ? "bg-gradient-to-br from-primary/90 to-asphalt/90 backdrop-blur-lg border-b border-white/10 shadow-2xl"
          : "bg-gradient-to-br from-primary/75 to-asphalt/75"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2 mx-auto">
        <span className="text-xl py-2 font-semibold">
          Hussein{" "}
          <span className="bg-gradient-to-r from-mountain-meadow to-secondary bg-clip-text text-transparent">
            Nasrallah
          </span>
        </span>
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
