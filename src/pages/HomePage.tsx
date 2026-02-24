import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/sections/HeroSection';
import { ImpactStats } from '@/sections/ImpactStats';
import { TestimonialsSection } from '@/sections/TestimonialsSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactStats />

      <section className='bg-slate-50 py-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='grid gap-6 md:grid-cols-3'
          >
            {[
              {
                title: 'About Us',
                text: 'Learn our mission, values, and leadership approach to community service.',
                link: '/about',
              },
              {
                title: 'Our Programs',
                text: 'Explore education, healthcare, women empowerment, and livelihood projects.',
                link: '/programs',
              },
              {
                title: 'Donate',
                text: 'Support our work with secure payment options and transparent reporting.',
                link: '/donate',
              },
            ].map((item) => (
              <div key={item.title} className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                <h3 className='text-xl font-bold text-slate-900'>{item.title}</h3>
                <p className='mt-2 text-slate-600'>{item.text}</p>
                <Button asChild variant='outline' className='mt-4'>
                  <Link to={item.link}>
                    Explore
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />
    </>
  );
}
