import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    number: "01",
    title: "Видеоролик в ленте @ip.chaser",
    desc: "180 000 активных гастро-подписчиков увидят ваш ресторан",
  },
  {
    number: "02",
    title: "Полная история: от леса до тарелки",
    desc: "Уникальный формат, который держит внимание до конца",
  },
  {
    number: "03",
    title: "Не реклама, а уважение к ремеслу",
    desc: "Честный контент, который вызывает доверие аудитории",
  },
  {
    number: "04",
    title: "Долгий имиджевый актив",
    desc: "Ролик навсегда остаётся в профиле и работает на вас",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-20"
        >
          Ваша выгода
        </motion.h2>

        <div className="space-y-0">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="border-t border-border py-10 md:py-14 flex flex-col md:flex-row md:items-start gap-4 md:gap-16"
            >
              <span className="text-muted-foreground text-sm font-light">{b.number}</span>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground font-light">{b.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
