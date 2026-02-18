import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Стоимость участия
          </h2>
          <p className="text-6xl md:text-7xl font-bold text-foreground mb-4">500 у.е.</p>
          <p className="text-muted-foreground text-lg font-light mb-12">
            За полный профессиональный ролик и продвижение
          </p>
          <a
            href="https://t.me/iPChaser"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Написать в Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
