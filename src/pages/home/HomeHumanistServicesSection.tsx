import { motion } from 'motion/react';
import { ArrowUpRight, GraduationCap, HeartPulse, Soup } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { publicAsset } from '@/lib/assets';
import { ROUTES } from '@/routes/paths';

const services = [
  {
    icon: Soup,
    image: '/images/services/p1.jpg',
    title: 'Healthy Foods',
    text: 'We provide food support and emergency relief packs for children, widows, and families facing urgent hardship.',
    link: ROUTES.programs,
  },
  {
    icon: GraduationCap,
    image: '/images/services/p8.jpg',
    title: 'Education',
    text: 'We support school access through learning materials, mentoring, scholarship assistance, and back-to-school outreach.',
    link: ROUTES.programs,
  },
  {
    icon: HeartPulse,
    image: '/images/services/p4.jpg',
    title: 'Medical Help',
    text: 'We organize health outreach, basic care support, preventive education, and referrals for underserved communities.',
    link: ROUTES.programs,
  },
];

export function HomeHumanistServicesSection() {
  return (
    <section className='bg-white px-4 pb-20 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#f7f3ea] px-4 py-16 shadow-inner sm:px-8 lg:px-12'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className='relative mx-auto max-w-3xl text-center'
        >
          <motion.div
            aria-hidden='true'
            animate={{ y: [0, -8, 0], rotate: [-8, 4, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className='absolute -left-6 top-2 hidden h-10 w-10 rounded-bl-3xl rounded-tr-3xl bg-brand-navy sm:block'
          />
          <p className='font-display text-sm font-black text-brand-navy'>
            Charity Services
          </p>
          <h2 className='mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl'>
            We Do It For All People
            <span className='block'>Humanist Services</span>
          </h2>
        </motion.div>

        <div className='mt-12 grid gap-7 md:grid-cols-3'>
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className='group relative overflow-hidden rounded-2xl bg-white p-3 text-center shadow-lg shadow-slate-200/80 ring-1 ring-slate-200'
              >
                <div className='overflow-hidden rounded-xl'>
                  <img
                    src={publicAsset(service.image)}
                    alt={`${service.title} service outreach`}
                    className='h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105'
                    loading='lazy'
                  />
                </div>

                <div className='relative -mt-12 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-8 ring-[#f7f3ea]'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-brand-navy ring-2 ring-brand-navy/15'>
                    <Icon className='h-8 w-8' />
                  </div>
                </div>

                <div className='px-4 pb-6 pt-2'>
                  <h3 className='text-xl font-black text-slate-950'>
                    {service.title}
                  </h3>
                  <p className='mx-auto mt-3 min-h-20 max-w-72 text-sm leading-6 text-slate-600'>
                    {service.text}
                  </p>
                  <Button
                    asChild
                    size='sm'
                    className='mt-5 rounded-full bg-brand-navy px-5 text-xs font-bold text-white hover:bg-blue-900'
                  >
                    <Link to={service.link}>
                      Learn More
                      <ArrowUpRight className='h-4 w-4' />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          aria-hidden='true'
          animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className='ml-auto mt-10 h-14 w-12 rounded-bl-[2rem] rounded-tr-[2rem] bg-brand-navy/90 md:mr-8'
        />
      </div>
    </section>
  );
}
