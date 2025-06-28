import React from "react";

export default function StoriesSection() {
  const stories = [
    {
      id: 1,
      image: "/assets/barcelona-bar.jpg",
      title: "Craving Barcelona: meet Pedro at INSOLENT",
      excerpt: "Discover the vibrant culinary scene of Barcelona through the eyes of local chef Pedro.",
      link: "#"
    },
    {
      id: 2,
      image: "/assets/french-riviera.jpg", 
      title: "Five scene-stealing day trips in the French Riviera",
      excerpt: "Explore the stunning coastline and charming villages of the French Riviera.",
      link: "#"
    },
    {
      id: 3,
      image: "/assets/pride-lifeguard.jpg",
      title: "Passport to Pride: Our top picks for the season",
      excerpt: "Celebrate Pride season with our curated selection of LGBTQ+ friendly destinations.",
      link: "#"
    },
    {
      id: 4,
      image: "/assets/florence-bridge.jpg",
      title: "The Foothills secret to 24 hours in Florence",
      excerpt: "Make the most of your day in this Renaissance masterpiece with our insider guide.",
      link: "#"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16 bg-[#fdfaf2]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center sm:text-left">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0d4747] mb-4 sm:mb-6 leading-tight">
            Foothills stories
          </h2>
          <p className="font-subtitle text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl sm:max-w-3xl mx-auto sm:mx-0">
            From the latest news to travel inspiration, learn more about the world of Foothills.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {stories.map((story) => (
            <article key={story.id} className="group cursor-pointer">
              {/* Story Image */}
              <div className="relative aspect-[4/3] mb-4 sm:mb-6 overflow-hidden rounded-lg">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 bg-gray-400 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs sm:text-sm">Story Image</p>
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-normal text-[#0d4747] leading-snug group-hover:text-[#1a5f5f] transition-colors duration-200">
                  {story.title}
                </h3>
                
                <p className="font-subtitle text-sm sm:text-base leading-relaxed">
                  {story.excerpt}
                </p>

                <div className="pt-1 sm:pt-2">
                  <button className="text-sm sm:text-base text-[#0d4747] font-medium underline hover:text-[#1a5f5f] transition-colors duration-200">
                    Continue reading
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Read the Blog Button */}
        <div className="text-center">
          <button className="bg-[#0d4747] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1a5f5f] transition-colors duration-200 text-lg">
            Read the blog
          </button>
        </div>
      </div>
    </section>
  );
} 