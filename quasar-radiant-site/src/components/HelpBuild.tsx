export default function HelpBuild() {
  return (
    <section className="pt-20 pb-24 px-6 bg-white text-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight">
          Help us build the <span className="italic">future</span> of search
        </h2>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Join a team where curiosity and innovation shape how the world finds answers
        </p>
        
        <div className="mb-16">
          <a 
            href="#" 
            className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            See open roles
          </a>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/knowledge-begins.jpg" 
            alt="Where Knowledge Begins - Elegant bookshelf with plants and global artwork" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
} 