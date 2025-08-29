const services = [
  { title: "Web Development", desc: "Modern websites using React" },
  { title: "UI/UX Design", desc: "Clean and user-friendly designs" },
  { title: "SEO Optimization", desc: "Improve search engine rankings" },
];

export default function Services() {
  return (
    <section id="services" className="p-10 bg-gray-100 text-center">
      <h3 className="text-2xl font-bold mb-4">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} className="p-6 shadow rounded bg-white">
            <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
