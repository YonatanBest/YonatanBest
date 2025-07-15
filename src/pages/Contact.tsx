import React, { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (
        <section className="max-w-xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
            {submitted ? (
                <div className="bg-green-700 text-white p-4 rounded">Thank you for your message!</div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input name="name" type="text" placeholder="Name" required className="px-4 py-2 rounded bg-gray-900 text-white" value={form.name} onChange={handleChange} />
                    <input name="email" type="email" placeholder="Email" required className="px-4 py-2 rounded bg-gray-900 text-white" value={form.email} onChange={handleChange} />
                    <input name="subject" type="text" placeholder="Subject" required className="px-4 py-2 rounded bg-gray-900 text-white" value={form.subject} onChange={handleChange} />
                    <textarea name="message" placeholder="Message" required className="px-4 py-2 rounded bg-gray-900 text-white min-h-[100px]" value={form.message} onChange={handleChange} />
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all">Send</button>
                </form>
            )}
        </section>
    );
};
export default Contact; 