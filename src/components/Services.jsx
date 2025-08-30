import servicesData from "../data/services.json";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-indigo-900 mb-2">Our Services</h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4 rounded"></div>
        <p className="text-lg text-indigo-700 max-w-2xl mx-auto">
          We offer a range of services to help your startup succeed online.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-bold text-indigo-900 mb-2">{service.title}</h3>
            <p className="text-indigo-700">{service.description}</p>
          </div>
        ))}
      </div>

      {/*divider of services and portfolio*/}
      <div className="mt-16 flex justify-center">
        <div className="w-24 h-1 bg-indigo-900 rounded"></div>
      </div>
    </section>
  );
}
