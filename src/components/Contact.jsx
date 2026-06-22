import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { AiOutlineCheckCircle } from "react-icons/ai"; // Import tick icon
import { HiMail, HiPhone } from "react-icons/hi";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const publicKey = "UkLAP69O0YAYD_uEK";
    const serviceID = "service_frfgnnn";
    const templateID = "template_lpzervh";
    if (!publicKey) {
      setLoading(false);
      alert("Public key is missing. Please check your configuration.");
      return;
    }
    if (!serviceID) {
      setLoading(false);
      alert("Service ID is missing. Please check your configuration.");
      return;
    }

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: form.name,
          to_name: "Apsal FSD",
          from_email: form.email,
          to_email: "apsal.k2004@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          setShowModal(true); // Show modal on success

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] glass p-8 rounded-2xl border border-white/10'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* direct contact details */}
        <div className="mt-6 flex flex-col gap-3">
          <a
            href="mailto:apsal.k2004@gmail.com"
            className="flex items-center gap-3 text-secondary hover:text-white transition-colors w-fit"
          >
            <HiMail className="w-5 h-5 text-accent" />
            <span>apsal.k2004@gmail.com</span>
          </a>
          <a
            href="tel:+917550336250"
            className="flex items-center gap-3 text-secondary hover:text-white transition-colors w-fit"
          >
            <HiPhone className="w-5 h-5 text-neon" />
            <span>+91 75503 36250</span>
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='relative group py-3 px-8 rounded-xl outline-none w-fit text-white font-display font-bold border border-accent/50 glass-red overflow-hidden cursor-grow'
          >
            <span className="relative z-10">
              {loading ? "Sending..." : "Send Message"}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg text-center'>
            <AiOutlineCheckCircle className='text-green-500 text-6xl mb-4 mx-auto' />
            <p style={{color:'black'}}>Thank you. I will get back to you as soon as possible.</p>
            <button
              onClick={() => setShowModal(false)}
              className='mt-4 bg-tertiary py-2 px-4 rounded-lg text-white'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
