"use client";

import Link from "next/link";

export default function CyberSecurityPage() {
  const focuses = [
    { title: "IT Infrastructure Audit", copy: "Assess gaps, harden configs, and prioritize remediation by risk." },
    { title: "Penetration Testing", copy: "Offensive testing for apps, networks, and cloud with actionable fixes." },
    { title: "Network Information Security", copy: "Zero‑trust segmentation, SOC integrations, and continuous validation." },
  ];

  const caseStudies = [
    { org: "Digital Bank", impact: "Critical auth flaw resolved; 0 P1 incidents post‑hardening in 6 months." },
    { org: "Logistics Platform", impact: "Red‑team exercise drove IAM redesign and reduced lateral movement paths." },
    { org: "Government Agency", impact: "24/7 monitoring playbooks cut incident response time by 60%." },
  ];

  const benefits = [
    "Purple‑team approach: attackers’ mindset with defenders’ rigor",
    "Clear, prioritized remediation with code/config samples",
    "Compliance‑aware (PCI DSS, ISO 27001, SOC 2, local regs)",
    "Knowledge transfer sessions for your teams",
  ];

  const heroOverlay =
    "radial-gradient(circle at 5% 20%, rgba(255,255,255,0.22), transparent 35%)," +
    "radial-gradient(circle at 95% 20%, rgba(92,202,237,0.18), transparent 28%)," +
    "radial-gradient(circle at 50% 90%, rgba(255,255,255,0.12), transparent 30%)";

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1B7BE5 0%, #104ea9 45%, #0a2f70 100%)" }} />
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: heroOverlay }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] bg-white/10 rounded-full border border-white/20">Services</span>
            <h1 className="text-4xl md:text-5xl font-bold">Cyber Security</h1>
            <p className="text-lg text-white/90">Audit, test, and harden your environment with a partner focused on outcomes, not paperwork.</p>
            <div className="flex gap-4">
              <Link href="#focus" className="px-6 py-3 bg-white text-primary rounded-lg font-semibold shadow-md">Our Focus</Link>
              <Link href="/contact" className="px-6 py-3 border-2 border-white/70 text-white rounded-lg hover:bg-white/10">Book a Security Review</Link>
            </div>
          </div>
        </div>
      </section>

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

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary rounded-lg p-10 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Harden your posture. Reduce risk.</h3>
          <p className="opacity-90 mb-6">We’ll meet you where you are—then raise the bar.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-primary/10">Request Assessment</Link>
        </div>
      </section>
    </main>
  );
}
