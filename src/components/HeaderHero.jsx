import { Shield, CheckCircle2 } from "lucide-react";

export default function HeaderHero({ t, lang, onToggleLang }) {
  return (
    <header className="relative overflow-hidden">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white px-3 py-2 rounded-md shadow ring-2 ring-[#0D47A1]">Skip to content</a>
      <nav className="w-full border-b border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div aria-hidden className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6D00] via-white to-[#2E7D32] border border-gray-200" />
            <span className="font-semibold text-[#0D47A1] text-base sm:text-lg" aria-label="ShramSathi">ShramSathi</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm" role="navigation" aria-label="Primary">
            <a href="#" className="hover:text-[#0D47A1]">{t.nav.home}</a>
            <a href="#categories" className="hover:text-[#0D47A1]">{t.nav.categories}</a>
            <a href="#how" className="hover:text-[#0D47A1]">{t.nav.how}</a>
            <a href="#help" className="hover:text-[#0D47A1]">{t.nav.help}</a>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onToggleLang} aria-label={lang === "en" ? "Switch to Hindi" : "Switch to English"} className="px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-200">
              {lang === "en" ? "हिंदी" : "EN"}
            </button>
            <a href="#register" className="px-4 py-2 rounded-xl text-white bg-[#FF6D00] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-orange-300 text-sm">
              {t.registerWorker}
            </a>
          </div>
        </div>
      </nav>

      <div className="relative bg-gradient-to-b from-white to-[#ECEFF1]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-16 left-0 right-0 h-40 bg-[conic-gradient(at_bottom_left,_#FF6D00,_white_35%,_#2E7D32_70%)] opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid md:grid-cols-2 items-center gap-6 sm:gap-10">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#0D47A1]">
                ShramSathi — {t.tagline}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#374151]">{t.findTrusted}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#register" className="rounded-xl px-5 py-3 text-white bg-[#FF6D00] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-orange-300 text-sm">
                  {t.registerWorker}
                </a>
                <a href="#categories" className="rounded-xl px-5 py-3 text-[#0D47A1] border border-[#0D47A1] bg-white hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-200 text-sm">
                  {t.findWorkers}
                </a>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4" role="region" aria-label="Platform statistics">
                <StatCard label={t.stats.workers} value="1,24,500+" />
                <StatCard label={t.stats.jobs} value="8,90,000+" />
                <StatCard label={t.stats.districts} value="720+" />
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-[#374151]" aria-label={t.trustTitle}>
                <Shield className="w-5 h-5 text-[#0D47A1]" aria-hidden />
                <span className="font-medium">{t.trustTitle}</span>
                <span className="inline-flex items-center gap-1 text-green-700">
                  <CheckCircle2 className="w-4 h-4" aria-hidden /> ID/KYC
                </span>
                <span className="inline-flex items-center gap-1 text-green-700">
                  <CheckCircle2 className="w-4 h-4" aria-hidden /> Ratings
                </span>
              </div>
            </div>
            <div className="md:justify-self-end">
              <div className="relative w-full max-w-md mx-auto md:mx-0">
                <div className="aspect-[4/3] rounded-2xl border border-gray-200 bg-white shadow-sm p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6D00]/80 to-[#2E7D32]/80 flex items-center justify-center text-white text-2xl font-bold">₹</div>
                    <p className="mt-3 text-sm text-gray-600">Simple, secure, and dignified work for every skill</p>
                  </div>
                </div>
                <div className="absolute -z-10 -top-6 -right-6 w-20 h-20 rounded-xl bg-[#FF6D00]/20 blur-2xl" aria-hidden />
                <div className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 rounded-xl bg-[#0D47A1]/10 blur-2xl" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm" role="group" aria-label={label}>
      <div className="text-lg sm:text-xl font-semibold text-[#0D47A1]">{value}</div>
      <div className="text-xs sm:text-sm text-gray-600">{label}</div>
    </div>
  );
}
