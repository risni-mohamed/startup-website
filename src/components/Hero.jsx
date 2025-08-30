import heroBg from "../images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-white px-4 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="bg-black/40 w-full h-full absolute top-0 left-0"></div> {/* overlay for readability */}

      <div className="relative z-10 flex flex-col justify-center items-center text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md tracking-tight">
          Build Your Startup Website
        </h2>
        <p className="mb-10 text-lg md:text-xl max-w-xl drop-shadow">
          Modern, fast, and fully responsive solutions to grow your business.
        </p>
        <a
          href="#contact"
          className="flex items-center gap-2 px-8 py-4 bg-yellow-400 text-indigo-900 font-semibold 
                     rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
        >
          Get Started
        </a>
      </div>

      {/* Hero and About divider */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C600,100 600,100 1200,0 L1200,120 L0,120 Z"
            className="fill-indigo-900"
          ></path>
        </svg>
      </div>
    </section>
  );
}
