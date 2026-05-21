import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Heart, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MAIN_NAV_ROUTES, ROUTES } from '@/routes/paths';

const baseItem =
  'px-3 py-2 rounded-full text-sm font-semibold transition-all duration-200';

export function SiteNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-md'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between gap-3'>
          <Link to={ROUTES.home} className='flex items-center gap-3' aria-label='Go to home page'>
            <img
              src='/icons/icon_ngo.png'
              alt='Titus and Abiola Babawale Initiative logo'
              className='h-11 w-11 object-contain'
            />
            <div>
              <p className='text-base font-extrabold leading-tight tracking-wide text-brand-navy'>
                TITUS & ABIOLA
              </p>
              <p className='mt-1 inline-block rounded-md bg-blue-700 px-2 py-0.5 text-[10px] font-semibold text-white'>
                BABAWALE INITIATIVE
              </p>
            </div>
          </Link>

          <nav className='hidden xl:flex items-center gap-2' aria-label='Main Navigation'>
            {MAIN_NAV_ROUTES.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${baseItem} ${isActive ? 'bg-blue-700 text-white shadow-sm' : 'text-slate-700 hover:bg-blue-50'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild className='rounded-full bg-[#2c5c39] hover:bg-[#234a2e] ml-2'>
              <Link to={ROUTES.donate}>
                Donate
                <Heart className='ml-2 h-4 w-4' fill='currentColor' />
              </Link>
            </Button>
          </nav>

          <button
            type='button'
            className='xl:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100'
            aria-label='Toggle navigation menu'
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='xl:hidden border-t border-slate-200 bg-white'
          >
            <div className='mx-auto max-w-7xl px-4 py-3 grid gap-1'>
              {MAIN_NAV_ROUTES.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-semibold ${
                      isActive ? 'bg-blue-700 text-white' : 'text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button asChild className='mt-2 bg-[#2c5c39] hover:bg-[#234a2e]'>
                <Link to={ROUTES.donate} onClick={() => setIsOpen(false)}>
                  Donate Now
                </Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
