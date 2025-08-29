const projects = [
  { title: "E-commerce App", img: "https://via.placeholder.com/300" },
  { title: "Portfolio Website", img: "https://via.placeholder.com/300" },
  { title: "Landing Page", img: "https://via.placeholder.com/300" },
  { title: "Blog Platform", img: "https://via.placeholder.com/300" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="p-10 bg-white text-center">
      <h3 className="text-2xl font-bold mb-4">Our Work</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="shadow rounded overflow-hidden">
            <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
            <h4 className="p-2 font-semibold">{p.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
