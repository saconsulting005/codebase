import BusinessSolutionsSection from "@/components/features/BusinessSolutions/BusinessSolutionsSection";
import CompanyLogos from "@/components/features/companylogos/CompanyLogos";
import HeroSection from "@/components/features/Hero/Hero";
import IndustrySection from "@/components/common/IndustrySection";
import FeaturedInsights from "@/components/features/Insights/FeaturedInsights";
import SectorsSection from "@/components/features/Sectors/SectorsSection";
import ServicesSection from "@/components/features/Services/Services";


export default function Home() {
  return (
    <>

    <section className="bg-gray-100 py-4">
        <HeroSection />
      </section>
      <section className="bg-[#F8F8F8] py-4">
        <ServicesSection />
      </section>
      <section className="bg-white">
        <IndustrySection />
      </section>
      <CompanyLogos/>
      <SectorsSection/>
      <BusinessSolutionsSection/>
      <FeaturedInsights/>
 
    </>
  );
}
