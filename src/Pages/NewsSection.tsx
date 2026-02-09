import { motion } from 'motion/react';
import { Calendar, ArrowRight, Clock, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const newsItems = [
  {
    title: 'Annual Charity Gala 2026',
    date: 'February 15, 2026',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    description: 'Join us for our annual charity gala to celebrate our achievements and raise funds for upcoming projects.',
    location: 'Lagos Convention Center',
    time: '6:00 PM'
  },
  {
    title: '500 Students Receive Scholarships',
    date: 'January 20, 2026',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGFmcmljYXxlbnwxfHx8fDE3Njg3NjczOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'We are proud to announce that 500 students have been awarded scholarships for the 2026 academic year.',
    location: 'Multiple Locations'
  },
  {
    title: 'New Healthcare Center Opening',
    date: 'January 10, 2026',
    category: 'Announcement',
    image: 'https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYWZyaWNhJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2ODc2NzM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Our new healthcare center in Abuja is now open, providing free medical services to underserved communities.',
    location: 'Abuja'
  },
  {
    title: 'Women Empowerment Workshop',
    date: 'February 5, 2026',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
    description: 'A two-day workshop focused on entrepreneurship and business skills for women in rural communities.',
    location: 'Community Center, Enugu',
    time: '9:00 AM'
  },
  {
    title: 'Partnership with Global NGO',
    date: 'December 15, 2025',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
    description: 'We have partnered with an international organization to expand our reach and impact across West Africa.',
    location: 'Virtual'
  },
  {
    title: 'Volunteer Appreciation Day',
    date: 'March 1, 2026',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwaGVscGluZyUyMHBlb3BsZXxlbnwxfHx8fDE3Njg3MjA1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Celebrating our amazing volunteers who make our mission possible with dedication and compassion.',
    location: 'Regional Offices',
    time: '2:00 PM'
  },
];

export function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            News & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest activities, events, and impact stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-2xl transition-shadow group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      className={`${
                        item.category === 'Event' 
                          ? 'bg-blue-600' 
                          : item.category === 'News'
                          ? 'bg-[#2c5c39]'
                          : 'bg-purple-600'
                      } text-white`}
                    >
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                    {item.time && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{item.time}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Load More Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
