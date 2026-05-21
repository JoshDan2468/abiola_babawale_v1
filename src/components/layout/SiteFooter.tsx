import { motion } from 'motion/react';
import { ArrowUp, BadgeCheck, Facebook, Instagram, Landmark, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { publicAsset } from '@/lib/assets';
import { FOOTER_NAV_ROUTES } from '@/routes/paths';

export function SiteFooter() {
  return (
    <footer className='relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-950 text-white'>
      <div
        className='absolute inset-0 opacity-10'
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '36px 36px' }}
      />

      <div className='relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mb-12 grid gap-10 lg:grid-cols-4'>
          <div>
            <div className='mb-4 flex items-center gap-3'>
              <img src={publicAsset('/icons/icon_ngo.png')} alt='NGO logo' className='h-10 w-10' />
              <div>
                <p className='font-bold'>Titus and Abiola</p>
                <p className='text-xs text-emerald-300'>Babawale Initiative</p>
              </div>
            </div>
            <p className='text-sm text-slate-300'>
              Community-focused non-profit driving measurable social impact through transparent operations.
            </p>
            <div className='mt-4 flex gap-3'>
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href='#'
                  className='flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20'
                >
                  <Icon className='h-4 w-4' />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className='mb-3 font-bold'>Quick Links</h3>
            <ul className='space-y-2 text-sm text-slate-300'>
              {FOOTER_NAV_ROUTES.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className='hover:text-white transition-colors'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='mb-3 font-bold'>Trust and Compliance</h3>
            <ul className='space-y-2 text-sm text-slate-300'>
              <li className='flex items-start gap-2'>
                <BadgeCheck className='mt-0.5 h-4 w-4 shrink-0 text-emerald-300' />
                NGO Registration No: RC 7942241
              </li>
              <li className='flex items-start gap-2'>
                <BadgeCheck className='mt-0.5 h-4 w-4 shrink-0 text-emerald-300' />
                Annual external financial review
              </li>
              <li className='flex items-start gap-2'>
                <BadgeCheck className='mt-0.5 h-4 w-4 shrink-0 text-emerald-300' />
                Annual and quarterly impact reports published
              </li>
            </ul>
            <p className='mt-4 text-xs text-slate-400'>
              Partners: Community Health Alliance | Education Forward | YouthWorks Collective
            </p>
          </div>

          <div>
            <h3 className='mb-3 font-bold'>Donation Account</h3>
            <div className='space-y-1 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm'>
              <div className='flex items-center gap-2 font-semibold'>
                <Landmark className='h-4 w-4' />
                Official Account
              </div>
              <p>Account Name: Titus and Abiola Babawale Initiative</p>
              <p>Account Number: 0123456789</p>
              <p>Bank: First Bank of Nigeria</p>
            </div>
            <div className='mt-4 space-y-2 text-sm text-slate-300'>
              <p className='flex items-center gap-2'>
                <Mail className='h-4 w-4' /> donations@tabainitiative.org
              </p>
              <p className='flex items-center gap-2'>
                <Phone className='h-4 w-4' /> +234 (0) 813 000 0000
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row'>
          <p>&copy; 2026 Titus and Abiola Babawale Initiative. All rights reserved.</p>
          <div className='flex items-center gap-5'>
            <a href='#' className='hover:text-white'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-white'>
              Terms
            </a>
            <a href='#' className='hover:text-white'>
              Accessibility
            </a>
          </div>
        </div>
      </div>

      <motion.button
        type='button'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className='fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-[#2c5c39] shadow-xl'
        aria-label='Scroll to top'
      >
        <ArrowUp className='h-5 w-5 text-white' />
      </motion.button>
    </footer>
  );
}
