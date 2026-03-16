import HeroSection from './components/HeroSection'
import StoresSection from './components/StoresSection'
import FormSection from './components/FormSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="min-h-screen bg-d-black">
      <HeroSection />
      <StoresSection />
      <FormSection />
      <Footer />
    </main>
  )
}
