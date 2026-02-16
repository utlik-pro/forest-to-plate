import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Стоимость участия
          </h2>
          <p className="text-6xl md:text-7xl font-bold text-foreground mb-4">500 у.е.</p>
          <p className="text-muted-foreground text-lg font-light">
            За полный профессиональный ролик и продвижение
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-foreground font-semibold mb-2">Заявка отправлена!</p>
            <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Название ресторана"
                required
                className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors font-light"
              />
              <input
                type="text"
                placeholder="Имя шефа / владельца"
                required
                className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors font-light"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Телефон"
                required
                className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors font-light"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors font-light"
              />
            </div>
            <textarea
              placeholder="Сообщение"
              rows={3}
              className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors font-light resize-none"
            />
            <div className="pt-6 text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
              >
                Заказать грибную инспекцию
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
