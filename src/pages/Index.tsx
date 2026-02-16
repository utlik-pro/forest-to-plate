import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import BenefitsSection from "@/components/BenefitsSection";
import ConditionsSection from "@/components/ConditionsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <ConceptSection />
      <BenefitsSection />
      <ConditionsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;
