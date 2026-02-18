import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import heroImage from "@/assets/hero-mushroom.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Премиум грибное блюдо"
          className="w-full h-full object-cover hero-image"
        />
        <div className="absolute inset-0 bg-background/50 md:bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/10" />
      </div>

      {/* Top: subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 text-muted-foreground text-sm tracking-[0.3em] uppercase text-center pt-14 md:pt-20"
      >
        Гастро-контент проект
      </motion.p>

      {/* Bottom group: title + description + profile + button + scroll */}
      <div className="relative z-10 flex flex-col items-center px-6 pb-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-3 md:mb-4 text-center"
        >
          Грибная
          <br />
          инспекция
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm md:text-xl text-muted-foreground max-w-xl mx-auto mb-4 font-light text-center"
        >
          От леса до тарелки: честное расследование грибных блюд
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground">
            <Instagram className="w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="text-foreground text-sm font-medium">@ip.chaser</p>
            <p className="text-muted-foreground text-xs">
              180 000 подписчиков • Грибные туры и шеф-ужины
            </p>
          </div>
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="inline-block px-10 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase rounded-none hover:opacity-90 transition-opacity mb-6"
        >
          Пригласить инспекцию
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
