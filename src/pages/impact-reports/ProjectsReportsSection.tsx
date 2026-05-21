import { motion } from 'motion/react';
import { ArrowDownToLine, BadgeCheck, FileText, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { publicAsset } from '@/lib/assets';

const reports = [
  {
    year: '2025 Annual Report',
    summary: 'Expanded healthcare and education initiatives into 12 additional communities with improved beneficiary tracking.',
    utilization: 'Program Spend: 84% | Admin: 9% | Fundraising: 7%',
  },
  {
    year: '2024 Financial Statement',
    summary: 'External audit confirmed proper fund utilization and compliance with all non-profit reporting requirements.',
    utilization: 'Program Spend: 82% | Admin: 10% | Fundraising: 8%',
  },
  {
    year: 'Q4 2025 Impact Brief',
    summary: 'Targeted youth employability and women-led business support produced measurable income gains in partner communities.',
    utilization: '1,350 direct beneficiaries in quarter',
  },
];

const projectHighlights = [
  {
    title: 'Maternal Health Outreach in Rural Clusters',
    outcome: 'Reduced missed prenatal checks by 41% within 9 months.',
    image: '/images/services/p7.jpg',
  },
  {
    title: 'Back-to-School Equity Drive',
    outcome: 'Distributed uniforms and kits to 900 children with a 96% school resumption rate.',
    image: '/images/services/p9.jpg',
  },
  {
    title: 'Women Cooperative Micro-Grant Program',
    outcome: '120 small enterprises launched with 78% six-month survival rate.',
    image: '/images/services/p10.jpeg',
  },
];

export function ProjectsReportsSection() {
  return (
    <section id='projects' className='py-20 bg-slate-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-14'
        >
          <h2 className='text-4xl md:text-5xl font-extrabold text-blue-900'>Projects and Impact Reports</h2>
          <p className='mt-4 text-lg text-slate-600 max-w-3xl mx-auto'>
            Transparent reporting on project delivery, financial stewardship, and outcomes from our field programs.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8'>
          <Card className='p-6 md:p-8 border-slate-200'>
            <div className='flex items-center gap-2 mb-5'>
              <FileText className='h-6 w-6 text-blue-700' />
              <h3 className='text-2xl font-bold text-slate-900'>Financial Transparency</h3>
            </div>
            <div className='space-y-4'>
              {reports.map((report) => (
                <div key={report.year} className='rounded-xl border border-slate-200 p-4 bg-white'>
                  <div className='font-semibold text-slate-900'>{report.year}</div>
                  <p className='text-sm text-slate-600 mt-1'>{report.summary}</p>
                  <p className='text-sm text-[#2c5c39] font-medium mt-2'>{report.utilization}</p>
                </div>
              ))}
            </div>
            <div className='mt-6 flex flex-wrap gap-3'>
              <Button className='bg-blue-700 hover:bg-blue-800'>
                Download Annual Report
                <ArrowDownToLine className='ml-2 h-4 w-4' />
              </Button>
              <Button variant='outline' className='border-slate-300'>
                Download Audit Summary
              </Button>
            </div>
          </Card>

          <Card className='p-6 md:p-8 border-slate-200'>
            <div className='flex items-center gap-2 mb-5'>
              <TrendingUp className='h-6 w-6 text-[#2c5c39]' />
              <h3 className='text-2xl font-bold text-slate-900'>Project Success Stories</h3>
            </div>
            <div className='space-y-4'>
              {projectHighlights.map((project) => (
                <div key={project.title} className='rounded-xl overflow-hidden border border-slate-200 bg-white'>
                  <img src={publicAsset(project.image)} alt={project.title} className='h-36 w-full object-cover' loading='lazy' />
                  <div className='p-4'>
                    <h4 className='font-semibold text-slate-900'>{project.title}</h4>
                    <p className='text-sm text-slate-600 mt-1'>{project.outcome}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-6 grid sm:grid-cols-2 gap-3'>
              <div className='rounded-xl bg-blue-50 p-4 border border-blue-100'>
                <BadgeCheck className='h-5 w-5 text-blue-700 mb-2' />
                <p className='text-sm font-semibold text-slate-800'>Certified Governance Process</p>
                <p className='text-xs text-slate-600 mt-1'>Board-reviewed disbursement and procurement controls.</p>
              </div>
              <div className='rounded-xl bg-emerald-50 p-4 border border-emerald-100'>
                <BadgeCheck className='h-5 w-5 text-emerald-700 mb-2' />
                <p className='text-sm font-semibold text-slate-800'>Third-Party Monitoring</p>
                <p className='text-xs text-slate-600 mt-1'>Independent verification of outputs and beneficiary feedback.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
