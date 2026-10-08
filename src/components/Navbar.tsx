import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Flame } from 'lucide-react';

interface NavbarProps {
  onOpenOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Demo Notification Strip */}
      <div className="bg-amber-950/80 border-b border-amber-500/30 text-amber-200 text-xs py-1.5 px-4 text-center flex items-center justify-center gap-2 font-medium">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span>نموذج تجريبي (Demo) لعرض التصميم فقط • غير رسمي • الأسعار والأرقام المعروضة تجريبية</span>
      </div>

      <header className="sticky top-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          {/* Brand Logo & Tag */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-lg shadow-amber-900/40 border border-amber-500/30">
              <Flame className="w-6 h-6 text-amber-100" />
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                <span>عَشْري</span>
                <span className="text-[10px] text-amber-400 font-semibold px-1.5 py-0.5 rounded bg-amber-950 border border-amber-800/60">
                  تجريبي
                </span>
              </div>
              <div className="text-xs text-stone-400 font-medium">
                كبدة • مخ • فليه
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-300">
            <button
              onClick={() => scrollTo('hero')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollTo('menu')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              المنيو
            </button>
            <button
              onClick={() => scrollTo('offers')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              العروض
            </button>
            <button
              onClick={() => scrollTo('location')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              الموقع
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              التواصل
            </button>
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-200 px-3 py-2 rounded-lg border border-stone-800 hover:border-stone-700 transition"
              title="أرقام تجريبية"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>01000000000</span>
            </button>
            <button
              onClick={onOpenOrder}
              className="bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold px-4 py-2 rounded-lg text-sm transition-all shadow-md shadow-amber-950 hover:shadow-amber-800/30 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>اطلب الآن</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-800 bg-stone-950 px-4 pt-3 pb-5 space-y-3">
            <div className="flex flex-col space-y-2 text-base font-semibold text-stone-300">
              <button
                onClick={() => scrollTo('hero')}
                className="text-right py-2 px-3 rounded hover:bg-stone-900 hover:text-amber-400"
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollTo('menu')}
                className="text-right py-2 px-3 rounded hover:bg-stone-900 hover:text-amber-400"
              >
                المنيو
              </button>
              <button
                onClick={() => scrollTo('offers')}
                className="text-right py-2 px-3 rounded hover:bg-stone-900 hover:text-amber-400"
              >
                العروض
              </button>
              <button
                onClick={() => scrollTo('location')}
                className="text-right py-2 px-3 rounded hover:bg-stone-900 hover:text-amber-400"
              >
                الموقع (مدينة الشروق)
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="text-right py-2 px-3 rounded hover:bg-stone-900 hover:text-amber-400"
              >
                التواصل والطلب
              </button>
            </div>
            <div className="pt-2 border-t border-stone-900 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold py-2.5 rounded-lg text-sm text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>اطلب الآن (نموذج تجريبي)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
