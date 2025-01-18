import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import {
  EmailOutlined,
  FolderOutlined,
  InfoOutlined,
  PsychologyOutlined,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { AnimatePresence } from "framer-motion";
import Drawer from "./Drawer";

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
    { name: "Home", path: "Home", icon: <HomeIcon /> },
    { name: "About", path: "About", icon: <InfoOutlined /> },
    { name: "Projects", path: "Projects", icon: <FolderOutlined /> },
    { name: "Skills", path: "Skills", icon: <PsychologyOutlined /> },
    { name: "Contact", path: "Contact", icon: <EmailOutlined /> },
  ];

  const content = menuItems.map((item, index) => (
    <Link
      key={index}
      className="duration-200 hover:scale-110"
      to={item.path}
      smooth={true}
      duration={500}
    >
      <li
        className="flex items-center gap-2 p-2 text-iron cursor-pointer"
        onClick={() => setMobileOpen(false)}
      >
        <div className="block sm:hidden">{item.icon}</div>
        <span>{item.name}</span>
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
        scrolled ? "bg-primary shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2 sm:mx-[10%]">
        <h1 className="text-xl py-2">
          Hussein <span className="text-mountainMeadow">Nasrallah</span>
        </h1>
        <div className="sm:hidden">
          <button onClick={handleToggle} aria-label="menu">
            <MenuIcon fontSize="large" className="text-slate-50" />
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
