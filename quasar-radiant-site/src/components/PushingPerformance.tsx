"use client";

export default function PushingPerformance() {
  const copyEmail = () => {
    navigator.clipboard.writeText('thomas@billullonex.com');
    alert('Email copied to clipboard!');
  };

  return (
    <section className="pt-20 pb-24 px-6 bg-white text-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight">
          Now, we're pushing <span className="italic">performance</span> per dollar
        </h2>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Want to contribute with custom inference firmware, hardware, or novel AI model? Let's talk!
        </p>
        
        <div className="mb-16">
          <button 
            onClick={copyEmail}
            className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium transition-colors gap-2"
          >
            <span>thomas@billullonex.com</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/collages/luna-people.webp" 
            alt="High-performance computing setup for AI inference" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
} 