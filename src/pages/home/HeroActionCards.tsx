import { motion } from 'motion/react';
import { GraduationCap, HandHeart, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/routes/paths';

const actions = [
  {
    icon: HandHeart,
    title: 'Become a Volunteer',
    text: 'Join your hands with us for a better life and beautiful future.',
    cta: 'Register Now',
    link: ROUTES.volunteer,
    theme:
      'bg-linear-to-br from-brand-navy via-blue-900 to-blue-700 text-white',
    buttonTheme: 'bg-white text-brand-navy hover:bg-blue-50',
    iconTheme: 'bg-white/15 text-white ring-white/20',
  },
  {
    icon: Landmark,
    title: 'Partner With Us',
    text: 'Collaborate with our team to expand credible community support.',
    cta: 'Contact Us',
    link: ROUTES.contact,
    theme:
      'bg-white text-brand-navy ring-1 ring-inset ring-blue-900/10 before:absolute before:inset-x-0 before:top-0 before:h-1.5 before:bg-brand-navy',
    buttonTheme: 'bg-brand-navy text-white hover:bg-blue-900',
    iconTheme: 'bg-blue-50 text-brand-navy ring-blue-100',
  },
  {
    icon: GraduationCap,
    title: 'Give Scholarship',
    text: 'Open a door to education for a child who needs support.',
    cta: 'Learn More',
    link: ROUTES.programs,
    theme:
      'bg-linear-to-br from-blue-800 via-brand-navy to-slate-950 text-white',
    buttonTheme: 'bg-white text-brand-navy hover:bg-blue-50',
    iconTheme: 'bg-white/15 text-white ring-white/20',
  },
];

export function HeroActionCards() {
  return (
    <div className='absolute inset-x-0 bottom-0 z-30 translate-y-1/2'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mx-auto grid max-w-5xl overflow-hidden shadow-2xl md:grid-cols-3'
        >
          {actions.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`${item.theme} relative flex min-h-56 flex-col items-center justify-center overflow-hidden border border-blue-900/10 p-8 text-center`}
              >
                <div className='absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10' />
                <div className='absolute -bottom-14 left-8 h-28 w-28 rounded-full bg-blue-500/10' />
                <div
                  className={`${item.iconTheme} relative flex h-14 w-14 items-center justify-center rounded-full ring-1`}
                >
                  <Icon className='h-7 w-7' />
                </div>
                <h2 className='mt-4 text-lg font-black'>{item.title}</h2>
                <p className='mx-auto mt-2 max-w-56 text-sm opacity-75'>{item.text}</p>
                <Button
                  asChild
                  size='sm'
                  className={`mt-5 rounded-full px-5 text-xs font-bold ${item.buttonTheme}`}
                >
                  <Link to={item.link}>{item.cta}</Link>
                </Button>
              </article>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
