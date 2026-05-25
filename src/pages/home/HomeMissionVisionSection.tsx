import { motion } from "motion/react";
import { ArrowRight, Eye, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { publicAsset } from "@/lib/assets";
import { ROUTES } from "@/routes/paths";

export function HomeMissionVisionSection() {
  return (
    <section className='relative z-20 bg-white pb-20 pt-60 sm:pt-72 md:pt-44'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='flex items-center gap-3 text-primary'>
              <Target className='h-5 w-5' />
              <p className='text-sm font-black uppercase tracking-wide'>
                About Us
              </p>
            </div>
            <h2 className='mt-4 font-display text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl'>
              Our Mission
            </h2>
            <p className='mt-6 max-w-xl text-base leading-8 text-slate-600'>
              To improve the lives of vulnerable children, families, and
              underserved communities through education support, health
              outreach, food relief, empowerment programs, and compassionate
              service delivered with transparency and dignity.
            </p>
            <Button
              asChild
              className='mt-9 rounded-full px-6 py-4 text-sm font-black uppercase sm:px-8 sm:py-6'
            >
              <Link to={ROUTES.about}>
                Learn More
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='overflow-hidden rounded-lg shadow-2xl shadow-slate-200'
          >
            <img
              src={publicAsset("/images/services/p1.jpg")}
              alt='Volunteers packing relief supplies for community outreach'
              className='h-72 w-full object-cover sm:h-80 lg:h-100'
              loading='lazy'
            />
          </motion.div>
        </div>

        <div className='mt-20 grid gap-12 lg:grid-cols-2 lg:items-center'>
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='order-2 flex flex-col gap-4 lg:order-1 lg:block lg:min-h-96'
          >
            <div className='overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl lg:absolute lg:left-0 lg:top-20 lg:h-72 lg:w-[46%] lg:rounded-tl-[4.5rem]'>
              <img
                src={publicAsset("/images/services/p8.jpg")}
                alt='Community support for children'
                className='h-56 w-full object-cover sm:h-64 lg:h-full'
                loading='lazy'
              />
            </div>
            <div className='overflow-hidden rounded-[2rem] bg-slate-100 shadow-2xl lg:absolute lg:right-0 lg:top-0 lg:h-88 lg:w-[58%] lg:rounded-br-[4.5rem]'>
              <img
                src={publicAsset("/images/services/p9.jpg")}
                alt='Community volunteers serving children'
                className='h-56 w-full object-cover sm:h-64 lg:h-full'
                loading='lazy'
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='order-1 lg:order-2'
          >
            <div className='flex items-center gap-3 text-primary'>
              <Eye className='h-5 w-5' />
              <p className='text-sm font-black uppercase tracking-wide'>
                What We Do
              </p>
            </div>
            <h2 className='mt-4 font-display text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl'>
              Our Vision
            </h2>
            <p className='mt-6 max-w-xl text-base leading-8 text-slate-600'>
              To see a fair and hopeful society where every child can learn,
              every family can access basic support, and every community has the
              opportunity to grow with dignity, resilience, and shared
              responsibility.
            </p>
            <Button
              asChild
              className='mt-9 rounded-full px-6 py-4 text-sm font-black uppercase sm:px-8 sm:py-6'
            >
              <Link to={ROUTES.programs}>
                Our Programs
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
