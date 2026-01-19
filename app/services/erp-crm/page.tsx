"use client";

import Link from "next/link";

export default function ErpCrmPage() {
  const focuses = [
    {
      title: "Unified Operations",
      copy: "Tie finance, sales, and operations together for real-time visibility and fewer manual handoffs.",
    },
    {
      title: "Data Integrity",
      copy: "Single source of truth across CRM and ERP with clean, auditable data flows.",
    },
    {
      title: "Faster Time-to-Value",
      copy: "Blueprints and accelerators reduce implementation risk and shorten go‑live timelines.",
    },
  ];

  const caseStudies = [
    {
      org: "Regional Distributor",
      impact: "Order‑to‑cash cycle reduced by 28% with ERP + CRM automation.",
    },
    {
      org: "Retail Co‑op",
      impact: "360° customer view increased repeat purchases by 19% in 3 months.",
    },
    {
      org: "Services Group",
      impact: "Proposal-to-invoice mapping cut revenue leakage and sped billing by 2 weeks.",
    },
  ];

  const benefits = [
    "Industry-fit templates for finance, inventory, sales, and support",
    "Migration playbooks for legacy CRMs/ERPs",
    "Training, change enablement, and post‑go‑live hypercare",
    "Dashboards and KPIs aligned to leadership goals",
  ];

  const heroOverlay =
    "radial-gradient(circle at 15% 10%, rgba(255,255,255,0.22), transparent 35%)," +
    "radial-gradient(circle at 85% 15%, rgba(92,202,237,0.18), transparent 28%)," +
    "radial-gradient(circle at 50% 90%, rgba(255,255,255,0.12), transparent 30%)";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1B7BE5 0%, #1361c8 40%, #0a2f70 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: heroOverlay }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] bg-white/10 rounded-full border border-white/20">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">ERP / CRM</h1>
            <p className="text-lg text-white/90">
              Enterprise resource planning and customer relationship management—implemented with speed,
              adoption, and measurable outcomes.
            </p>
            <div className="flex gap-4">
              <Link href="#focus" className="px-6 py-3 bg-white text-primary rounded-lg font-semibold shadow-md text-center">
                Our Focus
              </Link>
              <Link href="/contact" className="px-6 py-3 border-2 border-white/70 text-white rounded-lg hover:bg-white/10 text-center">
                Talk to Experts
              </Link>
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
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to modernize your operations?</h3>
          <p className="opacity-90 mb-6">Let’s align tools to outcomes and ship value fast.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-primary/10">
            Start the Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
