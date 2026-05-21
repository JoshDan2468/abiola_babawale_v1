import { CheckCircle, Users, Clock, Globe } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { VolunteerForm } from "@/components/volunteer/VolunteerForm";

const BENEFITS = [
  { icon: Users, text: "Work with an experienced, passionate team" },
  { icon: Globe, text: "Make measurable impact in real communities" },
  { icon: Clock, text: "Flexible commitment — from a few hours to full-time" },
  {
    icon: CheckCircle,
    text: "Get a certificate of volunteering on completion",
  },
];

export function VolunteerPage() {
  return (
    <>
      <PageHero
        title='Volunteer With Us'
        subtitle='Your time and skills can change lives. Join our community of dedicated volunteers working to create lasting impact across Nigeria.'
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Volunteer" }]}
      />

      <section className='bg-white py-20'>
        <div className='container'>
          <div className='grid gap-16 lg:grid-cols-[1fr_2fr]'>
            {/* Left: Why volunteer */}
            <AnimatedSection direction='right' className='space-y-8'>
              <div>
                <p className='text-sm font-bold uppercase tracking-widest text-brand-forest mb-3'>
                  Why Volunteer?
                </p>
                <h2 className='font-display text-3xl font-bold text-brand-navy'>
                  Join a Community of Changemakers
                </h2>
                <p className='mt-4 text-slate-500 leading-relaxed'>
                  Volunteering with TABA Initiative means becoming part of
                  something larger than yourself. Every hour you give creates
                  ripple effects across families and communities.
                </p>
              </div>

              <ul className='space-y-4' role='list'>
                {BENEFITS.map((b) => {
                  const Icon = b.icon;
                  return (
                    <li key={b.text} className='flex items-start gap-3'>
                      <div className='shrink-0 rounded-lg bg-brand-forest-pale p-2'>
                        <Icon
                          className='h-5 w-5 text-brand-forest'
                          aria-hidden='true'
                        />
                      </div>
                      <p className='text-slate-700 font-medium'>{b.text}</p>
                    </li>
                  );
                })}
              </ul>

              <div className='rounded-2xl bg-brand-navy/5 border border-brand-navy/10 p-6'>
                <p className='text-sm text-slate-500'>
                  <strong className='text-brand-navy'>Questions?</strong> Email
                  us at{" "}
                  <a
                    href='mailto:volunteer@tabainitiative.org'
                    className='text-brand-sky underline underline-offset-2'
                  >
                    volunteer@tabainitiative.org
                  </a>
                </p>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection delay={0.1}>
              <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-lg sm:p-10'>
                <VolunteerForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
