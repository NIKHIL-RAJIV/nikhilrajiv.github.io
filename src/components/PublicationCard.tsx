import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PublicationCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

const PublicationCard = ({ title, description, image, technologies, link }: PublicationCardProps) => {
  return (
    <div className="glassmorphic overflow-hidden rounded-2xl group h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 flex items-center justify-center">
          <h3 className="text-3xl font-[800] text-white text-center px-6 transition-transform duration-300 group-hover:scale-110">{title}</h3>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-white/80 font-[500] leading-relaxed mb-8">{description}</p>

        {/* This container ensures both the link and technologies stay at the bottom */}
        <div className="mt-auto">
          {link && (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-[500] mb-8"
            >
              View Publication <ExternalLink size={16} />
            </a>
          )}
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 rounded-sm bg-white/5 text-white/90 text-sm font-[500]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
