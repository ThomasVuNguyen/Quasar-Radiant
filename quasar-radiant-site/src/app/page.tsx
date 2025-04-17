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
      <div className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-gray-200" />
        </div>
      </div>
      <HelpBuild />
      <Footer />
    </main>
  );
} 