import { motion } from 'motion/react';
import { Heart, Users, Handshake, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ways = [
  {
    icon: Heart,
    title: 'Donate',
    description: 'Your financial support helps us provide essential services to communities in need.',
    cta: 'Make a Donation',
    color: 'from-red-500 to-pink-600',
    features: ['One-time donation', 'Monthly giving', 'Corporate sponsorship']
  },
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Join our team of dedicated volunteers and make a direct impact in communities.',
    cta: 'Become a Volunteer',
    color: 'from-blue-500 to-blue-600',
    features: ['Field programs', 'Skills-based volunteering', 'Event support']
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    description: 'Collaborate with us to amplify our impact and reach more communities.',
    cta: 'Explore Partnerships',
    color: 'from-[#2c5c39] to-[#234a2e]',
    features: ['Corporate partnerships', 'NGO collaborations', 'Community engagement']
  },
  {
    icon: Mail,
    title: 'Join Newsletter',
    description: 'Stay updated with our latest programs, success stories, and upcoming events.',
    cta: 'Subscribe Now',
    color: 'from-purple-500 to-purple-600',
    features: ['Monthly updates', 'Impact reports', 'Event invitations']
  },
];

export function GetInvolvedSection() {
  return (
    <section id="get-involved" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Involved
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            You can be the reason someone has hope today. Choose how you want to make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 h-full hover:bg-white/20 transition-all group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 bg-gradient-to-br ${way.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <way.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2c5c39] transition-colors">
                  {way.title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm">
                  {way.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {way.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#2c5c39] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-white text-gray-900 hover:bg-gray-100"
                  variant="outline"
                >
                  {way.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-[#2c5c39] to-blue-600 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every contribution counts. Together, we can create lasting change in communities that need it most.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              Donate Now
              <Heart className="ml-2 w-5 h-5" fill="currentColor" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
