import React, { useState } from 'react';
import { Phone, MessageCircle, Copy, Check, Info } from 'lucide-react';

interface ContactSectionProps {
  onOpenOrder: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenOrder }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const whatsappPlaceholder = '01000000000';
  const phonePlaceholder1 = '01111111111';
  const phonePlaceholder2 = '01222222222';

  return (
    <section id="contact" className="py-16 md:py-20 bg-stone-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400">
            <Phone className="w-3.5 h-3.5" />
            <span>التواصل والطلب</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            تواصل مع عشري
          </h2>
          <p className="text-stone-400 text-sm">
            أرقام الهاتف والواتساب لخدمة التوصيل والطلبات السريعة (بيانات تجريبية).
          </p>
        </div>

        {/* Demo Notice Banner */}
        <div className="max-w-2xl mx-auto mb-8 bg-amber-950/30 border border-amber-600/30 rounded-xl p-3 text-xs text-amber-300 text-center flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span>ملاحظة: الأرقام المدرجة هي أرقام تجريبية وافتراضية (Placeholders) لأغراض عرض التصميم فقط.</span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* WhatsApp Card */}
          <div className="bg-stone-900 border border-stone-800 hover:border-emerald-500/50 rounded-2xl p-6 sm:p-8 space-y-5 transition-all text-right flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-600/40 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-400">الطلب المباشر</span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  واتساب (WhatsApp)
                </h3>
                <p className="text-stone-400 text-xs mt-1">
                  أرسل طلبك وموقعك في مدينة الشروق لخدمة التوصيل الفوري.
                </p>
              </div>

              {/* Number display */}
              <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-between">
                <span className="font-mono text-lg font-bold text-emerald-300 tracking-wider">
                  {whatsappPlaceholder}
                </span>
                <span className="text-[11px] text-stone-400">
                  (رقم تجريبي)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => copyToClipboard(whatsappPlaceholder, 'wa')}
                className="flex-1 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold py-2.5 px-3 rounded-lg border border-stone-700 transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedKey === 'wa' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>تم النسخ</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>نسخ الرقم</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenOrder}
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-stone-950 text-xs font-black py-2.5 px-3 rounded-lg transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>محادثة واتساب</span>
              </button>
            </div>
          </div>

          {/* Phone Call Card */}
          <div className="bg-stone-900 border border-stone-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 space-y-5 transition-all text-right flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-600/40 flex items-center justify-center text-amber-400">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold text-amber-400">الخط الساخن والدليفري</span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  الاتصال الهاتفي
                </h3>
                <p className="text-stone-400 text-xs mt-1">
                  للحجز والاستفسار أو طلبات العزومات والشركات في مدينة الشروق.
                </p>
              </div>

              {/* Numbers display */}
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-between">
                  <span className="font-mono text-base font-bold text-amber-300 tracking-wider">
                    {phonePlaceholder1}
                  </span>
                  <span className="text-[11px] text-stone-400">
                    (رقم تجريبي 1)
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-between">
                  <span className="font-mono text-base font-bold text-amber-300 tracking-wider">
                    {phonePlaceholder2}
                  </span>
                  <span className="text-[11px] text-stone-400">
                    (رقم تجريبي 2)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => copyToClipboard(phonePlaceholder1, 'phone')}
                className="flex-1 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold py-2.5 px-3 rounded-lg border border-stone-700 transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedKey === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                    <span>تم النسخ</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>نسخ الرقم</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setCopiedKey('call-demo')}
                className="flex-1 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-black py-2.5 px-3 rounded-lg transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{copiedKey === 'call-demo' ? 'رقم تجريبي فقط' : 'تجربة اتصال'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
