import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const conditions = [
  "Одно грибное блюдо в меню — свежие, сушёные, маринованные — любые грибы",
  "30–40 минут времени шефа на кухне",
  "Готовность показать процесс честно и без постановки",
];

const ConditionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-16"
        >
          Условия участия
        </motion.h2>

        <div className="space-y-8">
          {conditions.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="flex items-start gap-6"
            >
              <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2.5 shrink-0" />
              <p className="text-lg md:text-xl text-secondary-foreground font-light leading-relaxed">{c}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
