import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const galleryItems = [
  { url: '/images/services/p1.jpg', title: 'Education Outreach', description: 'Classroom support and school materials distribution.' },
  { url: '/images/services/p2.jpg', title: 'Youth Leadership', description: 'Mentorship and skills sessions for young people.' },
  { url: '/images/services/p4.jpg', title: 'Healthcare Day', description: 'Free medical checks and preventive awareness events.' },
  { url: '/images/services/p5.jpg', title: 'Community Projects', description: 'Infrastructure and sanitation support projects.' },
  { url: '/images/services/p11.jpeg', title: 'Volunteer Engagement', description: 'Volunteers delivering direct service on the field.' },
  { url: '/images/services/p9.jpg', title: 'Family Support', description: 'Household relief and empowerment interventions.' },
];

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

  return (
    <section id='gallery' className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-extrabold text-blue-900'>Gallery</h2>
          <p className='mt-4 text-lg text-slate-600 max-w-2xl mx-auto'>Photos and videos from our programs, events, and community impact stories.</p>
        </motion.div>

        <div className='relative rounded-2xl overflow-hidden bg-slate-900 text-white shadow-2xl'>
          <div className='absolute z-20 top-4 right-4 rounded-full bg-black/45 px-4 py-1.5 text-xs font-semibold flex items-center gap-2'>
            <PlayCircle className='h-4 w-4' />
            Media Showcase
          </div>

          <motion.img
            key={galleryItems[currentIndex].url}
            src={galleryItems[currentIndex].url}
            alt={galleryItems[currentIndex].title}
            loading='lazy'
            initial={{ opacity: 0.35, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
            className='h-[340px] md:h-[520px] w-full object-cover'
          />

          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
          <div className='absolute left-0 right-0 bottom-0 p-6 md:p-8'>
            <h3 className='text-2xl md:text-3xl font-bold'>{galleryItems[currentIndex].title}</h3>
            <p className='text-slate-200 mt-2 max-w-xl'>{galleryItems[currentIndex].description}</p>
          </div>

          <button
            onClick={prev}
            className='absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors z-30'
            aria-label='Previous gallery item'
          >
            <ChevronLeft className='h-6 w-6' />
          </button>
          <button
            onClick={next}
            className='absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors z-30'
            aria-label='Next gallery item'
          >
            <ChevronRight className='h-6 w-6' />
          </button>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-5'>
          {galleryItems.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex ? 'border-blue-600' : 'border-transparent hover:border-slate-300'
              }`}
              aria-label={`Open gallery item ${item.title}`}
            >
              <img src={item.url} alt={item.title} loading='lazy' className='h-20 w-full object-cover' />
            </button>
          ))}
        </div>

        <div className='mt-8 text-center'>
          <Button asChild className='bg-blue-700 hover:bg-blue-800'>
            <Link to='/gallery/all'>View More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
