import { motion } from 'motion/react';
import {
  Building2,
  Handshake,
  HeartHandshake,
  MapPinned,
  Megaphone,
  UsersRound,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/routes/paths';

const partnerTypes = [
  {
    icon: Building2,
    title: 'Corporate CSR',
    text: 'Sponsor education, health, food relief, or livelihood programs with clear reporting and visibility.',
  },
  {
    icon: UsersRound,
    title: 'Community Groups',
    text: 'Work with local leaders, schools, faith communities, and resident associations to reach people responsibly.',
  },
  {
    icon: HeartHandshake,
    title: 'Diaspora Donors',
    text: 'Connect Nigerians abroad and global supporters to credible grassroots projects with transparent updates.',
  },
  {
    icon: Megaphone,
    title: 'Media and Advocacy',
    text: 'Amplify campaigns, beneficiary stories, and public education on issues affecting vulnerable families.',
  },
];

const footprint = [
  'Lagos and South-West outreach base',
  'Community needs assessments before projects',
  'Volunteer mobilization and training',
  'Partner-ready project reporting',
];

export function HomePartnershipSection() {
  return (
    <section className='bg-[#10151f] py-20 text-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center'>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className='text-sm font-black uppercase tracking-wide text-[#f59d2a]'>
              Partnership Pathways
            </p>
            <h2 className='mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl'>
              Serious impact grows when local knowledge meets committed support.
            </h2>
            <p className='mt-4 max-w-2xl text-base leading-7 text-white/75'>
              We make it easier for companies, diaspora supporters, public
              institutions, and community groups to participate in practical,
              accountable development work.
            </p>

            <div className='mt-10 grid gap-4 sm:grid-cols-2'>
              {partnerTypes.map((type, index) => {
                const Icon = type.icon;

                return (
                  <motion.article
                    key={type.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className='border border-white/12 bg-white/5 p-5'
                  >
                    <Icon className='h-7 w-7 text-[#f59d2a]' />
                    <h3 className='mt-4 text-base font-black'>{type.title}</h3>
                    <p className='mt-2 text-sm leading-6 text-white/70'>
                      {type.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className='border border-white/12 bg-white p-7 text-slate-950 shadow-2xl'
          >
            <div className='flex h-12 w-12 items-center justify-center bg-[#e9f4ef] text-[#2c5c39]'>
              <MapPinned className='h-6 w-6' />
            </div>
            <h3 className='mt-5 text-2xl font-black'>Field-Ready Footprint</h3>
            <p className='mt-3 text-sm leading-6 text-slate-600'>
              A credible NGO should communicate where it works, how it decides
              priorities, and what partners can expect after supporting a
              project.
            </p>
            <ul className='mt-6 space-y-3'>
              {footprint.map((item) => (
                <li key={item} className='flex items-start gap-3 text-sm text-slate-700'>
                  <Handshake className='mt-0.5 h-4 w-4 shrink-0 text-[#2c5c39]' />
                  {item}
                </li>
              ))}
            </ul>
            <div className='mt-7 flex flex-wrap gap-3'>
              <Button asChild className='rounded-full bg-[#071352] hover:bg-[#0b1e74]'>
                <Link to={ROUTES.getInvolved}>Get Involved</Link>
              </Button>
              <Button asChild variant='outline' className='rounded-full'>
                <Link to={ROUTES.contact}>Contact Team</Link>
              </Button>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
