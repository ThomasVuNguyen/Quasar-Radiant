import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProgressPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="bg-indigo-700 text-white overflow-hidden">
        <div className="relative">
          {/* Main content begins immediately after header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 py-16 px-6">
            <div className="max-w-2xl mx-auto lg:mx-0 lg:ml-auto px-6 lg:pr-16">
              <h1 className="text-2xl md:text-3xl uppercase font-bold mb-6">
                A NEW FRONTIER MODEL<br />
                OF OPEN SOURCE AI
              </h1>
              
              <p className="text-lg mb-8">
                Hermes 3 contains advanced long-term context retention and multi-turn 
                conversation capability, complex roleplaying and internal monologue abilities, 
                and enhanced agentic function-calling.
              </p>
              
              <div className="mb-12">
                <h2 className="text-xl font-bold mb-4">AVAILABLE NOW</h2>
                <ol className="space-y-2 list-decimal pl-5">
                  <li>
                    <Link href="#" className="text-indigo-200 hover:text-white underline">
                      Hermes 3 Technical Report
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-indigo-200 hover:text-white underline">
                      The Hermes Model Collection
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-indigo-200 hover:text-white underline">
                      Hermes 3 Function-Calling
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-indigo-200 hover:text-white underline">
                      "Freedom at the Frontier: Hermes 3"
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-indigo-200 hover:text-white underline">
                      Compute Partner, Lambda Labs
                    </Link>
                  </li>
                </ol>
              </div>
              
              <Link 
                href="#" 
                className="bg-white text-indigo-700 px-6 py-3 inline-flex items-center rounded-sm font-bold"
              >
                CHAT WITH HERMES
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
              <p className="mt-12 text-sm text-indigo-200 max-w-2xl">
                Our training data aggressively encourages the model to follow the system 
                and instruction prompts exactly and in an adaptive manner. Hermes 3 was 
                created by fine-tuning Llama 3.1 8B, 70B and 405B, and training on a dataset 
                of primarily synthetically generated responses.
              </p>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">NOUS RESEARCH PRESENTS</div>
                  <div className="text-8xl font-bold text-white">HERMES 3</div>
                </div>
              </div>
              <img 
                src="/hermes-visual.jpg" 
                alt="Hermes 3 Visual" 
                className="h-full w-full object-cover mix-blend-overlay opacity-80" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Section - Updated to match @blog.png design */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-black">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
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
            
            {/* Blog Post 2 */}
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
            
            {/* Blog Post 3 */}
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
            
            {/* Blog Post 4 */}
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
            
            {/* Blog Post 5 */}
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
            
            {/* Blog Post 6 */}
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
      
      <Footer />
    </main>
  );
} 