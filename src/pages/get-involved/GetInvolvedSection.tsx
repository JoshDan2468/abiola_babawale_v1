import { motion } from 'motion/react';
import { HandHeart, Handshake, Heart, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ways = [
  {
    icon: Heart,
    title: 'Volunteer Opportunities',
    description: 'Join field activities, outreach events, and mentoring programs.',
    cta: 'Volunteer Now',
  },
  {
    icon: Handshake,
    title: 'Partnerships',
    description: 'Partner as an institution, foundation, or responsible corporate organization.',
    cta: 'Partner With Us',
  },
  {
    icon: HandHeart,
    title: 'Community Events',
    description: 'Participate in fundraising drives, health days, and impact showcases.',
    cta: 'View Events',
  },
  {
    icon: Mail,
    title: 'Stay Updated',
    description: 'Get monthly project updates, stories, and upcoming opportunities.',
    cta: 'Join Newsletter',
  },
];

export function GetInvolvedSection() {
  return (
    <section id='get-involved' className='py-20 bg-gradient-to-br from-[#071352] via-blue-900 to-[#0f5f41] relative overflow-hidden'>
      <motion.div
        className='absolute inset-0 opacity-15'
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '42px 42px' }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-14'
        >
          <h2 className='text-4xl md:text-5xl font-extrabold text-white'>Get Involved</h2>
          <p className='text-lg text-slate-200 max-w-2xl mx-auto mt-4'>
            Engage as a volunteer, donor, partner, or advocate and help us scale sustainable community impact.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Card className='h-full bg-white/10 border-white/20 text-white backdrop-blur-md p-6'>
                <div className='w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4'>
                  <way.icon className='h-6 w-6' />
                </div>
                <h3 className='text-lg font-bold mb-2'>{way.title}</h3>
                <p className='text-sm text-slate-200 mb-5'>{way.description}</p>
                <Button variant='outline' className='w-full border-white text-white hover:bg-white hover:text-blue-900'>
                  {way.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mt-12 rounded-2xl border border-white/20 bg-white/10 p-7 md:p-9 text-center backdrop-blur-md'
        >
          <h3 className='text-2xl md:text-3xl font-bold text-white'>Upcoming Events</h3>
          <p className='text-slate-200 mt-2'>
            Community Impact Day: March 12, 2026 | Volunteer Orientation: March 25, 2026 | Donor Roundtable: April 8, 2026
          </p>
          <div className='mt-5 flex flex-wrap justify-center gap-3'>
            <Button asChild className='bg-white text-blue-900 hover:bg-slate-100'>
              <Link to='/news'>See Event Details</Link>
            </Button>
            <Button asChild className='bg-[#2c5c39] hover:bg-[#234a2e]'>
              <Link to='/contact'>Register Interest</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
