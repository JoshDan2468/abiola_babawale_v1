import { motion } from "motion/react";
import { CheckCircle2, Eye, ShieldCheck, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  "Integrity and transparency in all decisions",
  "Community ownership and inclusion",
  "Evidence-based program delivery",
  "Dignity, empathy, and respect for all",
];

const leaders = [
  { name: "Titus Babawale", role: "Founder & Executive Director" },
  { name: "Abiola Babawale", role: "Co-Founder & Programs Lead" },
  { name: "Ngozi Eze", role: "Finance & Compliance Manager" },
  { name: "Samuel Dairo", role: "Community Partnerships Coordinator" },
];

export function AboutSection() {
  return (
    <section
      id='about'
      className='py-20 bg-gradient-to-b from-[#f7fafc] to-[#e9f1ee]'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-14'
        >
          <h2 className='text-4xl md:text-5xl font-extrabold text-blue-900'>
            About Us
          </h2>
          <p className='mt-4 text-lg text-slate-600 max-w-3xl mx-auto'>
            We are a non-profit organization focused on practical community
            development, social impact, and long-term resilience for underserved
            families.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-10 items-start'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='rounded-2xl overflow-hidden shadow-2xl h-full min-h-[460px] relative'
          >
            <img
              src='/images/services/p8.jpg'
              alt='Volunteers engaging with children in a community center'
              className='w-full h-full object-cover'
              loading='lazy'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#071352]/85 via-[#071352]/40 to-transparent' />
            <div className='absolute bottom-0 p-8 text-white'>
              <p className='text-sm uppercase tracking-wide text-cyan-100'>
                History
              </p>
              <h3 className='text-2xl font-bold mt-1'>
                From Local Outreach to Multi-Community Impact
              </h3>
              <p className='mt-3 text-slate-200'>
                Since 2022, we have grown from neighborhood support drives into
                a structured NGO delivering coordinated programs across
                education, health, and livelihoods.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='space-y-6'
          >
            <div className='grid sm:grid-cols-2 gap-4'>
              <div className='rounded-xl bg-white p-5 shadow-md border border-slate-100'>
                <Target className='h-7 w-7 text-blue-600 mb-3' />
                <h3 className='font-bold text-slate-900 mb-2'>Mission</h3>
                <p className='text-slate-600 text-sm'>
                  Empower communities through quality education, accessible
                  healthcare, and sustainable economic opportunities.
                </p>
              </div>
              <div className='rounded-xl bg-white p-5 shadow-md border border-slate-100'>
                <Eye className='h-7 w-7 text-[#2c5c39] mb-3' />
                <h3 className='font-bold text-slate-900 mb-2'>Vision</h3>
                <p className='text-slate-600 text-sm'>
                  A fair society where every person can thrive, participate, and
                  build a future with dignity.
                </p>
              </div>
            </div>

            <div className='rounded-xl bg-white p-6 shadow-md border border-slate-100'>
              <div className='flex items-center gap-2 mb-3'>
                <ShieldCheck className='h-6 w-6 text-blue-700' />
                <h3 className='text-xl font-bold text-slate-900'>
                  Core Values
                </h3>
              </div>
              <ul className='grid sm:grid-cols-2 gap-3'>
                {values.map((value) => (
                  <li
                    key={value}
                    className='flex items-start gap-2 text-slate-700 text-sm'
                  >
                    <CheckCircle2 className='h-4 w-4 text-[#2c5c39] mt-0.5 shrink-0' />
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className='rounded-xl bg-white p-6 shadow-md border border-slate-100'>
              <div className='flex items-center gap-2 mb-4'>
                <Users className='h-6 w-6 text-blue-700' />
                <h3 className='text-xl font-bold text-slate-900'>
                  Leadership Team
                </h3>
              </div>
              <div className='grid sm:grid-cols-2 gap-3'>
                {leaders.map((leader) => (
                  <div
                    key={leader.name}
                    className='rounded-lg border border-slate-200 p-3'
                  >
                    <div className='font-semibold text-slate-900'>
                      {leader.name}
                    </div>
                    <div className='text-sm text-slate-600'>{leader.role}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Link
                to='/programs'
                className='inline-flex items-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800'
              >
                Explore Our Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
