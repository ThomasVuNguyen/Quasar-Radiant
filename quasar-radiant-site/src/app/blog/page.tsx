import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PushingPerformance from "@/components/PushingPerformance";
import blogStoriesData from '@/data/blog_stories.json';
import Image from "next/image";

export default function BlogPage() {
  return (
    <>
      <main className="min-h-screen">
        <Header />
        {/*
        <div className="bg-[#0c4fff] text-white overflow-hidden">
          <div className="relative">
            <div className="py-16 px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                BLOG STORIES
              </h2>
              <p className="opacity-90 text-lg md:text-xl max-w-2xl mx-auto">
                Explore our latest stories, updates, and progress in building the future of AI and technology.
              </p>
            </div>
          </div>
        </div>*/}

        {/* Blog Stories Section */}
        <div className="py-16 bg-white text-black">
          {[...blogStoriesData]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((story, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={story.id} className="max-w-6xl mx-auto px-6 mb-20 last:mb-0">
                  <div className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10`}>
                    <div className="md:w-1/2">
                      {story.image ? (
                        <div className="image-container aspect-video">
                          <Image
                            src={story.image}
                            alt={`Story ${story.id}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover image-hover-effect"
                            priority={index === 0}
                          />
                          {/* Show button if url exists */}
                          {story.url && (
                            <Link href={story.url} target="_blank" className="youtube-button">
                              SEE MORE
                            </Link>
                          )}
                        </div>
                      ) : (
                        <div className="image-container aspect-video bg-gray-100 flex items-center justify-center rounded-xl">
                          <span className="text-xl font-medium text-gray-400">COMING SOON</span>
                        </div>
                      )}
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center">
                      <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-black">{story.title}</h2>
                      <p className="text-gray-600 mb-6">{story.description}</p>
                      <div className="flex gap-10 text-sm">
                        {story.date && (
                          <div>
                            <span className="block text-gray-600">DATE</span>
                            <span className="block">{story.date}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <Footer />
      </main>
    </>
  );
}
