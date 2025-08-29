import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("All fields are required!");
      return;
    }
    alert("Message submitted!");
  };

  return (
    <section id="contact" className="p-10 bg-gray-100 text-center">
      <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name"
          className="p-2 border rounded" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email"
          className="p-2 border rounded" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message"
          className="p-2 border rounded"></textarea>
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg">Send</button>
      </form>
    </section>
  );
}
