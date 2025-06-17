'use client';

import { FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <section id="contact" className=" text-white py-12 px-6 w-full h-auto bg-primary/60">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-8">
        
        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-white leading-18 md:leading-20 text-5xl md:text-6xl GeistBold w-full">Let’s Work Together</h2>
          <p className="text-white/60 text-sm uppercase">Contact me for team opportunities, tournaments, or training.</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:yourmail@example.com"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/918306498293"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Bottom Attribution */}
      <div className="mt-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Jayesh Adiwal. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
