import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Copy, CreditCard, Landmark, LoaderCircle, ShieldCheck, Smartphone, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const PAYSTACK_URL = import.meta.env.VITE_PAYSTACK_DONATE_URL || 'https://paystack.com/';
const FLUTTERWAVE_URL = import.meta.env.VITE_FLUTTERWAVE_DONATE_URL || 'https://flutterwave.com/pay';
const WHATSAPP_NUMBER = import.meta.env.VITE_DONATION_WHATSAPP || '2348130000000';

const bankDetails = {
  accountName: 'Titus and Abiola Babawale Initiative',
  accountNumber: '0123456789',
  bankName: 'First Bank of Nigeria',
  branch: 'Victoria Island, Lagos',
};

type Channel = 'paystack' | 'flutterwave' | 'bank-transfer';

export function DonateSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('10000');
  const [channel, setChannel] = useState<Channel>('paystack');
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState('');

  const [reference] = useState(() => `TABI-${new Date().getFullYear()}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`);

  const parsedAmount = Number(amount);
  const isValid = name.trim().length > 2 && email.includes('@') && Number.isFinite(parsedAmount) && parsedAmount > 0;

  const copyAccountDetails = async () => {
    const text = `Account Name: ${bankDetails.accountName}\nAccount Number: ${bankDetails.accountNumber}\nBank Name: ${bankDetails.bankName}\nReference: ${reference}`;
    await navigator.clipboard.writeText(text);
    setNotice('Account details copied. You can paste it in your transfer app.');
  };

  const handleCheckout = (event: FormEvent) => {
    event.preventDefault();
    if (!isValid) {
      setNotice('Please fill in a valid full name, email, and amount.');
      return;
    }

    setSubmitting(true);
    setNotice('');

    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedAmount = encodeURIComponent(amount);
    const encodedRef = encodeURIComponent(reference);

    if (channel === 'paystack') {
      window.location.href = `${PAYSTACK_URL}?amount=${encodedAmount}&email=${encodedEmail}&reference=${encodedRef}&name=${encodedName}`;
      return;
    }

    if (channel === 'flutterwave') {
      window.location.href = `${FLUTTERWAVE_URL}?amount=${encodedAmount}&email=${encodedEmail}&tx_ref=${encodedRef}&customer_name=${encodedName}`;
      return;
    }

    const message = encodeURIComponent(
      `Hello TABI, I have made a bank transfer donation.\nName: ${name}\nEmail: ${email}\nAmount: NGN ${amount}\nReference: ${reference}\nPlease confirm receipt.`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
    setSubmitting(false);
    setNotice('Bank transfer selected. Please complete transfer and send proof via WhatsApp.');
  };

  return (
    <section id='donate' className='bg-white py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-14 text-center'
        >
          <h2 className='text-4xl font-extrabold text-blue-900 md:text-5xl'>Donate Securely</h2>
          <p className='mx-auto mt-4 max-w-3xl text-lg text-slate-600'>
            Support life-changing community projects with secure online payments or direct transfer options.
          </p>
        </motion.div>

        <div className='mb-8 grid gap-7 lg:grid-cols-3'>
          {[
            { title: 'Card Payment', icon: CreditCard, detail: 'Pay instantly with your card via secure gateway.' },
            { title: 'Transfer', icon: Landmark, detail: 'Use our official account details and unique reference.' },
            { title: 'Recurring Giving', icon: Wallet, detail: 'Sustain long-term projects with monthly support.' },
          ].map((channelCard) => (
            <Card key={channelCard.title} className='h-full border-slate-200 p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50'>
                <channelCard.icon className='h-6 w-6 text-blue-700' />
              </div>
              <h3 className='mb-2 text-lg font-bold text-slate-900'>{channelCard.title}</h3>
              <p className='text-sm text-slate-600'>{channelCard.detail}</p>
            </Card>
          ))}
        </div>

        <div className='grid gap-8 lg:grid-cols-2'>
          <Card className='border-blue-200 bg-blue-50/60 p-6 md:p-8'>
            <div className='mb-5 flex items-center gap-2'>
              <ShieldCheck className='h-6 w-6 text-blue-700' />
              <h3 className='text-2xl font-bold text-slate-900'>Donation Checkout</h3>
            </div>
            <form onSubmit={handleCheckout} className='space-y-4'>
              <div>
                <Label htmlFor='donor-name'>Full Name</Label>
                <Input id='donor-name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your full name' className='mt-2 bg-white' />
              </div>
              <div>
                <Label htmlFor='donor-email'>Email</Label>
                <Input id='donor-email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='you@example.com' className='mt-2 bg-white' />
              </div>
              <div>
                <Label htmlFor='donation-amount'>Amount (NGN)</Label>
                <Input
                  id='donation-amount'
                  type='number'
                  min='100'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className='mt-2 bg-white'
                />
              </div>

              <div>
                <p className='mb-2 text-sm font-medium text-slate-700'>Payment Method</p>
                <div className='grid gap-2 sm:grid-cols-3'>
                  <button
                    type='button'
                    onClick={() => setChannel('paystack')}
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold ${
                      channel === 'paystack' ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <Smartphone className='mx-auto mb-1 h-4 w-4' />
                    Paystack
                  </button>
                  <button
                    type='button'
                    onClick={() => setChannel('flutterwave')}
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold ${
                      channel === 'flutterwave' ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <CreditCard className='mx-auto mb-1 h-4 w-4' />
                    Flutterwave
                  </button>
                  <button
                    type='button'
                    onClick={() => setChannel('bank-transfer')}
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold ${
                      channel === 'bank-transfer' ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <Landmark className='mx-auto mb-1 h-4 w-4' />
                    Transfer
                  </button>
                </div>
              </div>

              <div className='rounded-lg border border-blue-100 bg-white p-3 text-sm text-slate-700'>
                <p className='font-semibold'>Reference: {reference}</p>
                <p className='mt-1'>Use this reference for payment and confirmations.</p>
              </div>

              <Button type='submit' disabled={!isValid || submitting} className='w-full bg-blue-700 hover:bg-blue-800'>
                {submitting ? (
                  <>
                    <LoaderCircle className='mr-2 h-4 w-4 animate-spin' />
                    Processing...
                  </>
                ) : (
                  'Proceed to Payment'
                )}
              </Button>
            </form>

            {notice && <p className='mt-4 text-sm text-blue-700'>{notice}</p>}
          </Card>

          <Card className='border-slate-200 p-6 md:p-8'>
            <h3 className='mb-4 text-2xl font-bold text-slate-900'>Bank Transfer Details</h3>
            <div className='space-y-3'>
              {[
                ['Account Name', bankDetails.accountName],
                ['Account Number', bankDetails.accountNumber],
                ['Bank Name', bankDetails.bankName],
                ['Branch', bankDetails.branch],
              ].map(([key, value]) => (
                <div key={key} className='flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3'>
                  <span className='text-sm font-semibold text-slate-700'>{key}</span>
                  <span className='text-sm text-slate-900 text-right'>{value}</span>
                </div>
              ))}
            </div>
            <div className='mt-5 flex flex-wrap gap-3'>
              <Button onClick={copyAccountDetails} className='bg-[#2c5c39] hover:bg-[#234a2e]'>
                <Copy className='mr-2 h-4 w-4' />
                Copy Account Details
              </Button>
              <Button asChild variant='outline'>
                <a href={`mailto:donations@tabainitiative.org?subject=Donation%20Receipt%20Request&body=Name:%20${encodeURIComponent(name || 'N/A')}%0AEmail:%20${encodeURIComponent(email || 'N/A')}%0AAmount:%20${encodeURIComponent(amount)}%0AReference:%20${encodeURIComponent(reference)}`}>
                  Request Receipt
                </a>
              </Button>
            </div>

            <ul className='mt-6 space-y-2'>
              {[
                'All donations receive traceable reference IDs.',
                'Receipts can be requested by email immediately after payment.',
                'Financial reports are published in the Impact Reports page.',
              ].map((line) => (
                <li key={line} className='flex items-start gap-2 text-sm text-slate-700'>
                  <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-[#2c5c39]' />
                  {line}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
