import React from 'react';
import { Tag, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

interface OffersSectionProps {
  onSelectOffer: () => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onSelectOffer }) => {
  return (
    <section id="offers" className="py-16 md:py-20 bg-stone-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400">
            <Tag className="w-3.5 h-3.5" />
            <span>العروض الخاصة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            عرض الأسبوع في الشروق
          </h2>
          <p className="text-stone-400 text-sm">
            عرض ترويجي بسيط مناسب للمّة الصحاب والعائلات مع توفير استثنائي.
          </p>
        </div>

        {/* Offer Card Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Subtle Ambient Border Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/30 via-amber-800/20 to-amber-600/30 rounded-3xl blur-lg opacity-70" />

          <div className="relative bg-gradient-to-b from-stone-900 to-stone-950 border border-amber-600/40 rounded-2xl p-6 sm:p-10 shadow-2xl">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              
              {/* Offer Details */}
              <div className="space-y-5 text-right flex-1">
                
                <div className="flex items-center gap-2">
                  <span className="bg-amber-500 text-stone-950 font-black text-xs px-2.5 py-1 rounded">
                    توفير 20%
                  </span>
                  <span className="text-xs text-amber-300 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>عرض لمة الصحاب</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  كومبو الشروق العائلي المشكل
                </h3>

                <p className="text-stone-300 text-sm leading-relaxed">
                  وجبة متكاملة تضم أشهى تخصصات عشري في علبة واحدة جاهزة للأكل ساخنة ومقرمشة مع كل المرفقات:
                </p>

                {/* Offer Items List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>4 ساندوتش كبدة إسكندراني بالخل والتوم</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>2 ساندوتش مخ بانيه ذهبي كرسبي</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>1 باكت بطاطس محمرة حجم عائلي كبير</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>3 مشروبات غازية كانز مثلجة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>4 عبوات طحينة سمسم + طرشي بلدي</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>عيش بلدي طازج إضافي مجاناً</span>
                  </div>
                </div>

              </div>

              {/* Price & Action Block */}
              <div className="lg:w-64 bg-stone-950/80 border border-stone-800 rounded-xl p-6 text-center space-y-4 flex flex-col justify-center shrink-0">
                
                <div>
                  <div className="text-xs text-stone-400 line-through">
                    190 ج.م
                  </div>
                  <div className="text-4xl font-black text-amber-400">
                    149 ج.م
                  </div>
                  <div className="text-[11px] text-amber-300/80 mt-1 font-semibold">
                    (سعر تجريبي - Demo Data)
                  </div>
                </div>

                <button
                  onClick={onSelectOffer}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-black py-3 rounded-lg text-sm transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>اطلب العرض الآن</span>
                </button>

                <p className="text-[10px] text-stone-400 leading-tight">
                  نموذج تجريبي لمحاكاة العروض الترويجية في مطعم عشري.
                </p>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
