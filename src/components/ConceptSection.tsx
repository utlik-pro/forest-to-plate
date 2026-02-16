import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import forestImg from "@/assets/forest-mushrooms.jpg";
import chefImg from "@/assets/chef-kitchen.jpg";
import platingImg from "@/assets/plating-process.jpg";
import finishedImg from "@/assets/finished-dish.jpg";
import interviewImg from "@/assets/chef-interview.jpg";
import foragingImg from "@/assets/foraging.jpg";

const images = [
  { src: forestImg, alt: "Грибы в лесу", span: "col-span-2 row-span-2" },
  { src: foragingImg, alt: "Сбор грибов", span: "col-span-1 row-span-1" },
  { src: chefImg, alt: "Шеф на кухне", span: "col-span-1 row-span-1" },
  { src: platingImg, alt: "Процесс приготовления", span: "col-span-1 row-span-1" },
  { src: finishedImg, alt: "Готовое блюдо", span: "col-span-1 row-span-1" },
  { src: interviewImg, alt: "Интервью с шефом", span: "col-span-2 row-span-1" },
];

const ConceptSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Новый формат
            <br />
            <span className="text-muted-foreground">для вашего ресторана</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Грибы — повод показать кухню изнутри. Мы приезжаем, заказываем грибное блюдо, 
            уходим в лес, показываем сбор грибов в природе, возвращаемся на кухню, 
            снимаем процесс приготовления и берём живое интервью у шефа.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className={`image-card ${img.span} aspect-square md:aspect-auto`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
