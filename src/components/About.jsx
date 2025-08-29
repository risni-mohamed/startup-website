export default function About() {
  return (
    <section id="about" className="p-10 bg-white text-center">
      <h3 className="text-2xl font-bold mb-4">About Us</h3>
      <p className="max-w-xl mx-auto mb-6 text-gray-600">
        We help startups build modern, responsive, and scalable websites.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 shadow rounded bg-gray-50">🚀 Innovation</div>
        <div className="p-4 shadow rounded bg-gray-50">💡 Creativity</div>
        <div className="p-4 shadow rounded bg-gray-50">🤝 Collaboration</div>
      </div>
    </section>
  );
}
