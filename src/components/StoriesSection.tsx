import React from "react";

export default function StoriesSection() {
  const stories = [
    {
      id: 1,
      image: "/assets/blogimage1.jpeg",
      title: "The spiritual journey to Madinah",
      excerpt: "Discover the sacred city of Madinah and its profound spiritual significance for pilgrims.",
      link: "#"
    },
    {
      id: 2,
      image: "/assets/blogimage2.jpeg", 
      title: "Modern comfort meets traditional hospitality",
      excerpt: "Experience the perfect blend of contemporary amenities and authentic Arabian hospitality.",
      link: "#"
    },
    {
      id: 3,
      image: "/assets/blogimage3.jpeg",
      title: "A guide to Madinah's historic landmarks",
      excerpt: "Explore the rich history and cultural heritage of this sacred city.",
      link: "#"
    },
    {
      id: 4,
      image: "/assets/blogimage4.jpeg",
      title: "The Foothills secret to 24 hours in Madinah",
      excerpt: "Make the most of your pilgrimage with our insider guide to the holy city.",
      link: "#"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16 bg-[#fdfaf2]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center sm:text-left">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-primary mb-4 sm:mb-6 leading-tight">
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
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Story Content */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-normal text-brand-primary leading-snug group-hover:text-brand-primary-dark transition-colors duration-200">
                  {story.title}
                </h3>
                
                <p className="font-subtitle text-sm sm:text-base leading-relaxed">
                  {story.excerpt}
                </p>

                <div className="pt-1 sm:pt-2">
                  <button className="text-sm sm:text-base text-brand-primary font-medium underline hover:text-brand-primary-dark transition-colors duration-200">
                    Continue reading
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Read the Blog Button */}
        <div className="text-center">
          <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-medium hover:bg-brand-primary-dark transition-colors duration-200 text-lg">
            Read the blog
          </button>
        </div>
      </div>
    </section>
  );
} 