import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs.send(
    //   'YOUR_SERVICE_ID',
    //   'YOUR_TEMPLATE_ID',
    //   formData,
    //   'YOUR_USER_ID'
    // ).then(() => {
    //   setStatus('Message sent successfully!');
    //   setFormData({ name: '', email: '', message: '' });
    // }, () => {
    //   setStatus('Failed to send. Please try again.');
    // });
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form className="max-w-xl w-full bg-white shadow rounded p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2 rounded"/>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 rounded"/>
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="border p-2 rounded"/>
        <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Send</button>
        {status && <p className="text-green-600 mt-2">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
