import { motion } from "motion/react";
import { HandHeart, Handshake, Heart, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { publicAsset } from "@/lib/assets";

const ways = [
  {
    icon: Heart,
    title: "Volunteer Opportunities",
    description:
      "Join field activities, outreach events, and mentoring programs.",
    cta: "Volunteer Now",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description:
      "Partner as an institution, foundation, or responsible corporate organization.",
    cta: "Partner With Us",
  },
  {
    icon: HandHeart,
    title: "Community Events",
    description:
      "Participate in outreach days, health programs, and impact showcases.",
    cta: "View Events",
  },
  {
    icon: Mail,
    title: "Stay Updated",
    description:
      "Get monthly project updates, stories, and upcoming opportunities.",
    cta: "Join Newsletter",
  },
];

const backgroundImages = [
  "/images/services/p1.jpg",
  "/images/services/p5.jpg",
  "/images/services/p8.jpg",
  "/images/services/p9.jpg",
];

const slideSet = [...backgroundImages, ...backgroundImages];

export function GetInvolvedSection() {
  return (
    <section
      id='get-involved'
      className='py-20 bg-gradient-to-br from-[#071352] via-blue-900 to-[#0f5f41] relative overflow-hidden'
    >
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_24%),linear-gradient(140deg,rgba(7,19,82,0.92),rgba(15,95,65,0.8),rgba(6,9,34,0.92))]' />
        <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_35%,rgba(15,23,42,0.18))]' />

        <motion.div
          className='absolute inset-0 flex whitespace-nowrap'
          animate={{ x: [0, -120] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {slideSet.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={publicAsset(image)}
              alt=''
              aria-hidden='true'
              className='h-full w-[72vw] min-w-[220px] shrink-0 rounded-[1.5rem] border border-white/20 object-cover opacity-35 shadow-[0_24px_70px_rgba(15,23,42,0.45)] sm:w-[45vw] lg:w-[35vw]'
            />
          ))}
        </motion.div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-14'
        >
          <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
            Get Involved
          </h2>
          <p className='text-lg text-slate-200 max-w-2xl mx-auto mt-4'>
            Engage as a volunteer, partner, or advocate and help us scale
            sustainable community impact.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Card className='h-full bg-white/10 border-white/20 text-white backdrop-blur-md p-6'>
                <div className='w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4'>
                  <way.icon className='h-6 w-6' />
                </div>
                <h3 className='text-lg font-bold mb-2'>{way.title}</h3>
                <p className='text-sm text-slate-200 mb-5'>{way.description}</p>
                <Button
                  variant='outline'
                  className='w-full border-white text-white hover:bg-white hover:text-blue-900'
                >
                  {way.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mt-12 rounded-2xl border border-white/20 bg-white/10 p-7 md:p-9 text-center backdrop-blur-md'
        >
          <h3 className='text-2xl md:text-3xl font-bold text-white'>
            Upcoming Events
          </h3>
          <p className='text-slate-200 mt-2'>
            Community Impact Day: March 12, 2026 | Volunteer Orientation: March
            25, 2026 | Partner Roundtable: April 8, 2026
          </p>
          <div className='mt-5 flex flex-wrap justify-center gap-3'>
            <Button
              asChild
              className='bg-white text-blue-900 hover:bg-slate-100'
            >
              <Link to='/news'>See Event Details</Link>
            </Button>
            <Button asChild className='bg-[#2c5c39] hover:bg-[#234a2e]'>
              <Link to='/contact'>Register Interest</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
