import React from 'react';
import { ArrowLeft, MapPin, Sparkles, Utensils } from 'lucide-react';
import heroImg from '../assets/images/hero_ashry_food_1791484592382.jpg';

interface HeroProps {
  onOpenOrder: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder, onExploreMenu }) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:py-20 overflow-hidden bg-stone-950">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/25 via-stone-950 to-stone-950 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Location & Specialty Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <span className="flex items-center gap-1 bg-amber-950/60 border border-amber-800/60 px-2.5 py-1 rounded-md">
                <MapPin className="w-3.5 h-3.5" />
                <span>مدينة الشروق • القاهرة</span>
              </span>
              <span className="text-stone-500">|</span>
              <span className="text-stone-400">طعم الشارع المصري الأصيل</span>
            </div>

            {/* Main Brand Title & Tagline */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none">
                عَشْري
              </h1>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                كبدة • مخ • فليه
              </div>
            </div>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-xl">
              تخصصنا في أدق تفاصيل الأكلة المصرية الشعبية على أصولها. كبدة إسكندراني بتتبيلة التوم والخل والليمون، مخ بانيه كرسبي ذهبي، وشرائح لحم فليه بتلو طري على الجريل الساخن.
            </p>

            {/* Specialty highlights */}
            <div className="grid grid-cols-3 gap-3 pt-1 pb-2 max-w-lg text-right">
              <div className="bg-stone-900/80 border border-stone-800 rounded-lg p-3">
                <div className="text-amber-400 font-bold text-sm mb-0.5">كبدة بلدي</div>
                <div className="text-stone-400 text-xs">إسكندراني وبالردة</div>
              </div>
              <div className="bg-stone-900/80 border border-stone-800 rounded-lg p-3">
                <div className="text-amber-400 font-bold text-sm mb-0.5">مخ بانيه</div>
                <div className="text-stone-400 text-xs">مقرمش بخلطة خاصة</div>
              </div>
              <div className="bg-stone-900/80 border border-stone-800 rounded-lg p-3">
                <div className="text-amber-400 font-bold text-sm mb-0.5">فليه جريل</div>
                <div className="text-stone-400 text-xs">شرائح بتلو ناعمة</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenOrder}
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-base px-8 py-3.5 rounded-xl shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 transition-all active:scale-95 cursor-pointer flex items-center gap-2.5"
              >
                <span>اطلب الآن</span>
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreMenu}
                className="bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-white font-bold text-base px-6 py-3.5 rounded-xl border border-stone-700 transition cursor-pointer flex items-center gap-2"
              >
                <Utensils className="w-4 h-4 text-amber-400" />
                <span>قائمة الطعام (المنيو)</span>
              </button>
            </div>

            <div className="text-xs text-stone-500 pt-1 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>جاهزون للطلبات والتوصيل داخل مدينة الشروق • تجربة أكل شعبي مصري نظيفة وممتازة</span>
            </div>

          </div>

          {/* Hero Visual Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-600/30 to-amber-900/20 rounded-2xl blur-xl opacity-75" />
              
              <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl">
                <img
                  src={heroImg}
                  alt="ساندوتشات كبدة ومخ عشري في مدينة الشروق"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />

                {/* Overlay bottom caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent p-4 sm:p-5 text-right">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-amber-400">تخصص عشري</span>
                      <h3 className="text-base sm:text-lg font-bold text-white">ساندوتش كبدة إسكندراني & مخ بانيه</h3>
                    </div>
                    <div className="text-left">
                      <span className="inline-block text-[11px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded">
                        طازج يومياً
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-3 sm:-right-4 bg-stone-900/95 border border-amber-500/40 rounded-xl p-3 shadow-xl backdrop-blur-sm text-right">
                <div className="text-[11px] text-stone-400">الموقع</div>
                <div className="text-xs sm:text-sm font-bold text-amber-300">مدينة الشروق • القاهرة</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
