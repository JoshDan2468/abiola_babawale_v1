import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import GooeyNav from "@/components/GooeyNav";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Get Involved", href: "#get-involved" },
    { label: "Impact & Stories", href: "#impact" },
    { label: "News & Events", href: "#news" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm'>
      <div className='max-w-7.5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='flex items-center gap-2'
          >
            <img src='/icons/icon_ngo.png' alt='NGO Logo' className='h-30 w-30' />
            <div>
              <div className='text-lg font-bold text-brand-navy'>TAITUS & ABIOLA</div>
              <div className='text-xs font-bold text-white bg-blue-600 px-2 py-1 rounded-lg inline-block mt-1'>
                BABAWALE INITIATIVE
              </div>
            </div>
          </motion.div>

          <div className='hidden lg:flex items-center'>
            <GooeyNav
              items={[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Programs", href: "#programs" },
                { label: "Get Involved", href: "#get-involved" },
                { label: "Impact & Stories", href: "#impact" },
                { label: "News & Events", href: "#news" },
                { label: "Contact", href: "#contact" },
              ]}
            />
          </div>

          <button className='lg:hidden p-2' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className='lg:hidden pb-4'
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='block py-2 text-gray-700 hover:text-blue-600'
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}

