import { motion } from 'motion/react';
import { BookOpen, Heart, Users, Sprout, Briefcase, Home } from 'lucide-react';
import { Card } from '@/components/ui/card';

const programs = [
  {
    icon: BookOpen,
    title: 'Education & Literacy',
    description: 'Providing quality education, school supplies, and literacy programs to empower children and adults.',
    color: 'from-blue-500 to-blue-600',
    stats: '500+ Students'
  },
  {
    icon: Heart,
    title: 'Healthcare Access',
    description: 'Free medical care, health screenings, and preventive care for underserved communities.',
    color: 'from-red-500 to-pink-600',
    stats: '2,000+ Patients'
  },
  {
    icon: Users,
    title: 'Youth Empowerment',
    description: 'Skills training, mentorship programs, and leadership development for young people.',
    color: 'from-purple-500 to-purple-600',
    stats: '300+ Youth'
  },
  {
    icon: Sprout,
    title: 'Women Development',
    description: 'Economic empowerment, vocational training, and support for women entrepreneurs.',
    color: 'from-[#2c5c39] to-[#234a2e]',
    stats: '250+ Women'
  },
  {
    icon: Briefcase,
    title: 'Skills & Livelihood',
    description: 'Vocational training and job placement programs to create sustainable income opportunities.',
    color: 'from-orange-500 to-orange-600',
    stats: '400+ Trained'
  },
  {
    icon: Home,
    title: 'Community Development',
    description: 'Building infrastructure, clean water access, and sustainable community projects.',
    color: 'from-teal-500 to-teal-600',
    stats: '35 Communities'
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive initiatives designed to create lasting change in communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-shadow group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <program.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm font-semibold text-[#2c5c39]">
                    {program.stats}
                  </span>
                  <span className="text-sm text-blue-600 hover:underline">
                    Learn More →
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
