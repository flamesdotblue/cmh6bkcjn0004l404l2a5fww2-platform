import { Wrench, Plug, Scissors, Sparkles, PenTool, BookOpen, Hammer, Car, ChefHat, Leaf, Star } from "lucide-react";

const categories = [
  { key: "plumber", icon: Wrench, en: "Plumber", hi: "प्लंबर" },
  { key: "electrician", icon: Plug, en: "Electrician", hi: "इलेक्ट्रीशियन" },
  { key: "tailor", icon: Scissors, en: "Tailor", hi: "दर्जी" },
  { key: "beautician", icon: Sparkles, en: "Beautician", hi: "ब्यूटीशियन" },
  { key: "mehendi", icon: PenTool, en: "Mehendi Artist", hi: "मेहंदी आर्टिस्ट" },
  { key: "tutor", icon: BookOpen, en: "Tutor", hi: "शिक्षक" },
  { key: "carpenter", icon: Hammer, en: "Carpenter", hi: "बढ़ई" },
  { key: "mason", icon: Hammer, en: "Mason", hi: "राजमिस्त्री" },
  { key: "driver", icon: Car, en: "Driver", hi: "ड्राइवर" },
  { key: "cook", icon: ChefHat, en: "Cook", hi: "रसोइया" },
  { key: "farm", icon: Leaf, en: "Farm Help", hi: "खेती सहायक" },
];

export default function CategoriesGrid({ t, lang }) {
  return (
    <div id="categories" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
      {categories.map((c) => (
        <button
          key={c.key}
          className="card group flex items-center gap-3 p-3 sm:p-4 rounded-2xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-200 hover:shadow cursor-pointer"
          aria-label={(lang === "hi" ? c.hi : c.en) + " category"}
        >
          <c.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0D47A1]" aria-hidden />
          <div className="flex-1 text-left">
            <div className="text-sm sm:text-base font-medium">{lang === "hi" ? c.hi : c.en}</div>
            <div className="text-xs text-gray-500 inline-flex items-center gap-1"><Star className="w-3 h-3 text-amber-500" aria-hidden /> 4.6</div>
          </div>
          <span className="text-xs text-[#0D47A1] border border-[#0D47A1]/30 bg-blue-50 px-2 py-1 rounded-lg">{lang === "hi" ? "बुक करें" : "Book"}</span>
        </button>
      ))}
    </div>
  );
}
