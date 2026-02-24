import { motion } from 'motion/react';
import { FormEvent, useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    );
    const mailto = `mailto:info@tabainitiative.org?subject=${encodeURIComponent(subject || 'Website Inquiry')}&body=${body}`;
    window.location.href = mailto;
  };

  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-14'
        >
          <h2 className='text-4xl md:text-5xl font-extrabold text-blue-900'>Contact Us</h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto mt-4'>
            Reach our team for partnership requests, volunteer onboarding, media inquiries, and donor support.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className='border-slate-200 p-6 md:p-8'>
              <h3 className='text-2xl font-bold text-slate-900 mb-5'>Contact Information</h3>
              <div className='space-y-5'>
                <div className='flex items-start gap-3'>
                  <MapPin className='h-5 w-5 text-blue-700 mt-1' />
                  <div className='text-slate-700'>14 Community Drive, Victoria Island, Lagos, Nigeria</div>
                </div>
                <div className='flex items-start gap-3'>
                  <Phone className='h-5 w-5 text-[#2c5c39] mt-1' />
                  <div className='text-slate-700'>
                    <div>+234 (0) 813 000 0000</div>
                    <div>+234 (0) 814 000 0000</div>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Mail className='h-5 w-5 text-blue-700 mt-1' />
                  <div className='text-slate-700'>
                    <div>info@tabainitiative.org</div>
                    <div>donations@tabainitiative.org</div>
                  </div>
                </div>
              </div>

              <div className='mt-6'>
                <h4 className='font-semibold text-slate-900 mb-3'>Social Media</h4>
                <div className='flex gap-3'>
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <a
                      key={index}
                      href='#'
                      className='w-10 h-10 rounded-lg bg-slate-100 hover:bg-blue-700 hover:text-white transition-colors flex items-center justify-center'
                      aria-label='Social media'
                    >
                      <Icon className='h-4 w-4' />
                    </a>
                  ))}
                </div>
              </div>

              <div className='mt-7 rounded-xl overflow-hidden border border-slate-200'>
                <iframe
                  title='Google map showing office location'
                  src='https://www.google.com/maps?q=Victoria+Island,+Lagos&output=embed'
                  className='w-full h-64 border-0'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className='border-slate-200 p-6 md:p-8'>
              <h3 className='text-2xl font-bold text-slate-900 mb-6'>Send Us a Message</h3>
              <form className='space-y-5' onSubmit={handleSubmit}>
                <div className='grid sm:grid-cols-2 gap-4'>
                  <div>
                    <label htmlFor='first-name' className='text-sm font-medium text-slate-700'>First Name</label>
                    <Input id='first-name' placeholder='John' className='mt-2' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor='last-name' className='text-sm font-medium text-slate-700'>Last Name</label>
                    <Input id='last-name' placeholder='Doe' className='mt-2' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  </div>
                </div>
                <div>
                  <label htmlFor='email' className='text-sm font-medium text-slate-700'>Email Address</label>
                  <Input id='email' type='email' placeholder='you@example.com' className='mt-2' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label htmlFor='phone' className='text-sm font-medium text-slate-700'>Phone Number</label>
                  <Input id='phone' type='tel' placeholder='+234 (0) 000 000 0000' className='mt-2' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                  <label htmlFor='subject' className='text-sm font-medium text-slate-700'>Subject</label>
                  <Input id='subject' placeholder='How can we support you?' className='mt-2' value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div>
                  <label htmlFor='message' className='text-sm font-medium text-slate-700'>Message</label>
                  <Textarea id='message' className='mt-2 min-h-[140px]' placeholder='Write your message here...' value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <Button type='submit' className='w-full bg-gradient-to-r from-blue-700 to-[#2c5c39] hover:from-blue-800 hover:to-[#234a2e]'>
                  Send Message
                  <Send className='ml-2 h-4 w-4' />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
