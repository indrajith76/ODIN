import "../App.css";
import Navbar from "../components/Navbar";
import LandingSection from "./LandingSection";
import IntroSection from "./IntroSection";
import FeaturesSection from "./FeaturesSection";
import FAQSection from "./FAQSection";
import FAQLastSection from "./FAQLastSection";

const Home = () => {
  return (
    <main>
      <Navbar />
      <LandingSection />
      <IntroSection />
      <FeaturesSection />
      <FAQSection />
      <FAQLastSection />
    </main>
  );
};

export default Home;
