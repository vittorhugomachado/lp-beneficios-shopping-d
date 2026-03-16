import HeroSection from "./components/HeroSection";
import StoresSection from "./components/StoresSection";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main
      className="min-h-screen bg-[#B9161B] relative"
      style={{
        background:
          "linear-gradient(135deg, #6B0000 0%, #8B0000 20%, #B9161B 45%, #C61D22 65%, #9A1200 85%, #6B0000 100%)",
      }}
    >
      <div
    className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none z-0"
    style={{
      background: 'radial-gradient(ellipse at bottom right, rgba(255,180,0,0.4) 0%, rgba(255,100,0,0.35) 40%, transparent 60%)',
      filter: 'blur(40px)',
    }}
  />
      <HeroSection />
      <StoresSection />
      <FormSection />
      <Footer />
    </main>
  );
}
