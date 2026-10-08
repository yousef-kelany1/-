import React from 'react';
import { MapPin, Clock, Navigation, ExternalLink, Bike } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 md:py-20 bg-stone-900/40 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>فروعنا وخدمة التوصيل</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            موقعنا في مدينة الشروق
          </h2>
          <p className="text-stone-400 text-sm">
            نخدم أهالي وسكان مدينة الشروق بأسرع طهي وتوصيل ساخن حتى باب المنزل.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location Info Details */}
          <div className="lg:col-span-5 space-y-5 text-right flex flex-col justify-between">
            
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 space-y-6">
              
              {/* Address item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-stone-400">العنوان في الشروق</div>
                  <div className="text-base font-bold text-white">
                    مدينة الشروق، القاهرة
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    منطقة خدمات مدينة الشروق بالقرب من المحور الأوسط والجامعة البريطانية (موقع افتراضي توضيحي).
                  </p>
                </div>
              </div>

              {/* Working Hours item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-stone-400">ساعات العمل والخدمة</div>
                  <div className="text-base font-bold text-white">
                    يومياً من 12:00 ظهراً حتى 2:30 صباحاً
                  </div>
                  <p className="text-xs text-stone-300">
                    استقبال الطلبات والتوصيل السريع طوال أيام الأسبوع.
                  </p>
                </div>
              </div>

              {/* Delivery coverage */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Bike className="w-5 h-5 text-amber-400" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-stone-400">نطاق التوصيل التجريبي</div>
                  <div className="text-base font-bold text-white">
                    كافة أحياء ومجاورات مدينة الشروق
                  </div>
                  <p className="text-xs text-stone-300">
                    توصيل سريع وساخن يضمن وصول الساندوتشات بأعلى جودة.
                  </p>
                </div>
              </div>

            </div>

            {/* Note badge */}
            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-400 text-right">
              <span className="text-amber-400 font-bold block mb-1">بيانات تجريبية للموقع:</span>
              المطعم والموقع المعروض هو نموذج تصميمي لأغراض المعاينة في مدينة الشروق.
            </div>

          </div>

          {/* Interactive Map Visual Representation */}
          <div className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-xl overflow-hidden relative min-h-[340px] flex flex-col">
            
            {/* Top Map Bar */}
            <div className="bg-stone-950 px-4 py-3 border-b border-stone-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-stone-300 font-semibold">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>خريطة مدينة الشروق، محافظة القاهرة</span>
              </div>
              <a
                href="https://www.google.com/maps/search/%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D8%B4%D8%B1%D9%88%D9%82"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold transition"
              >
                <span>فتح خرائط Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Styled Map Graphic / Embed Frame */}
            <div className="flex-1 relative bg-stone-950 flex items-center justify-center p-6 overflow-hidden">
              {/* Stylized road grid lines */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              {/* Radial glow around pin */}
              <div className="absolute w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Pin representation */}
              <div className="relative z-10 text-center space-y-3">
                <div className="relative inline-block">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center shadow-xl shadow-amber-950 border-2 border-white mx-auto animate-bounce">
                    <MapPin className="w-8 h-8 fill-stone-950" />
                  </div>
                  <div className="w-8 h-2 bg-stone-950/80 rounded-full blur-sm mx-auto mt-2" />
                </div>

                <div className="bg-stone-900/95 border border-amber-500/40 rounded-xl px-5 py-3 shadow-xl backdrop-blur-md">
                  <div className="text-base font-black text-white">عَشْري - كبدة ومخ وفليه</div>
                  <div className="text-xs text-amber-300 font-semibold">مدينة الشروق • القاهرة</div>
                  <div className="text-[10px] text-stone-400 mt-1">خدمة صالة وتيك أواي وتوصيل منازل</div>
                </div>

                <div className="text-xs text-stone-400 max-w-sm mx-auto">
                  اضغط على الزر بالأعلى للانتقال إلى خريطة مدينة الشروق الرسمية في Google Maps.
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
