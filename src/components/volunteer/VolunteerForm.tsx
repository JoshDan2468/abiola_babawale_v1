import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  interests: string;
  availability: string;
};

const INITIAL_STATE: FormState = {
  fullName: '',
  email: '',
  phone: '',
  interests: '',
  availability: '',
};

export function VolunteerForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div>
        <h3 className="text-2xl font-bold text-brand-navy">Volunteer Application</h3>
        <p className="mt-2 text-sm text-slate-500">
          Complete this form and our team will contact you with the next steps.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="volunteer-full-name">Full name</Label>
        <Input
          id="volunteer-full-name"
          value={form.fullName}
          onChange={(e) => update('fullName', e.target.value)}
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="volunteer-email">Email address</Label>
          <Input
            id="volunteer-email"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="volunteer-phone">Phone number</Label>
          <Input
            id="volunteer-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="volunteer-interests">Areas of interest</Label>
        <Textarea
          id="volunteer-interests"
          rows={3}
          placeholder="Teaching, media, outreach, administration..."
          value={form.interests}
          onChange={(e) => update('interests', e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="volunteer-availability">Availability</Label>
        <Textarea
          id="volunteer-availability"
          rows={3}
          placeholder="Days and times you are available"
          value={form.availability}
          onChange={(e) => update('availability', e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Submit Application
      </Button>

      {submitted ? (
        <p className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700" role="status">
          Thanks for applying. We will reach out to you shortly.
        </p>
      ) : null}
    </form>
  );
}
