import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import Authority from '@/components/Authority';
import Story from '@/components/Story';
import Features from '@/components/Features';
// import Demo from '@/components/Demo'; // Removed based on latest feedback
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Authority />
      <Story />
      <Features />
      {/* <Demo /> */}
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
