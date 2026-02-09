import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGFmcmljYXxlbnwxfHx8fDE3Njg3NjczOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Education Program',
    description: 'Providing quality education to 500+ children'
  },
  {
    url: 'https://images.unsplash.com/photo-1547496613-4e19af6736dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGFmcmljYW4lMjBjaGlsZHJlbnxlbnwxfHx8fDE3Njg3NjczOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Youth Empowerment',
    description: 'Building skills and confidence'
  },
  {
    url: 'https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYWZyaWNhJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2ODc2NzM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Healthcare Access',
    description: 'Free medical care for communities'
  },
  {
    url: 'https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGFmcmljYXxlbnwxfHx8fDE3Njg3NDMzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Community Development',
    description: 'Building sustainable futures'
  },
  {
    url: 'https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwaGVscGluZyUyMHBlb3BsZXxlbnwxfHx8fDE3Njg3MjA1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Volunteer Programs',
    description: 'Join us in making a difference'
  },
  {
    url: 'https://images.unsplash.com/photo-1759709042164-0dd78a39028b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwaGVscGluZyUyMGhhbmRzfGVufDF8fHx8MTc2ODc2NzM5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Food Distribution',
    description: 'Fighting hunger in our communities'
  },
];

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Impact in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the difference we're making in communities across the region
          </p>
        </motion.div>

        {/* 3D Gallery Carousel */}
        <div className="relative h-[500px] flex items-center justify-center perspective-[2000px]">
          {galleryImages.map((image, index) => {
            const offset = (index - currentIndex + galleryImages.length) % galleryImages.length;
            const isCurrent = offset === 0;
            const isNext = offset === 1;
            const isPrev = offset === galleryImages.length - 1;
            const isVisible = isCurrent || isNext || isPrev || offset === 2 || offset === galleryImages.length - 2;

            let x = 0;
            let z = -400;
            let opacity = 0;
            let scale = 0.6;
            let rotateY = 0;

            if (isCurrent) {
              x = 0;
              z = 0;
              opacity = 1;
              scale = 1;
              rotateY = 0;
            } else if (isNext) {
              x = 300;
              z = -200;
              opacity = 0.6;
              scale = 0.8;
              rotateY = -25;
            } else if (isPrev) {
              x = -300;
              z = -200;
              opacity = 0.6;
              scale = 0.8;
              rotateY = 25;
            } else if (offset === 2) {
              x = 400;
              z = -300;
              opacity = 0.3;
              scale = 0.6;
              rotateY = -35;
            } else if (offset === galleryImages.length - 2) {
              x = -400;
              z = -300;
              opacity = 0.3;
              scale = 0.6;
              rotateY = 35;
            }

            return (
              <motion.div
                key={index}
                className="absolute w-[600px] h-[400px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                style={{
                  display: isVisible ? 'block' : 'none',
                }}
                initial={false}
                animate={{
                  x,
                  z,
                  opacity,
                  scale,
                  rotateY,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.32, 0.72, 0, 1],
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-gray-200">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

