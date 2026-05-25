import { motion } from "motion/react";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formatNigerianPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  const withoutCountryCode = digits.startsWith("234")
    ? digits.slice(3)
    : digits;
  const normalized = withoutCountryCode.startsWith("0")
    ? withoutCountryCode
    : `0${withoutCountryCode}`;
  const trimmed = normalized.slice(0, 11);

  if (trimmed.length <= 4) {
    return trimmed;
  }

  if (trimmed.length <= 7) {
    return `${trimmed.slice(0, 4)} ${trimmed.slice(4)}`;
  }

  return `${trimmed.slice(0, 4)} ${trimmed.slice(4, 7)} ${trimmed.slice(7)}`;
};

export function ContactSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    );
    const mailto = `mailto:info@tabainitiative.org?subject=${encodeURIComponent(subject || "Website Inquiry")}&body=${body}`;
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
          <h2 className='text-4xl md:text-5xl font-extrabold text-blue-900'>
            Contact Us
          </h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto mt-4'>
            Reach our team for partnership requests, volunteer onboarding, media
            inquiries, and community support.
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
              <h3 className='text-2xl font-bold text-slate-900 mb-5'>
                Contact Information
              </h3>
              <div className='space-y-5'>
                <div className='flex items-start gap-3'>
                  <MapPin className='h-5 w-5 text-blue-700 mt-1' />
                  <div className='text-slate-700'>
                    15 Olowo street, Off Coker street, Olosha Bus stop, Mushin
                    Lagos Nigeria.
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Phone className='h-5 w-5 text-[#2c5c39] mt-1' />
                  <div className='text-slate-700'>
                    <div>+234 (0) 805 158 3385</div>
                    <div>+234 (0) 817 005 7409</div>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Mail className='h-5 w-5 text-blue-700 mt-1' />
                  <div className='text-slate-700'>
                    <div>info@tababawale.com</div>
                  </div>
                </div>
              </div>

              <div className='mt-6'>
                <h4 className='font-semibold text-slate-900 mb-3'>
                  Social Media
                </h4>
                <div className='flex gap-3'>
                  {[Facebook, Twitter, Instagram, Linkedin].map(
                    (Icon, index) => (
                      <a
                        key={index}
                        href='#'
                        className='w-10 h-10 rounded-lg bg-slate-100 hover:bg-blue-700 hover:text-white transition-colors flex items-center justify-center'
                        aria-label='Social media'
                      >
                        <Icon className='h-4 w-4' />
                      </a>
                    ),
                  )}
                </div>
              </div>

              <div className='mt-7 rounded-xl overflow-hidden border border-slate-200'>
                <iframe
                  title='Google map showing office location'
                  src='https://www.google.com/maps?q=15+Olowo+street,+Off+Coker+street,+Olosha+Bus+stop,+Mushin,+Lagos&output=embed'
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
              <h3 className='text-2xl font-bold text-slate-900 mb-6'>
                Send Us a Message
              </h3>
              <form className='space-y-5' onSubmit={handleSubmit}>
                <div className='grid sm:grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='first-name'
                      className='text-sm font-medium text-slate-700'
                    >
                      First Name
                    </label>
                    <Input
                      id='first-name'
                      placeholder='John'
                      className='mt-2'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='last-name'
                      className='text-sm font-medium text-slate-700'
                    >
                      Last Name
                    </label>
                    <Input
                      id='last-name'
                      placeholder='Doe'
                      className='mt-2'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='text-sm font-medium text-slate-700'
                  >
                    Email Address
                  </label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='you@example.com'
                    className='mt-2'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor='phone'
                    className='text-sm font-medium text-slate-700'
                  >
                    Phone Number
                  </label>
                  <Input
                    id='phone'
                    type='tel'
                    inputMode='numeric'
                    autoComplete='tel'
                    placeholder='0803 123 4567'
                    className='mt-2'
                    value={phone}
                    onChange={(e) =>
                      setPhone(formatNigerianPhone(e.target.value))
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor='subject'
                    className='text-sm font-medium text-slate-700'
                  >
                    Subject
                  </label>
                  <Input
                    id='subject'
                    placeholder='How can we support you?'
                    className='mt-2'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='text-sm font-medium text-slate-700'
                  >
                    Message
                  </label>
                  <Textarea
                    id='message'
                    className='mt-2 min-h-35'
                    placeholder='Write your message here...'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Button
                  type='submit'
                  className='mx-auto flex items-center justify-center gap-2 rounded-full bg-brand-navy px-7 py-2.5 text-base text-white font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-navy/90 focus-visible:ring-2 focus-visible:ring-brand-navy/60 active:scale-95 min-w-30 animate-bounce'
                >
                  <span className='sr-only'>Send Message</span>
                  <span className='block text-base font-bold tracking-wide'>
                    Send
                  </span>
                  <Send className='ml-2 h-5 w-5' />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
