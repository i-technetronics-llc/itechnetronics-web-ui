import FAQSection from "@/components/landing/faq";
import Header from "@/components/landing/header"
import Hero from "@/components/landing/hero";
import StatsSection from "@/components/landing/section2";
import FeaturesSection from "@/components/landing/section3";
import OurServicesSection from "@/components/landing/section4";
import IndustriesSection from "@/components/landing/section5";
import WhyBluechipSection from "@/components/landing/section6";
import OurProductsSection from "@/components/landing/section7";
import ProjectsSection from "@/components/landing/section8";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <StatsSection/>
    <FeaturesSection/>
    <OurServicesSection/>
    <IndustriesSection/>
    <WhyBluechipSection/>
    <OurProductsSection/>
    <FAQSection/>
    <ProjectsSection/>
    </>
  );
}
