import HeroSection from "./components/HeroSection";
import StoresSection from "./components/StoresSection";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main
      className="site-bg min-h-screen relative z-0"
    >
      <HeroSection />
      <StoresSection />
      <FormSection />
      <Footer />
    </main>
  );
}
