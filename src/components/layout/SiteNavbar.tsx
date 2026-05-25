import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { publicAsset } from "@/lib/assets";
import { MAIN_NAV_ROUTES, ROUTES } from "@/routes/paths";

const baseItem =
  "px-3 py-2 rounded-full text-sm font-semibold transition-all duration-200";
const menuButtonClass =
  "xl:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100";

export function SiteNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-md'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between gap-3'>
          <Link
            to={ROUTES.home}
            className='flex items-center gap-3'
            aria-label='Go to home page'
          >
            <img
              src={publicAsset("/images/navimage/titus-logo1.png")}
              alt='Titus and Abiola Babawale Initiative logo'
              width={70}
              height={70}
              className='h-15 w-15 shrink-0 object-contain sm:h-18 sm:w-18'
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

          <nav
            className='hidden xl:flex items-center gap-2'
            aria-label='Main Navigation'
          >
            {MAIN_NAV_ROUTES.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${baseItem} ${isActive ? "bg-blue-700 text-white shadow-sm" : "text-slate-700 hover:bg-blue-50"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {isOpen ? (
            <button
              type='button'
              className={menuButtonClass}
              aria-label='Close navigation menu'
              aria-expanded='true'
              onClick={() => setIsOpen(false)}
            >
              <X className='h-6 w-6' />
            </button>
          ) : (
            <button
              type='button'
              className={menuButtonClass}
              aria-label='Open navigation menu'
              aria-expanded='false'
              onClick={() => setIsOpen(true)}
            >
              <Menu className='h-6 w-6' />
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
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
                      isActive
                        ? "bg-blue-700 text-white"
                        : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
