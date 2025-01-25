import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import emailjs from '@emailjs/browser';
import SectionWrapper from '../hoc/SectionWrapper';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value from the input/textarea
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value, // Dynamically update the corresponding field
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log('Form data:', form); // Debugging log to verify form data

    emailjs
      .send(
        'service_vmek9jn',
        'template_f88kklo',
        {
          from_name: form.name,
          to_name: 'liwa',
          from_email: form.email,
          to_email: 'ayariliwa66@gmail.com',
          message: "from : "+form.email +'/msg :'+form.message,
        },
        'mvnXzPwC7M1vjYjbq'
      )
      .then(() => {
        setLoading(false);
        alert('Message sent successfully!');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        setLoading(false);
        alert('Failed to send the message. Please try again.');
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name' // Matches the state key
              value={form.name}
              onChange={handleChange}
              placeholder='Enter your name'
              className='bg-tertiary p-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email' // Matches the state key
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='bg-tertiary p-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font font-medium'
              required
           />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message' // Matches the state key
              value={form.message}
              onChange={handleChange}
              placeholder='Enter your message'
              className='bg-tertiary p-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font font-medium'
              required
           />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none font-bold shadow-md shadow-primary rounded-xl w-fit text-white'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'Contact');
