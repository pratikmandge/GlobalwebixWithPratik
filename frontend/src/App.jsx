import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ImpactNumbers from './components/ImpactNumbers';
import WebsiteSamples from './components/WebsiteSamples';
import TourismOptions from './components/TourismOptions';
import PricingAndSignUp from './components/PricingAndSignUp';
import ChooseUs from './components/ChooseUs';

function App() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto">
        <Header />
        <HeroSection />
        <ImpactNumbers />
        <WebsiteSamples />
        <TourismOptions />
        <PricingAndSignUp />
        <ChooseUs />
      </main>
    </div>
  );
}

export default App;
