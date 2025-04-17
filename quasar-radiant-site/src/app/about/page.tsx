import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import episodesData from '@/data/episodes.json';

// Define the Episode type
type Episode = {
  id: number;
  title: string;
  description: string;
  image: string;
  isNew: boolean;
  youtubeUrl: string;
  releaseDate: string;
  runtime: string;
  isReleased: boolean;
};

export default function AboutPage() {
  // Cast the imported JSON to the Episode type
  const episodes = episodesData as Episode[];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      
      {/* Hero Section */}
      <div className="py-16 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl font-black mb-8 uppercase tracking-tight leading-none">JUST A COUPLE OF GUYS DEMOCRATIZING AI ON THE EDGE</h1>
          
          <div className="max-w-4xl">
            <p className="text-xl mb-8">
              How diverse experiences, insights and world views led to the creation of the Luna.
            </p>
            
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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
            </div> */}
          </div>
        </div>
      </div>
      
      {/* Episodes */}
      <div className="py-16 text-black">
        {episodes.map((episode, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <div key={episode.id} className="max-w-6xl mx-auto px-6 mb-20 last:mb-0">
              <div className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10`}>
                <div className="md:w-1/2">
                  {episode.isReleased && episode.image ? (
                    <div className="image-container aspect-video">
                      <Image 
                        src={episode.image}
                        alt={`Episode ${episode.id}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover image-hover-effect"
                        priority={index === 0}
                      />
                      {episode.isNew && (
                        <div className="episode-badge">
                          <span>New!</span>
                        </div>
                      )}
                      {episode.youtubeUrl && (
                        <Link href={episode.youtubeUrl} target="_blank" className="youtube-button">
                          WATCH ON YOUTUBE
                        </Link>
                      )}
                    </div>
                  ) : (
                    <div className="image-container aspect-video bg-gray-100 flex items-center justify-center">
                      <span className="text-xl font-medium text-gray-400">COMING SOON</span>
                    </div>
                  )}
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-black">{episode.title}</h2>
                  <p className="text-gray-600 mb-6">
                    {episode.description}
                  </p>
                  {episode.isReleased && (
                    <div className="flex gap-10 text-sm">
                      {episode.releaseDate && (
                        <div>
                          <span className="block text-gray-600">RELEASE DATE</span>
                          <span className="block">{episode.releaseDate}</span>
                        </div>
                      )}
                      {episode.runtime && (
                        <div>
                          <span className="block text-gray-600">RUNTIME</span>
                          <span className="block">{episode.runtime}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <Footer />
    </main>
  );
} 