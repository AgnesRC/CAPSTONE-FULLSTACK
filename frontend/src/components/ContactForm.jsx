import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);

    setForm({ name: "", email: "", message: "" });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2> Contact Me </h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        value={form.name}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={form.email}
        required
      />
      <input
        type="text"
        name="message"
        placeholder="Your Message"
        onChange={handleChange}
        value={form.message}
        required
      />
      <button type="submit"> Submit Message </button>
    </form>
  );
}
