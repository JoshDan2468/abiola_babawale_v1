import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/routes/paths';

export function HomeCtaSection() {
  return (
    <section className='bg-[#f59d2a] py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className='grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center'
        >
          <div>
            <p className='text-sm font-black uppercase tracking-wide text-white/85'>
              Take Action Today
            </p>
            <h2 className='mt-2 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl'>
              Support a child, sponsor a community project, or volunteer your
              professional skills.
            </h2>
          </div>

          <div className='flex flex-wrap gap-3'>
            <Button
              asChild
              variant='outline'
              className='rounded-full border-white px-6 text-white hover:bg-white hover:text-slate-950'
            >
              <Link to={ROUTES.volunteer}>
                Volunteer
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className='mt-10 grid gap-4 border-t border-white/30 pt-8 sm:grid-cols-2'>
          <Link
            to={ROUTES.contact}
            className='flex items-center gap-3 text-sm font-bold text-white'
          >
            <Mail className='h-5 w-5' />
            Send a partnership message
          </Link>
          <Link
            to={ROUTES.contact}
            className='flex items-center gap-3 text-sm font-bold text-white'
          >
            <Phone className='h-5 w-5' />
            Request outreach or support information
          </Link>
        </div>
      </div>
    </section>
  );
}
