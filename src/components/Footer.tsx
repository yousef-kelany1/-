import React from 'react';
import { Flame, AlertTriangle, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 border-t border-stone-800 pt-14 pb-10 text-stone-400 text-right">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center text-stone-950">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white">عَشْري</span>
                <span className="text-xs text-amber-400 block font-medium">كبدة • مخ • فليه</span>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              أكلات الشارع المصري الأصيلة: كبدة إسكندراني بالخل والتوم، مخ بانيه كرسبي، ولحم فليه جريل طري.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>مدينة الشروق • القاهرة</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="text-sm font-bold text-white mb-3">أقسام الموقع</h4>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollTo('hero')}
                className="text-right hover:text-amber-400 transition cursor-pointer"
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollTo('menu')}
                className="text-right hover:text-amber-400 transition cursor-pointer"
              >
                قائمة الطعام (المنيو)
              </button>
              <button
                onClick={() => scrollTo('offers')}
                className="text-right hover:text-amber-400 transition cursor-pointer"
              >
                العروض الترويجية
              </button>
              <button
                onClick={() => scrollTo('location')}
                className="text-right hover:text-amber-400 transition cursor-pointer"
              >
                الموقع (مدينة الشروق)
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="text-right hover:text-amber-400 transition cursor-pointer"
              >
                أرقام التواصل والطلب
              </button>
            </div>
          </div>

          {/* Demo Information */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <h4 className="text-sm font-bold text-white mb-3">حالة الموقع</h4>
            <p className="text-stone-400 leading-relaxed">
              هذه الواجهة هي مجرد نموذج أولي توضيحي (Frontend Demo) يركز على سهولة التصفح والسرعة وسهولة الوصول على الهواتف الذكية.
            </p>
            <div className="pt-2 text-[11px] text-stone-500">
              ساعات العمل التجريبية: 12:00 ظهراً حتى 2:30 صباحاً
            </div>
          </div>

        </div>

        {/* Prominent Demo Disclaimer Box (MANDATORY REQUIREMENT) */}
        <div className="p-5 rounded-2xl bg-stone-900/90 border border-amber-600/30 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs sm:text-sm">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>إخلاء مسؤولية رسمي (Demo Only Notice):</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed">
            هذا الموقع هو <strong>نموذج تجريبي (Demo)</strong> تم تصميمه لأغراض الاستعراض التقني والتصميمي فقط. <strong>ليس الموقع الرسمي</strong> لمطعم &quot;عشري&quot; ولا يرتبط به رسمياً أو قانونياً. كافة الأسعار وقوائم الطعام وأرقام الهواتف (01000000000 / 01111111111) هي بيانات وهمية وافتراضية، ولا يقدم الموقع أي خدمات بيع أو حجز أو توصيل فعلية.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-stone-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} عَشْري — نموذج تجريبي لأغراض العرض والتصميم.
          </div>
          <div className="text-[11px] text-stone-400">
            كبدة • مخ • فليه | مدينة الشروق، القاهرة
          </div>
        </div>

      </div>
    </footer>
  );
};
