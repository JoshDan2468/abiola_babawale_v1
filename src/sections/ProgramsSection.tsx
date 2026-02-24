import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const programs = [
  {
    title: 'Education and Literacy Program',
    status: 'Ongoing',
    image: '/images/services/p1.jpg',
    description: 'Scholarships, after-school tutoring, and school supplies for children in low-income communities.',
    impact: ['500 students supported', '92% retention rate', '18 schools engaged'],
  },
  {
    title: 'Community Healthcare Outreach',
    status: 'Ongoing',
    image: '/images/services/p4.jpg',
    description: 'Mobile clinics, maternal health checks, and preventive care campaigns for underserved areas.',
    impact: ['2,000+ patients served', '35 outreach drives', '12 partner clinics'],
  },
  {
    title: 'Women Economic Empowerment',
    status: 'Ongoing',
    image: '/images/services/p5.jpg',
    description: 'Vocational training, micro-grants, and entrepreneurship support for women-led households.',
    impact: ['250 women trained', '120 businesses launched', '78% income growth reported'],
  },
  {
    title: 'Youth Skills and Employability Bootcamp',
    status: 'Completed',
    image: '/images/services/p2.jpg',
    description: 'Digital and vocational skills training for young adults transitioning into work.',
    impact: ['300 youths trained', '185 placed in jobs', '40 internship partners'],
  },
  {
    title: 'Clean Water Access Initiative',
    status: 'Completed',
    image: '/images/services/p3.jpg',
    description: 'Borehole rehabilitation and hygiene awareness to reduce water-borne illnesses.',
    impact: ['14 water points restored', '8 communities reached', '34% illness drop'],
  },
  {
    title: 'Emergency Food and Relief Drive',
    status: 'Completed',
    image: '/images/services/p6.jpg',
    description: 'Rapid response food assistance and welfare supplies for vulnerable families.',
    impact: ['1,400 households reached', '4 states covered', '20 partner volunteers'],
  },
];

export function ProgramsSection() {
  return (
    <section id='programs' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-14'
        >
          <h2 className='text-4xl md:text-5xl font-extrabold text-blue-900'>Our Programs</h2>
          <p className='text-xl text-slate-600 max-w-3xl mx-auto mt-4'>
            Structured interventions across ongoing and completed projects, each tracked with measurable impact.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Card className='h-full overflow-hidden border-slate-200 hover:shadow-xl transition-shadow'>
                <img src={program.image} alt={program.title} className='h-52 w-full object-cover' loading='lazy' />
                <div className='p-5'>
                  <Badge className={program.status === 'Ongoing' ? 'bg-blue-600' : 'bg-slate-700'}>{program.status}</Badge>
                  <h3 className='text-xl font-bold text-slate-900 mt-3 mb-2'>{program.title}</h3>
                  <p className='text-slate-600 mb-4 text-sm'>{program.description}</p>
                  <ul className='space-y-2'>
                    {program.impact.map((item) => (
                      <li key={item} className='text-sm text-slate-700 flex items-start gap-2'>
                        <span className='mt-1 h-2 w-2 rounded-full bg-[#2c5c39] shrink-0' />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
