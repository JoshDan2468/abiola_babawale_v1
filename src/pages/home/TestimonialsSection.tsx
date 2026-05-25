import { motion, AnimatePresence } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "Beneficiary Parent",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    quote:
      "The education support transformed my children. They are now in school consistently and performing much better.",
    rating: 5,
  },
  {
    name: "Grace Okonkwo",
    role: "Women Empowerment Participant",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    quote:
      "The vocational training and mentorship helped me launch my tailoring business and support my household.",
    rating: 5,
  },
  {
    name: "Emmanuel Eze",
    role: "Youth Volunteer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    quote:
      "Serving with this NGO has shown me what accountable community service looks like in practice.",
    rating: 5,
  },
  {
    name: "Fatima Mohammed",
    role: "Healthcare Beneficiary",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop",
    quote:
      "I received treatment during outreach at the right time. The care team was patient and compassionate.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section id='impact' className='py-20 bg-white relative overflow-hidden'>
      <div className='absolute inset-0 opacity-5 bg-dot-pattern' />

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-14'
        >
          <h2 className='text-4xl md:text-5xl font-extrabold text-blue-900'>
            Success Stories and Testimonials
          </h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto mt-4'>
            Real feedback from families and volunteers impacted by our programs.
          </p>
        </motion.div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.45 }}
            className='rounded-2xl bg-linear-to-br from-blue-50 to-emerald-50 p-8 md:p-12 shadow-xl'
          >
            <Quote className='w-12 h-12 text-blue-200 mb-5' />
            <p className='text-xl md:text-2xl italic text-slate-800 mb-7'>
              "{testimonials[current].quote}"
            </p>
            <div className='flex flex-wrap items-center gap-4'>
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className='w-14 h-14 rounded-full object-cover border-2 border-white shadow-md'
                loading='lazy'
              />
              <div>
                <p className='font-bold text-slate-900'>
                  {testimonials[current].name}
                </p>
                <p className='text-sm text-slate-600'>
                  {testimonials[current].role}
                </p>
              </div>
              <div className='flex gap-1 ml-auto'>
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className='w-4 h-4 text-amber-400 fill-amber-400'
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className='flex justify-center gap-3 mt-7'>
          <button
            onClick={prev}
            className='w-11 h-11 rounded-full bg-white shadow-md hover:bg-blue-50 flex items-center justify-center'
            aria-label='Previous testimonial'
          >
            <ChevronLeft className='w-5 h-5 text-blue-700' />
          </button>
          <button
            onClick={next}
            className='w-11 h-11 rounded-full bg-white shadow-md hover:bg-blue-50 flex items-center justify-center'
            aria-label='Next testimonial'
          >
            <ChevronRight className='w-5 h-5 text-blue-700' />
          </button>
        </div>
      </div>
    </section>
  );
}
