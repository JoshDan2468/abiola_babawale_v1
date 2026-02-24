import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Calendar, HandHelping, Users } from 'lucide-react';

interface StatProps {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const duration = 1700;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 },
    );

    const node = ref.current;
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className='text-4xl md:text-5xl font-extrabold text-white'>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

function StatCard({ icon: Icon, value, label, suffix = '' }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className='rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-7 text-center'
    >
      <div className='w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4'>
        <Icon className='w-7 h-7 text-white' />
      </div>
      <AnimatedCounter value={value} suffix={suffix} />
      <p className='text-white/90 mt-2'>{label}</p>
    </motion.div>
  );
}

export function ImpactStats() {
  const stats: StatProps[] = [
    { icon: Users, value: 12500, label: 'People Reached', suffix: '+' },
    { icon: HandHelping, value: 420, label: 'Volunteers Mobilized', suffix: '+' },
    { icon: Building2, value: 35, label: 'Communities Served', suffix: '+' },
    { icon: Calendar, value: 4, label: 'Years of Structured Impact', suffix: '' },
  ];

  return (
    <section className='relative py-20 overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-blue-700 via-[#071352] to-[#2c5c39]' />
      <motion.div
        className='absolute inset-0 opacity-40'
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.2) 0%, transparent 35%), radial-gradient(circle at 80% 90%, rgba(255,255,255,0.17) 0%, transparent 40%)',
          backgroundSize: '100% 100%',
        }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-14'
        >
          <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-4'>Impact Statistics</h2>
          <p className='text-lg text-white/90 max-w-2xl mx-auto'>
            Public metrics that show where support goes and what outcomes are being achieved.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
