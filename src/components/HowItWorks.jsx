import { ClipboardList, Bell, TrendingUp } from "lucide-react";

export default function HowItWorks({ t }) {
  const steps = [
    { icon: ClipboardList, title: t.how.step1Title, desc: t.how.step1Desc },
    { icon: Bell, title: t.how.step2Title, desc: t.how.step2Desc },
    { icon: TrendingUp, title: t.how.step3Title, desc: t.how.step3Desc },
  ];
  return (
    <div id="how" className="grid md:grid-cols-3 gap-4 sm:gap-6">
      {steps.map((s, i) => (
        <div key={i} className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0D47A1]/10 text-[#0D47A1] flex items-center justify-center">
              <s.icon className="w-5 h-5" aria-hidden />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-[#0D47A1]">{s.title}</h3>
          </div>
          <p className="mt-3 text-sm text-gray-700 leading-6">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
