"use client";

export default function PushingPerformance() {
  return (
    <section className="pt-20 pb-24 px-6 bg-white text-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight">
          Now, we're pushing <span className="italic">performance</span> per dollar
        </h2>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Our innovations in hardware optimization and model efficiency are making powerful AI accessible to everyone without breaking the bank.
        </p>
        
        <div className="mb-16">
          <a 
            href="https://github.com/BillulloNex/Quasar-Radiant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#0c4fff] hover:bg-[#0a45e0] text-white px-6 py-3 rounded-md font-medium transition-colors gap-2"
          >
            <span>View on GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/dudes/performance-computing.webp" 
            alt="High-performance computing setup for AI inference" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
} 