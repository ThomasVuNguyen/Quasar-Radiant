import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PushingPerformance from "@/components/PushingPerformance";

export default function ProgressPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="bg-[#0c4fff] text-white overflow-hidden">
        <div className="relative">
          {/* Main content begins immediately after header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 py-16 px-6">
            <div className="max-w-2xl mx-auto lg:mx-0 lg:ml-auto px-6 lg:pr-16">
              {/*<h3 className="text-white font-medium text-sm uppercase tracking-wider mb-8">
                Current Progress
              </h3>*/}
              
              <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight">
                CURRENT PROGRESS
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl opacity-90">
                <p>27 token/s on 8B parameter models</p>
                <p>Consuming under 10W while inference</p>
                <p>Costs under 100$</p>
                <p>Everything you see in the video is run locally (voice transcription, voice to text, LLM)</p>
                <p className="font-bold text-xl mt-6">Exponential progress coming!</p>
              
                <div className="mt-12">
                  <Link 
                    href="https://www.youtube.com/@thomasthemaker" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#0c4fff] px-6 py-3 rounded-lg font-medium hover:bg-indigo-100 transition-colors inline-flex items-center"
                  >
                    Follow along
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center w-full mt-8 lg:mt-0">
              <div className="w-full h-full relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/-UShck97aaw"
                  title="Quasar Radiant Demo"
                  className="w-full h-full rounded-lg shadow-lg"
                  style={{ minHeight: "300px", marginBottom: "2rem" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 
      <!-- Blog Section - Commented out as requested -->
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-black">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Blog Post 1 -->
            <div className="group">
              <Link href="#" className="block">
                <div className="rounded-2xl overflow-hidden mb-5 aspect-[4/3]">
                  <img 
                    src="/blog/mixture-experts.jpg" 
                    alt="Iridescent flowing waves" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-black transition-colors">
                  Efficient and Portable Mixture-of-Experts Communication
                </h3>
                <p className="text-gray-500">Apr 2, 2025</p>
              </Link>
            </div>
            
            <!-- Blog Post 2 -->
            <div className="group">
              <Link href="#" className="block">
                <div className="rounded-2xl overflow-hidden mb-5 aspect-[4/3]">
                  <img 
                    src="/blog/tiktok-america.jpg" 
                    alt="TikTok logo with American flag" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-black transition-colors">
                  Rebuilding TikTok in America
                </h3>
                <p className="text-gray-500">Mar 21, 2025</p>
              </Link>
            </div>
            
            <!-- Blog Post 3 -->
            <div className="group">
              <Link href="#" className="block">
                <div className="rounded-2xl overflow-hidden mb-5 aspect-[4/3]">
                  <img 
                    src="/blog/sonar-models.jpg" 
                    alt="Concentric sound wave visualization" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-black transition-colors">
                  Improved Sonar Models: Industry Leading Performance at Lower Costs
                </h3>
                <p className="text-gray-500">Mar 19, 2025</p>
              </Link>
            </div>
            
            <!-- Blog Post 4 -->
            <div className="group">
              <Link href="#" className="block">
                <div className="rounded-2xl overflow-hidden mb-5 aspect-[4/3]">
                  <img 
                    src="/blog/enterprise-pro.jpg" 
                    alt="Enterprise Pro building" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-black transition-colors">
                  Enterprise Pro: SoftBank & Perplexity Partnership
                </h3>
                <p className="text-gray-500">Mar 15, 2025</p>
              </Link>
            </div>
            
            <!-- Blog Post 5 -->
            <div className="group">
              <Link href="#" className="block">
                <div className="rounded-2xl overflow-hidden mb-5 aspect-[4/3]">
                  <img 
                    src="/blog/crystal-gems.jpg" 
                    alt="Floating crystal gems" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-black transition-colors">
                  The Future of AI Visualization Technologies
                </h3>
                <p className="text-gray-500">Mar 10, 2025</p>
              </Link>
            </div>
            
            <!-- Blog Post 6 -->
            <div className="group">
              <Link href="#" className="block">
                <div className="rounded-2xl overflow-hidden mb-5 aspect-[4/3]">
                  <img 
                    src="/blog/perplexity-research.jpg" 
                    alt="Perplexity logo with glowing orb" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-black transition-colors">
                  Perplexity Deep Research: Exploring New Boundaries
                </h3>
                <p className="text-gray-500">Mar 5, 2025</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      */}
      
      <PushingPerformance />
      
      <Footer />
    </main>
  );
} 