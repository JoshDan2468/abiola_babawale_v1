import { motion } from 'motion/react';
import { ArrowRight, HandHeart, Handshake, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const trustItems = [
  { label: 'Registered NGO', value: 'RC 7942241' },
  { label: 'Independent Audits', value: 'Annual Reports Published' },
  { label: 'Communities Served', value: '35+ Active Locations' },
];

export function HeroSection() {
  return (
    <section id='home' className='relative min-h-screen flex items-center pt-24 overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <img
          src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80'
          alt='Community members smiling during NGO outreach'
          className='w-full h-full object-cover'
          loading='eager'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-[#071352]/90 via-[#0c1f6a]/80 to-[#0f5f41]/75' />
      </div>

      <motion.div
        className='absolute top-28 right-10 w-40 h-40 bg-cyan-300/20 rounded-full blur-3xl'
        animate={{ y: [0, -24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute bottom-16 left-8 w-52 h-52 bg-emerald-400/20 rounded-full blur-3xl'
        animate={{ y: [0, 16, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='max-w-4xl'>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm'
          >
            Building resilient communities through compassion and accountability
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className='mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight'
          >
            Community Development That Creates Measurable, Lasting Social Impact
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className='mt-6 text-lg md:text-2xl text-slate-100 max-w-3xl'
          >
            Titus and Abiola Babawale Initiative partners with local communities to improve education, healthcare,
            livelihoods, and dignity through transparent, people-centered programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className='mt-10 flex flex-wrap gap-4'
          >
            <Button asChild size='lg' className='bg-[#2c5c39] hover:bg-[#234a2e] text-lg px-7 py-6'>
              <Link to='/donate'>
                Donate Now
                <Heart className='ml-2 h-5 w-5' fill='currentColor' />
              </Link>
            </Button>
            <Button asChild size='lg' className='bg-blue-600 hover:bg-blue-700 text-lg px-7 py-6'>
              <Link to='/get-involved'>
                Volunteer
                <HandHeart className='ml-2 h-5 w-5' />
              </Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-7 py-6'
            >
              <Link to='/get-involved'>
                Partner With Us
                <Handshake className='ml-2 h-5 w-5' />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'
          >
            {trustItems.map((item) => (
              <div key={item.label} className='rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm'>
                <div className='text-sm uppercase tracking-wide text-slate-200'>{item.label}</div>
                <div className='text-white font-bold'>{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className='absolute bottom-7 left-1/2 -translate-x-1/2'
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <Link to='/about' className='text-white/85 flex flex-col items-center gap-2 text-sm'>
          Scroll
          <ArrowRight className='h-4 w-4 rotate-90' />
        </Link>
      </motion.div>
    </section>
  );
}
