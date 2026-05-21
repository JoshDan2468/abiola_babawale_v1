import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Megaphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const newsItems = [
  {
    title: 'Annual Community Accountability Forum 2026',
    date: 'March 12, 2026',
    category: 'Event',
    image: '/images/services/p11.jpeg',
    description: 'Public event to present annual impact, financials, and next-phase program plans.',
    location: 'Lagos Civic Hall',
    time: '11:00 AM',
  },
  {
    title: '2025 Annual Report and Audited Accounts Published',
    date: 'February 18, 2026',
    category: 'Press Release',
    image: '/images/services/p10.jpeg',
    description: 'Our full annual report and independent financial statement are now available for download.',
    location: 'Online Publication',
  },
  {
    title: 'Women Enterprise Cohort Graduates 120 Participants',
    date: 'January 29, 2026',
    category: 'News',
    image: '/images/services/p9.jpg',
    description: 'Graduates completed business planning, bookkeeping, and micro-grant readiness training.',
    location: 'Enugu Program Center',
  },
];

export function NewsSection() {
  return (
    <section id='news' className='py-20 bg-slate-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-14'
        >
          <h2 className='text-4xl md:text-5xl font-extrabold text-blue-900'>News and Blog</h2>
          <p className='mt-4 text-lg text-slate-600 max-w-2xl mx-auto'>
            Updates, announcements, press releases, and upcoming events from our programs.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className='overflow-hidden h-full border-slate-200 hover:shadow-xl transition-shadow'>
                <img src={item.image} alt={item.title} className='h-52 w-full object-cover' loading='lazy' />
                <div className='p-5'>
                  <Badge className='bg-blue-700 text-white'>{item.category}</Badge>
                  <h3 className='text-xl font-bold text-slate-900 mt-3 mb-2'>{item.title}</h3>
                  <p className='text-sm text-slate-600 mb-4'>{item.description}</p>
                  <div className='space-y-2 text-sm text-slate-500'>
                    <div className='flex items-center gap-2'>
                      <Calendar className='h-4 w-4' />
                      <span>{item.date}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <MapPin className='h-4 w-4' />
                      <span>{item.location}</span>
                    </div>
                    {item.time && (
                      <div className='flex items-center gap-2'>
                        <Clock className='h-4 w-4' />
                        <span>{item.time}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Button className='bg-blue-700 hover:bg-blue-800'>
            View All Updates
            <Megaphone className='ml-2 h-4 w-4' />
          </Button>
        </div>
      </div>
    </section>
  );
}
