import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed w-full z-20 bg-indigo-900/95 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        <h1 className="text-2xl font-extrabold text-white tracking-widest">
          Startup Website
        </h1>

        {/*dekstop navigate*/}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-yellow-400 font-bold"
              className="cursor-pointer text-white hover:text-yellow-300 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/*mobile menu*/}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded hover:bg-white/20 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/*mobile navigate*/}
      {isOpen && (
        <nav className="flex flex-col gap-4 bg-indigo-900/95 p-6 rounded-b-md md:hidden shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-yellow-400 font-bold"
              className="cursor-pointer text-white hover:text-yellow-300 transition duration-300 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
