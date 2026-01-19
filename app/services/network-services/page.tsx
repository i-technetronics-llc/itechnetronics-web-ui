"use client";

import Link from "next/link";

export default function NetworkServicesPage() {
  const focuses = [
    { title: "Wide Area Connectivity", copy: "VSAT, microwave radio, and fiber to extend reliable reach." },
    { title: "SD‑WAN & Monitoring", copy: "Policy‑based routing, resilience, and proactive observability." },
    { title: "Secure Core", copy: "Segmentation, IPS/IDS, and hardened edge for always‑on ops." },
  ];

  const caseStudies = [
    { org: "Remote Mining Ops", impact: "99.3% link availability across 12 sites using hybrid VSAT+microwave." },
    { org: "Retail Chain", impact: "Failover SD‑WAN cut downtime incidents by 78% and saved MPLS cost." },
    { org: "Campus Network", impact: "Telemetry‑driven monitoring reduced MTTR from hours to minutes." },
  ];

  const benefits = [
    "Design + build + manage under one accountable team",
    "Carrier‑neutral approach: we pick what works best for you",
    "Runbooks, training, and 24/7 NOC options",
    "Security controls aligned to your compliance needs",
  ];

  const heroOverlay =
    "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.22), transparent 35%)," +
    "radial-gradient(circle at 90% 30%, rgba(92,202,237,0.18), transparent 28%)," +
    "radial-gradient(circle at 70% 100%, rgba(255,255,255,0.12), transparent 30%)";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1B7BE5 0%, #125ac0 45%, #0b3a82 100%)" }} />
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: heroOverlay }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] bg-white/10 rounded-full border border-white/20">Services</span>
            <h1 className="text-4xl md:text-5xl font-bold">Network Services</h1>
            <p className="text-lg text-white/90">Design, deploy, and operate high‑availability networks across regions and challenging terrains.</p>
            <div className="flex gap-4">
              <Link href="#focus" className="px-6 py-3 bg-white text-primary rounded-lg font-semibold shadow-md">Our Focus</Link>
              <Link href="/contact" className="px-6 py-3 border-2 border-white/70 text-white rounded-lg hover:bg-white/10">Talk to Architects</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Focus */}
      <section id="focus" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-primary mb-8">Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focuses.map((f) => (
            <div key={f.title} className="rounded-2xl border border-primary/10 p-6 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-primary mb-2">{f.title}</h3>
              <p className="text-gray-700">{f.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-linear-to-br from-primary/5 to-[#5CCAED1A] border border-primary/10 p-10 md:p-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((c) => (
              <div key={c.org} className="bg-white rounded-xl p-6 border border-primary/10">
                <p className="text-sm text-gray-500">{c.org}</p>
                <p className="mt-2 text-gray-900">{c.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-primary mb-8">Benefits from Us</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span className="mt-2 h-3 w-3 rounded-full bg-primary" aria-hidden />
              <p className="text-gray-800">{b}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary rounded-lg p-10 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Keep your network resilient and observable.</h3>
          <p className="opacity-90 mb-6">We’ll design for uptime and scale, then operate it with you.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-primary/10">Engage Our Team</Link>
        </div>
      </section>
    </main>
  );
}
