import Link from 'next/link';

export default function BrowserCompany() {
  return (
    <section className="py-28 px-6 bg-[#0c4fff] text-white">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-8">
          Why we're doing this
        </h3>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight max-w-4xl">
          At Luna, we are giving AI to more people.
        </h2>
        
        <div className="space-y-10 text-lg md:text-xl opacity-90">
          <p className="max-w-4xl">
            At Luna, we see AI as your helpful companion in both life and work. Talking with our friends in research, building, and startups showed us something important – today's AI has barriers: privacy concerns, internet requirements, and those pesky usage fees. We're here to change that!
          </p>
          
          <p className="max-w-4xl">
          </p>
          
          <div className="mt-12">
            <Link href="/about">
              <button className="bg-white text-[#0c4fff] px-6 py-3 rounded-lg font-medium hover:bg-indigo-100 transition-colors">
                Explore Our Stories
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 