import { Linkedin, Github, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white py-10 px-4 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/*copyright*/}
        <p className="text-sm mb-4 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} Risni Rafeek - Startup Website. All rights reserved.
        </p>

        {/*socials*/}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://linkedin.com/in/mohamadrizni"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 hover:text-yellow-400 transition duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/risni-mohamed"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 hover:text-yellow-400 transition duration-300"
          >
            <Github size={24} />
          </a>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-14 h-14 bg-yellow-400 text-indigo-900 rounded-full flex items-center justify-center shadow-xl hover:shadow-yellow-400/50 hover:bg-yellow-300 transition duration-300"
        aria-label="Back to top"
      >
        <ArrowUp size={22} />
      </button>
    </footer>
  );
}
