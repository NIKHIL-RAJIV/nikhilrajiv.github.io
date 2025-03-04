import React, { useMemo } from 'react';
import PublicationCard from './PublicationCard';
import publications from '../constants/publication'

const Publications = () => {
  const stars = useMemo(() => {
    return [...Array(75)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
  }, []);

  return (
    <section id="publications" className="min-h-screen py-32 px-8 relative">
      {/* Stars container */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] overflow-hidden">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white opacity-60 rounded-full animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Publications grid */}
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((publication, index) => (
            <PublicationCard key={index} {...publication} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;
