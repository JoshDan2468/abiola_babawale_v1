import { motion } from 'motion/react';
import {
  Banknote,
  ClipboardCheck,
  FileSearch,
  LockKeyhole,
  ReceiptText,
  Shield,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes/paths';

const standards = [
  {
    icon: ReceiptText,
    title: 'Transparent Program Records',
    text: 'Clear program budgets, activity records, and reporting practices that help partners understand how work is delivered.',
  },
  {
    icon: ClipboardCheck,
    title: 'Monitoring and Evaluation',
    text: 'Outcome tracking, field documentation, beneficiary feedback, and lessons learned after each intervention.',
  },
  {
    icon: Shield,
    title: 'Safeguarding Policy',
    text: 'Child protection, volunteer conduct, consent, and dignity-centered service are treated as program requirements.',
  },
  {
    icon: FileSearch,
    title: 'Audit-Ready Records',
    text: 'Organized receipts, procurement notes, attendance sheets, photos, and post-project reports for accountability.',
  },
  {
    icon: LockKeyhole,
    title: 'Data Privacy',
    text: 'Beneficiary stories and images are handled with care, permission, and responsible protection of personal details.',
  },
  {
    icon: Banknote,
    title: 'Local and Global Partnerships',
    text: 'Partner communication that supports Nigerian field realities while remaining understandable to international collaborators.',
  },
];

export function HomeTrustSection() {
  return (
    <section className='bg-white py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start'>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className='lg:sticky lg:top-28'
          >
            <p className='text-sm font-black uppercase tracking-wide text-[#f59d2a]'>
              Trust, Governance and Accountability
            </p>
            <h2 className='mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl'>
              Built to earn confidence from communities, supporters, and partners.
            </h2>
            <p className='mt-4 text-base leading-7 text-slate-600'>
              A professional NGO home page must show how the organization
              protects people, manages funds, measures outcomes, and remains
              accountable beyond beautiful outreach photos.
            </p>

            <div className='mt-8 border-l-4 border-[#2c5c39] bg-slate-50 p-6'>
              <p className='text-sm font-bold uppercase tracking-wide text-slate-500'>
                Operating Standard
              </p>
              <p className='mt-2 text-lg font-black text-slate-950'>
                Every outreach should be planned, documented, reviewed, and
                reported with dignity.
              </p>
              <Link
                to={ROUTES.contact}
                className='mt-5 inline-flex text-sm font-bold text-[#071352] hover:text-[#2c5c39]'
              >
                Partner with us
              </Link>
            </div>
          </motion.div>

          <div className='grid gap-4 sm:grid-cols-2'>
            {standards.map((standard, index) => {
              const Icon = standard.icon;

              return (
                <motion.article
                  key={standard.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className='border border-slate-200 p-5 shadow-sm'
                >
                  <Icon className='h-7 w-7 text-[#071352]' />
                  <h3 className='mt-4 text-base font-black text-slate-950'>
                    {standard.title}
                  </h3>
                  <p className='mt-2 text-sm leading-6 text-slate-600'>
                    {standard.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
