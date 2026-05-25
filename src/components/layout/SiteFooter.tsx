import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowUp,
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import { publicAsset } from "@/lib/assets";
import { FOOTER_NAV_ROUTES, ROUTES } from "@/routes/paths";

const serviceLinks = [
  { label: "Education Support", to: ROUTES.programs },
  { label: "Food Support", to: ROUTES.programs },
  { label: "Health Support", to: ROUTES.programs },
  { label: "Our Campaign", to: ROUTES.getInvolved },
];

const socialLinks = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Youtube, label: "YouTube" },
];

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Thank you. We will keep you updated.");
    setEmail("");
  }

  return (
    <footer className='relative overflow-hidden rounded-t-[1.75rem] bg-brand-navy text-white'>
      <div
        className='absolute -left-16 -top-12 h-32 w-96 rotate-[-8deg] bg-white'
        style={{
          clipPath:
            "polygon(0 20%, 100% 0, 86% 35%, 18% 68%, 100% 54%, 100% 100%, 0 100%)",
        }}
      />
      <div
        className='absolute -right-12 bottom-12 h-32 w-56 rotate-[-8deg] bg-white/14'
        style={{
          clipPath:
            "polygon(10% 36%, 100% 0, 82% 46%, 100% 56%, 20% 100%, 0 76%)",
        }}
      />
      <div
        className='absolute inset-0 opacity-[0.07]'
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "34px 34px",
        }}
      />

      <div className='relative z-10 mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8'>
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.35fr]'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to={ROUTES.home} className='mb-5 flex items-center gap-3'>
              <img
                src={publicAsset("/images/navimage/titus-logo1.png")}
                alt='Titus and Abiola Babawale Initiative logo'
                className='h-18 w-18 rounded-full bg-white object-contain p-1'
              />
              <div>
                <p className='text-lg font-black leading-tight'>
                  Titus and Abiola
                </p>
                <p className='text-xs font-bold uppercase tracking-wide text-white/70'>
                  Babawale Initiative
                </p>
              </div>
            </Link>
            <p className='max-w-xs text-sm leading-7 text-white/75'>
              Our partnership channels help you connect with education, health,
              relief, and community development work.
            </p>

            <div className='mt-6 space-y-4'>
              <a
                href='tel:+2348130000000'
                className='flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white'
              >
                <span className='flex h-10 w-10 items-center justify-center rounded-full bg-white/12'>
                  <Phone className='h-4 w-4' />
                </span>
                <span>
                  <span className='block text-xs text-white/60'>
                    Call us any time
                  </span>
                  <span className='font-bold'>+234 (0) 813 000 0000</span>
                </span>
              </a>
              <a
                href='mailto:info@tabainitiative.org'
                className='flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white'
              >
                <span className='flex h-10 w-10 items-center justify-center rounded-full bg-white/12'>
                  <Mail className='h-4 w-4' />
                </span>
                <span>
                  <span className='block text-xs text-white/60'>
                    Email us any time
                  </span>
                  <span className='font-bold'>info@tabainitiative.org</span>
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h3 className='text-lg font-black'>Quick Links</h3>
            <div className='mt-3 h-0.5 w-12 bg-white' />
            <ul className='mt-5 space-y-3 text-sm text-white/75'>
              {FOOTER_NAV_ROUTES.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className='inline-flex items-center gap-2 transition-colors hover:text-white'
                  >
                    <ArrowUpRight className='h-3.5 w-3.5 text-white' />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <h3 className='text-lg font-black'>Our Service</h3>
            <div className='mt-3 h-0.5 w-12 bg-white' />
            <ul className='mt-5 space-y-3 text-sm text-white/75'>
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className='inline-flex items-center gap-2 transition-colors hover:text-white'
                  >
                    <ArrowUpRight className='h-3.5 w-3.5 text-white' />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <h3 className='text-lg font-black'>Newsletter</h3>
            <div className='mt-3 h-0.5 w-12 bg-white' />
            <p className='mt-5 max-w-sm text-sm leading-7 text-white/75'>
              Subscribe for outreach updates, campaign reports, volunteer
              opportunities, and community impact stories.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className='mt-5 flex max-w-sm flex-col gap-2 overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/10 p-1 sm:flex-row'
            >
              <label className='sr-only' htmlFor='footer-newsletter-email'>
                Enter your email
              </label>
              <input
                id='footer-newsletter-email'
                type='email'
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMessage("");
                }}
                placeholder='Enter your email'
                className='min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-white/55'
              />
              <button
                type='submit'
                className='flex h-11 shrink-0 items-center justify-center rounded-full bg-white px-4 text-brand-navy transition-colors hover:bg-white/90 sm:w-15'
                aria-label='Subscribe to newsletter'
              >
                <Send className='h-4 w-4' />
              </button>
            </form>
            {message && (
              <p className='mt-3 flex items-center gap-2 text-sm font-semibold text-white/85'>
                <MessageCircle className='h-4 w-4' />
                {message}
              </p>
            )}

            <div className='mt-6 flex gap-3'>
              {socialLinks.map(({ Icon, label }) => (
                <a
                  key={label}
                  href='#'
                  aria-label={`Visit our ${label}`}
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-navy transition-transform hover:-translate-y-1 hover:bg-white/90'
                >
                  <Icon className='h-4 w-4' />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className='relative z-10 bg-white/10 px-4 py-6 text-center text-sm text-white/80 sm:px-6 lg:px-8'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 md:flex-row'>
          <p>
            Copyright 2026{" "}
            <span className='font-bold text-white'>
              Titus and Abiola Babawale Initiative
            </span>
            . All Rights Reserved.
          </p>
          <div className='flex flex-wrap justify-center gap-5 text-xs font-semibold uppercase tracking-wide'>
            <Link to={ROUTES.about} className='hover:text-white'>
              Privacy Policy
            </Link>
            <Link to={ROUTES.contact} className='hover:text-white'>
              Contact
            </Link>
          </div>
        </div>
      </div>

      <motion.button
        type='button'
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className='fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy shadow-xl ring-1 ring-white/20'
        aria-label='Scroll to top'
      >
        <ArrowUp className='h-5 w-5 text-white' />
      </motion.button>
    </footer>
  );
}
