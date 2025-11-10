
import React from 'react';

// New images with a Puglia / Italian countryside vibe
const imageUrls = [
  'https://images.unsplash.com/photo-1529255716383-7a62a1103022?q=80&w=800&auto=format&fit=crop', // Couple in Italy
  'https://images.unsplash.com/photo-1587974916246-3a78995a0a8f?q=80&w=600&auto=format&fit=crop', // Puglia architecture detail
  'https://images.unsplash.com/photo-1590622325380-51c9118a8a47?q=80&w=800&auto=format&fit=crop', // Bride and groom in an olive grove
  'https://images.unsplash.com/photo-1523438885209-e85419f4340d?q=80&w=800&auto=format&fit=crop', // Italian coast
  'https://images.unsplash.com/photo-1616104832534-11915f2a8933?q=80&w=600&auto=format&fit=crop', // Wedding details, rings
  'https://images.unsplash.com/photo-1541414402639-64835a585094?q=80&w=800&auto=format&fit=crop', // Couple laughing
  'https://images.unsplash.com/photo-1601822827137-6405387cda4f?q=80&w=800&auto=format&fit=crop', // Puglian landscape
];

const galleryItems = [
    { url: imageUrls[0], className: 'md:col-span-2 md:row-span-2' },
    { url: imageUrls[1], className: 'md:row-span-2' },
    { url: imageUrls[2], className: '' },
    { url: imageUrls[3], className: '' },
    { url: imageUrls[4], className: 'md:row-span-2' },
    { url: imageUrls[5], className: '' },
    { url: imageUrls[6], className: 'md:col-span-2' },
]

const PhotoGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-4">
      {galleryItems.map((item, index) => (
        <div key={index} className={`overflow-hidden rounded-lg shadow-lg group border-4 border-transparent hover:border-terracotta transition-all duration-300 ${item.className}`}>
          <img
            src={item.url}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
