import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="font-mono text-2xl font-bold text-white">
            {" "}
            Shafi<span className="text-blue-500">.Seyam</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

         
          <div className="hidden md:flex items-center space-x-8">
  <a
    href="#home"
    className="text-gray-300 hover:text-blue-400 hover:drop-shadow-[0_0_4px_#3B82F6] transition duration-200"
  >
    Home
  </a>
  <a
    href="#about"
    className="text-gray-300 hover:text-blue-400 hover:drop-shadow-[0_0_4px_#3B82F6] transition duration-200"
  >
    About
  </a>
  <a
    href="#projects"
    className="text-gray-300 hover:text-blue-400 hover:drop-shadow-[0_0_4px_#3B82F6] transition duration-200"
  >
    Projects
  </a>
  <a
    href="#contact"
    className="text-gray-300 hover:text-blue-400 hover:drop-shadow-[0_0_4px_#3B82F6] transition duration-200"
  >
    Contact
  </a>
</div>

        </div>
      </div>
    </nav>
  );
};
