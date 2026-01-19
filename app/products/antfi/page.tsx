'use client';

import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function AntfiPage() {
  const features = [
    'Cross-border financial solutions',
    'Simplified financial management',
    'Enhanced efficiency',
    'Secure transactions',
    'Competitive rates',
    'Dedicated support',
  ];

  const benefits = [
    {
      title: 'Global Reach',
      description: 'Connect with businesses and individuals across borders with ease.',
    },
    {
      title: 'Simplified Process',
      description: 'Easy-to-use platform making financial management simpler and more efficient.',
    },
    {
      title: 'Better Rates',
      description: 'Competitive pricing with no hidden fees or surprises.',
    },
    {
      title: 'Expert Support',
      description: '24/7 support team ready to assist you with any questions.',
    },
  ];

  const targetUsers = [
    'Global SMEs managing payables and receivables across regions',
    'Digital banks and EMIs needing resilient cross-border rails',
    'Marketplaces and gig platforms orchestrating fast payouts',
    'Finance teams demanding transparent FX, fees, and reconciliation',
  ];

  const testimonial = {
    quote:
      'Antfi helped us settle payouts in hours instead of days. FX costs dropped and customers noticed the speed.',
    name: 'Miguel R.',
    role: 'VP Finance',
    company: 'Pan-Regional Marketplace',
  };

  const heroOverlay =
    'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22), transparent 35%),' +
    'radial-gradient(circle at 80% 0%, rgba(92,202,237,0.18), transparent 28%),' +
    'radial-gradient(circle at 85% 80%, rgba(255,255,255,0.12), transparent 30%)';

  const heroStats = [
    { label: 'Currencies supported', value: '40+', note: 'FX routes and corridors' },
    { label: 'Avg FX savings', value: 'Up to 18%', note: 'vs. typical bank spreads' },
    { label: 'Settlement speed', value: 'T+0 to T+1', note: 'predictable payouts' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #1B7BE5 0%, #0f4aa8 45%, #0a2f70 100%)' }}
        />
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: heroOverlay }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] bg-white/10 rounded-full border border-white/20">
                Products
              </span>
              <h1 className="text-4xl md:text-5xl font-bold">Antfi</h1>
              <p className="text-lg text-white/90 leading-relaxed">
                Cross-border finance without the friction. Transparent FX, predictable settlement, and support teams that care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-primary rounded-lg font-semibold shadow-lg shadow-black/10 hover:-translate-y-0.5 transition-transform text-center"
                >
                  Talk to an Expert
                </Link>
                <Link
                  href="#target-users"
                  className="px-6 py-3 border-2 border-white/70 text-white rounded-lg hover:bg-white/10 transition-colors text-center"
                >
                  See who it is for
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  {
                    title: 'Compliance-first',
                    copy: 'KYC, AML, and screening embedded with clear audit logs.',
                  },
                  {
                    title: 'Clarity in pricing',
                    copy: 'No hidden spreads. Live quotes and settlement visibility.',
                  },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-white/10 border border-white/15">
                    <p className="text-sm font-semibold text-white/90">{item.title}</p>
                    <p className="text-sm text-white/80 mt-1 leading-relaxed">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-10 -right-12 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8 shadow-xl">
                <p className="text-sm uppercase tracking-wide text-white/70 mb-4">Live snapshot</p>
                <div className="space-y-4">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between border-b border-white/10 pb-3 last:border-none last:pb-0"
                    >
                      <div>
                        <p className="text-sm text-white/80 font-semibold">{stat.label}</p>
                        <p className="text-xs text-white/70">{stat.note}</p>
                      </div>
                      <p className="text-xl font-semibold">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section id="target-users" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Target Users</h2>
            <p className="text-lg text-gray-700">
              Designed for teams that move money across borders and cannot afford uncertainty.
            </p>
          </div>
          <div className="space-y-4">
            {targetUsers.map((user) => (
              <div key={user} className="flex items-start gap-3">
                <span className="mt-2 h-3 w-3 rounded-full bg-primary" aria-hidden />
                <p className="text-gray-800">{user}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-lg shadow-sm my-12">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircleIcon className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="text-lg font-medium text-gray-800">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Choose Antfi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg border border-primary/10 hover:border-primary hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl border border-primary/10 bg-linear-to-br from-primary/5 to-[#5CCAED1A] p-10 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">What our clients say</p>
          <blockquote className="text-2xl md:text-3xl leading-relaxed text-gray-900 italic">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="text-lg font-semibold text-primary">{testimonial.name}</p>
            <p className="text-gray-700">{testimonial.role} | {testimonial.company}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Start your cross-border growth.</h2>
          <p className="text-lg opacity-90 mb-8">Launch in new markets with predictable settlement and support.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold"
          >
            Contact Our Team
          </Link>
        </div>
      </section>

      {/* Back to Home */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="text-primary hover:text-primary/80 font-medium">
          ← Back to Home
        </Link>
      </section>
    </main>
  );
}
