export default function About() {
  const values = [
    { title: "Innovation", description: "We bring creative solutions to modern problems." },
    { title: "Reliability", description: "Our services are fast, secure, and trustworthy." },
    { title: "Growth", description: "Helping your startup scale efficiently and sustainably." },
  ];

  return (
    <section id="about" className="py-20 bg-indigo-50 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-indigo-900 mb-2">About Us</h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4 rounded"></div> 
        <p className="text-lg text-indigo-700 max-w-2xl mx-auto">
          INXCODE Pvt Ltd is dedicated to helping startups create modern, fast, and fully responsive websites.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-bold text-indigo-900 mb-2">{value.title}</h3>
            <p className="text-indigo-700">{value.description}</p>
          </div>
        ))}
      </div>

      {/*divider of About and services*/}
      <div className="mt-16 flex justify-center">
        <div className="w-24 h-1 bg-indigo-900 rounded"></div>
      </div>
    </section>
  );
}
