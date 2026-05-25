import { motion } from 'motion/react';
import {
  BriefcaseBusiness,
  HeartPulse,
  Scale,
  School,
  ShieldCheck,
  Utensils,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/routes/paths';

const focusAreas = [
  {
    icon: School,
    title: 'Education Access',
    text: 'School materials, fee support, mentoring, and back-to-school outreach for children at risk of dropping out.',
  },
  {
    icon: HeartPulse,
    title: 'Community Health',
    text: 'Preventive health education, basic screenings, referral support, and care campaigns for underserved families.',
  },
  {
    icon: Utensils,
    title: 'Food and Relief',
    text: 'Structured relief packs, emergency response, and household welfare support during periods of hardship.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Livelihood Support',
    text: 'Skills, small enterprise support, and practical economic empowerment for women, youth, and caregivers.',
  },
  {
    icon: ShieldCheck,
    title: 'Child Protection',
    text: 'Safeguarding-first outreach that keeps dignity, consent, and child safety at the center of every program.',
  },
  {
    icon: Scale,
    title: 'Social Inclusion',
    text: 'Advocacy and local action for people often left behind, including widows, persons with disabilities, and displaced families.',
  },
];

export function HomeProgramsSection() {
  return (
    <section className='bg-[#f8faf7] py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className='text-sm font-black uppercase tracking-wide text-[#2c5c39]'>
              Priority Intervention Areas
            </p>
            <h2 className='mt-3 max-w-xl text-3xl font-black leading-tight text-slate-950 sm:text-4xl'>
              Program features expected from a serious Nigerian and global NGO.
            </h2>
            <p className='mt-4 max-w-2xl text-base leading-7 text-slate-600'>
              Our home page now presents a clearer operating model: direct
              service, safeguarding, livelihood support, measurable community
              outcomes, and partner accountability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className='grid gap-3 sm:grid-cols-3'
          >
            {['SDG aligned', 'Community led', 'Evidence based'].map((item) => (
              <div
                key={item}
                className='border border-slate-200 bg-white px-4 py-5 text-center shadow-sm'
              >
                <p className='text-sm font-black uppercase tracking-wide text-slate-950'>
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className='mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {focusAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className='border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1'
              >
                <div className='flex h-12 w-12 items-center justify-center bg-[#e9f4ef] text-[#2c5c39]'>
                  <Icon className='h-6 w-6' />
                </div>
                <h3 className='mt-5 text-lg font-black text-slate-950'>
                  {area.title}
                </h3>
                <p className='mt-3 text-sm leading-6 text-slate-600'>
                  {area.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className='mt-10 flex flex-wrap items-center gap-4'>
          <Button asChild className='rounded-full bg-[#071352] px-7 hover:bg-[#0b1e74]'>
            <Link to={ROUTES.programs}>View Programs</Link>
          </Button>
          <Button
            asChild
            variant='outline'
            className='rounded-full border-slate-300 px-7'
          >
            <Link to={ROUTES.impactReports}>Read Impact Reports</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
