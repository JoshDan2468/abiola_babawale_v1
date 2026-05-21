import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';
import { publicAsset } from '@/lib/assets';

const media = [
  { type: 'image', src: '/images/services/p1.jpg', title: 'School Supplies Outreach' },
  { type: 'image', src: '/images/services/p2.jpg', title: 'Youth Mentoring Session' },
  { type: 'image', src: '/images/services/p3.jpg', title: 'Clean Water Project' },
  { type: 'image', src: '/images/services/p4.jpg', title: 'Health Screening Event' },
  { type: 'image', src: '/images/services/p5.jpg', title: 'Community Development Visit' },
  { type: 'image', src: '/images/services/p6.jpg', title: 'Food Distribution Program' },
  { type: 'image', src: '/images/services/p7.jpg', title: 'Maternal Support Outreach' },
  { type: 'image', src: '/images/services/p8.jpg', title: 'Children Learning Activity' },
  { type: 'image', src: '/images/services/p9.jpg', title: 'Women Enterprise Workshop' },
  { type: 'image', src: '/images/services/p10.jpeg', title: 'Field Monitoring and Evaluation' },
  { type: 'image', src: '/images/services/p11.jpeg', title: 'Volunteer Coordination Team' },
  { type: 'video', src: '/images/services/p12.mp4', title: 'Community Impact Documentary Clip' },
];

export function GalleryAllPage() {
  return (
    <section className='bg-white py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-12 text-center'
        >
          <h1 className='text-4xl font-extrabold text-blue-900 md:text-5xl'>Gallery Archive</h1>
          <p className='mx-auto mt-4 max-w-3xl text-lg text-slate-600'>
            A complete visual record of our activities, outreach efforts, and impact moments across communities.
          </p>
        </motion.div>

        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {media.map((item, index) => (
            <motion.article
              key={`${item.src}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.03 }}
              className='group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'
            >
              <div className='relative h-64 overflow-hidden bg-slate-900'>
                {item.type === 'video' ? (
                  <video src={publicAsset(item.src)} controls className='h-full w-full object-cover' />
                ) : (
                  <img
                    src={publicAsset(item.src)}
                    alt={item.title}
                    loading='lazy'
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                )}
                {item.type === 'video' && (
                  <div className='absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white'>
                    <PlayCircle className='h-3 w-3' />
                    Video
                  </div>
                )}
              </div>
              <div className='p-4'>
                <h2 className='font-semibold text-slate-900'>{item.title}</h2>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
