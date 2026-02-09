import { motion } from 'motion/react';
import { Target, Eye, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-[#e8f0eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1547496613-4e19af6736dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGFmcmljYW4lMjBjaGlsZHJlbnxlbnwxfHx8fDE3Njg3NjczOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Happy children"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#d4e5da] p-3 rounded-lg">
                  <Award className="w-6 h-6 text-[#2c5c39]" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Registered NGO</div>
                  <div className="text-sm text-gray-600">Operating since 2015 with full transparency</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              About TAITUS AND ABIOLA BABAWALE INITIATIVE
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We are a registered non-governmental organization dedicated to spreading love and lending helping hands to those in need. Since 2015, we have been committed to transforming lives and building sustainable communities.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our work spans across education, healthcare, youth empowerment, women development, and community building. We believe that the secret to happiness lies in helping others, and we're committed to making a lasting difference.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="bg-blue-100 p-3 rounded-lg h-fit">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To empower communities through sustainable programs in education, healthcare, and economic development, ensuring no one is left behind.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-4"
              >
                <div className="bg-[#d4e5da] p-3 rounded-lg h-fit">
                  <Eye className="w-6 h-6 text-[#2c5c39]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    A world where every person has access to quality education, healthcare, and opportunities to thrive and reach their full potential.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <a
                href="#programs"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-[#2c5c39] text-white rounded-lg hover:from-blue-700 hover:to-[#234a2e] transition-all"
              >
                Explore Our Programs →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
