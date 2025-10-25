export default function FooterGov({ t, lang, onToggleLang }) {
  return (
    <footer className="bg-[#0D47A1] text-white mt-10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-semibold">ShramSathi</div>
            <p className="text-blue-100 mt-2 text-xs sm:text-sm max-w-xs">{t.footer.disclaimer}</p>
          </div>
          <div>
            <div className="font-semibold">{t.footer.languages}</div>
            <div className="mt-2 flex items-center gap-2">
              <button onClick={onToggleLang} className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300">
                {lang === "en" ? "हिंदी" : "EN"}
              </button>
              <span className="text-blue-100 text-xs">{lang === "en" ? "Switch language" : "भाषा बदलें"}</span>
            </div>
          </div>
          <div>
            <div className="font-semibold">Links</div>
            <ul className="mt-2 space-y-2 text-blue-100">
              <li><a href="#help" className="hover:text-white">{t.footer.grievance}</a></li>
              <li><a href="#rti" className="hover:text-white">{t.footer.rti}</a></li>
              <li><a href="#privacy" className="hover:text-white">{t.footer.privacy}</a></li>
              <li><a href="#terms" className="hover:text-white">{t.footer.terms}</a></li>
              <li><a href="#accessibility" className="hover:text-white">{t.footer.accessibility}</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">{t.nav.how}</div>
            <ul className="mt-2 space-y-2 text-blue-100">
              <li><a href="#about" className="hover:text-white">{t.footer.about}</a></li>
              <li><a href="#contact" className="hover:text-white">{t.footer.contact}</a></li>
              <li><a href="#helpline" className="hover:text-white">{t.footer.helpline}: 1800-000-000</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-4 text-xs text-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} ShramSathi. {t.footer.rights}</p>
          <div className="flex gap-3">
            <a href="#privacy" className="hover:text-white">{t.footer.privacy}</a>
            <a href="#terms" className="hover:text-white">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
