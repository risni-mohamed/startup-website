import portfolioData from "../data/portfolio.json";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-indigo-50 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-indigo-900 mb-2">Our Portfolio</h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4 rounded"></div>
        <p className="text-lg text-indigo-700 max-w-2xl mx-auto">
          A showcase of our recent projects and startup solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {portfolioData.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={require(`../images/${project.image}`)}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <a
                href={project.link}
                className="text-white font-semibold px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-300 transition"
              >
                View Project
              </a>
            </div>
            <h3 className="mt-4 text-xl font-bold text-indigo-900 text-center">{project.title}</h3>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <div className="w-24 h-1 bg-indigo-900 rounded"></div>
      </div>
    </section>
  );
}
