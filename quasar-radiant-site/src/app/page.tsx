import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ArcBrowser from '@/components/ArcBrowser';
import BrowserCompany from '@/components/BrowserCompany';
import HelpBuild from '@/components/HelpBuild';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <Hero />
      <BrowserCompany />
      <HelpBuild />
      <Footer />
    </main>
  );
} 