import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { publicAsset } from "@/lib/assets";
import { ROUTES } from "@/routes/paths";
import { HeroActionCards } from "./HeroActionCards";

const heroSlides = [
  {
    src: "/images/services/p8.jpg",
    alt: "Children receiving support during a Titus and Abiola Babawale Initiative outreach",
    eyebrow: "Raise your helping hand for",
    accent: "Helpless",
    title: "Children",
    text: "We provide food, education, healthcare, and dignity-centered support for children and families who need urgent care.",
    cta: "See Programs",
    link: ROUTES.programs,
  },
  {
    src: "/images/services/p1.jpg",
    alt: "Community volunteers distributing relief supplies to families",
    eyebrow: "Stand with families needing",
    accent: "Emergency",
    title: "Relief",
    text: "Your support helps us deliver food packs, welfare supplies, and practical care to vulnerable households.",
    cta: "Explore Relief Work",
    link: ROUTES.programs,
  },
  {
    src: "/images/services/p9.jpg",
    alt: "Titus and Abiola Babawale Initiative team with children after an outreach program",
    eyebrow: "Join our community of",
    accent: "Helping",
    title: "Hands",
    text: "Volunteer with our team to serve children, support outreach programs, and bring hope into local communities.",
    cta: "Become a Volunteer",
    link: ROUTES.volunteer,
  },
  {
    src: "/images/services/p4.jpg",
    alt: "Healthcare outreach support for underserved community members",
    eyebrow: "Support better access to",
    accent: "Health",
    title: "Care",
    text: "We organize outreach programs that connect underserved people with basic health checks and preventive support.",
    cta: "See Programs",
    link: ROUTES.programs,
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  return (
    <section
      id='home'
      className='relative min-h-165 overflow-visible bg-slate-950 pt-20 md:min-h-182.5'
    >
      <div className='absolute inset-0 z-0'>
        {heroSlides.map((slide, index) => (
          <motion.img
            key={slide.src}
            src={publicAsset(slide.src)}
            alt={slide.alt}
            className='absolute inset-0 h-full w-full object-cover object-center'
            loading={index === 0 ? "eager" : "lazy"}
            animate={{ opacity: activeSlide === index ? 1 : 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
        ))}
        <div className='absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-[#1b130a]/85' />
        <div className='absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-[#111111] via-[#111111]/95 to-transparent' />
      </div>

      <div className='relative z-10 mx-auto flex min-h-140 max-w-7xl items-center justify-end px-4 py-20 sm:px-6 lg:px-8'>
        <motion.div
          key={currentSlide.src}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='max-w-xl text-white'
        >
          <p className='text-sm font-bold uppercase tracking-[0.22em] text-white/85'>
            {currentSlide.eyebrow}
          </p>
          <h1 className='mt-3 font-display text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl'>
            <span className='block text-[#f59d2a]'>{currentSlide.accent}</span>
            <span className='block'>{currentSlide.title}</span>
          </h1>
          <p className='mt-6 max-w-md text-base leading-7 text-white/80'>
            {currentSlide.text}
          </p>
          <Button
            asChild
            className='mt-7 rounded-full bg-brand-navy px-7 text-sm font-bold text-white shadow-lg shadow-blue-950/30 hover:bg-blue-900'
          >
            <Link to={currentSlide.link}>{currentSlide.cta}</Link>
          </Button>
        </motion.div>
      </div>

      <Link
        to={ROUTES.programs}
        aria-label='View our programs'
        className='absolute right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25 md:flex'
      >
        <ChevronRight className='h-5 w-5' />
      </Link>

      <div className='absolute bottom-44 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-40'>
        {heroSlides.map((slide, index) => (
          <button
            key={slide.src}
            type='button'
            aria-label={`Show hero image ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              activeSlide === index ? "w-8 bg-[#f59d2a]" : "w-2.5 bg-white/65 hover:bg-white"
            }`}
          />
        ))}
      </div>

      <HeroActionCards />
    </section>
  );
}
