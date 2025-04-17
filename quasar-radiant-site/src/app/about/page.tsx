import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="py-16 px-6 bg-black text-white" style={{ marginTop: '64px' }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl font-black mb-8 uppercase tracking-tight leading-none">WE MIGHT NOT MAKE IT</h1>
          
          <div className="max-w-4xl">
            <p className="text-xl mb-8">
              A limited series that breaks down the top 5 reasons our company might not
              make it to next year. (And why we think we can.) We're sharing our insights. On
              the industry. On the company. Our playbook if you will. Because we believe the
              future is better when more of us dream. When more of us can create. So here
              are the things we say in private. Pull up a chair. Do with this information what
              you will.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <ol className="space-y-2 text-xl">
                  <li>1. We get beat to the punch.</li>
                  <li>2. We just can't build it.</li>
                  <li>3. We ruin the internet.</li>
                  <li>4. We listen to our members.</li>
                  <li>5. We can't make money.</li>
                </ol>
              </div>
              <div className="flex justify-end">
                <div className="rounded-full bg-blue-600 py-2 px-6 inline-flex items-center">
                  <span className="text-sm font-medium">The BROWSER COMPANY</span>
                  <span className="mx-1">of</span>
                  <span className="text-sm font-medium">NEW YORK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Episode 1 Section */}
      <div className="py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1">
              <span className="text-lg text-gray-600">1 WE GET BEAT TO THE PUNCH</span>
            </div>
            
            <div className="col-span-2">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">WE GET BEAT TO THE PUNCH</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-video relative bg-gray-100">
                  {/* Placeholder for image - in production replace with actual Image component */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image 
                        src="/episodes/episode1.jpg" 
                        alt="Episode 1" 
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute top-0 left-0 bg-blue-600 text-white p-2 rounded-full m-4">
                        <span>New!</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <div>
                    <span className="block text-gray-600">RELEASE DATE</span>
                    <span className="block">03 / 22 / 24</span>
                  </div>
                  <div>
                    <span className="block text-gray-600">RUNTIME</span>
                    <span className="block">8m 51s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Episode 2 Section */}
      <div className="py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1">
              <span className="text-lg text-gray-600">2 WE JUST CAN'T BUILD IT</span>
            </div>
            
            <div className="col-span-2">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">WE JUST CAN'T BUILD IT</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-video relative bg-gray-100">
                  {/* Placeholder for image - in production replace with actual Image component */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image 
                        src="/episodes/episode2.jpg" 
                        alt="Episode 2" 
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <div>
                    <span className="block text-gray-600">RELEASE DATE</span>
                    <span className="block">04 / 04 / 24</span>
                  </div>
                  <div>
                    <span className="block text-gray-600">RUNTIME</span>
                    <span className="block">6m 56s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Coming Soon Sections */}
      <div className="py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1">
              <span className="text-lg text-gray-600">COMING SOON</span>
            </div>
            
            <div className="col-span-2 space-y-12">
              {/* Episode 3 */}
              <div>
                <h3 className="text-3xl font-bold mb-4">3. We ruin the internet.</h3>
                <p className="text-gray-600">Coming soon</p>
              </div>
              
              {/* Episode 4 */}
              <div>
                <h3 className="text-3xl font-bold mb-4">4. We listen to our members.</h3>
                <p className="text-gray-600">Coming soon</p>
              </div>
              
              {/* Episode 5 */}
              <div>
                <h3 className="text-3xl font-bold mb-4">5. We can't make money.</h3>
                <p className="text-gray-600">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 