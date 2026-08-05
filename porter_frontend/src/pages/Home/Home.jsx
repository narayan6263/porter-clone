import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import VehicleTabs from "../../components/VehicleTabs/VehicleTabs";
import Services from "../../components/Services/Services";
import Stats from "../../components/Stats/Stats";
import News from "../../components/News/News";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <VehicleTabs />
      <Services />
      <Stats />
      <News />
      <FAQ />
      <Footer />
    </div>
  );
}
