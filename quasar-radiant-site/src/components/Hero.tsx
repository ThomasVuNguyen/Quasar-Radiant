export default function Hero() {
  return (
    <section 
      className="py-20 px-6 bg-slate-700 text-white relative w-full flex items-center justify-center min-h-[400px]"
      style={{ paddingTop: 0, paddingBottom: 0 }}
    >
<img 
  src="/dudes/ghibli-luna.webp" 
  alt="Luna Ghibli style" 
  className="absolute inset-0 w-full h-full object-cover z-0" 
  style={{ pointerEvents: 'none' }}
/>
      <div className="absolute inset-0 bg-slate-900 opacity-60 z-10"></div>
      <div className="max-w-4xl mx-auto text-center relative z-20">
        <h2 className="text-sm md:text-base uppercase tracking-wider mb-4">WE'RE BUILDING</h2>
        
        <div className="relative mb-8">
          {/*<span className="arc-quote-mark left-0 top-0">"</span>*/}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
            "Fast and Affordable AI inference on the <span className="italic">edge"</span><br />
            {/*better on Arc.*/}
          </h1>
          {/*<span className="arc-quote-mark right-0 bottom-0">"</span>*/}
        </div>
        
        
        {/*<div className="flex items-center justify-center mb-10">
          <span className="text-slate-300 flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </svg>
            called Luna
          </span>
        </div>*/}
        

        <a 
          href="/progress" 
          className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors mt-8 inline-block"
        >
          See latest progress
        </a>
      </div>
    </section>
  );
} 