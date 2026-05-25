import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { publicAsset } from '@/lib/assets';
import { ROUTES } from '@/routes/paths';

const campaigns = [
  {
    image: '/images/services/p8.jpg',
    label: 'Child Welfare',
    title: 'Adopt a Child',
    text: 'Provide food, clothing, learning materials, and regular care.',
  },
  {
    image: '/images/services/p9.jpg',
    label: 'Family Relief',
    title: 'Home For Homeless',
    text: 'Support emergency relief and safe shelter for vulnerable families.',
  },
  {
    image: '/images/services/p1.jpg',
    label: 'Health Support',
    title: 'Water For Children',
    text: 'Coordinate outreach supplies and health support for underserved children.',
  },
];

export function HomeQuickLinks() {
  return (
    <section className='relative z-20 overflow-visible bg-white py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mx-auto max-w-3xl text-center'
        >
          <p className='text-sm font-black uppercase tracking-wide text-slate-500'>
            Welcome To The Official Titus and Abiola Babawale Initiative
          </p>
          <h2 className='mt-2 text-3xl font-black leading-tight text-slate-950 sm:text-4xl'>
            We Help Vulnerable Children To Get Their Life Better.
          </h2>
          <p className='mt-4 text-sm text-slate-500'>
            We work with communities, volunteers, and partners to deliver
            practical care through structured programs.
          </p>
        </motion.div>

        <div className='mt-12 grid gap-7 md:grid-cols-3'>
          {campaigns.map((campaign, index) => (
            <motion.article
              key={campaign.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className='overflow-hidden bg-white shadow-xl ring-1 ring-slate-200'
            >
              <img
                src={publicAsset(campaign.image)}
                alt={campaign.title}
                className='h-56 w-full object-cover'
                loading='lazy'
              />
              <div className='p-6'>
                <p className='text-xs font-bold uppercase tracking-wide text-[#f59d2a]'>
                  {campaign.label}
                </p>
                <h3 className='mt-3 text-xl font-black text-slate-950'>
                  {campaign.title}
                </h3>
                <p className='mt-2 text-sm leading-6 text-slate-500'>
                  {campaign.text}
                </p>
                <div className='mt-6 h-1.5 bg-brand-navy' />
              </div>
            </motion.article>
          ))}
        </div>

        <div className='mt-12 flex justify-center'>
          <Button asChild className='rounded-full bg-slate-950 px-7 hover:bg-slate-800'>
            <Link to={ROUTES.programs}>
              <BookOpen className='mr-2 h-4 w-4' />
              See All Causes
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
