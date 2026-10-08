import React, { useState } from 'react';
import { X, MessageCircle, Phone, Check, AlertCircle, ShoppingBag, Trash2 } from 'lucide-react';
import { MenuItem } from '../data/menuData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItems: MenuItem[];
  onRemoveItem: (id: string) => void;
  onClearItems: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedItems,
  onRemoveItem,
  onClearItems,
}) => {
  const [addressInput, setAddressInput] = useState('مدينة الشروق');
  const [notesInput, setNotesInput] = useState('');
  const [simulatedSent, setSimulatedSent] = useState(false);

  if (!isOpen) return null;

  const totalCalculated = selectedItems.reduce((acc, curr) => acc + curr.numericPrice, 0);

  const sampleWhatsappText = encodeURIComponent(
    `مرحباً عشري (طلب تجريبي من الموقع):\n` +
    (selectedItems.length > 0
      ? selectedItems.map((i) => `- ${i.name} (${i.price})`).join('\n')
      : `- طلب ساندوتشات كبدة ومخ وفليه`) +
    `\nالعنوان: ${addressInput || 'مدينة الشروق'}` +
    (notesInput ? `\nملاحظات: ${notesInput}` : '')
  );

  const handleSimulateOrder = () => {
    setSimulatedSent(true);
    setTimeout(() => {
      setSimulatedSent(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in text-right">
      <div
        className="bg-stone-900 border border-stone-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-stone-950 p-5 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-stone-950">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">طلب وجبات عشري</h3>
              <span className="text-[11px] text-amber-400 font-medium">نموذج تجريبي (Demo Order)</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 transition cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1">
          {/* Demo Disclaimer in modal */}
          <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              <strong>تنبيه تجريبي:</strong> هذه النافذة لا تقوم بإجراء طلب حقيقي. الأرقام والأسعار لأغراض المعاينة فقط.
            </span>
          </div>

          {/* Selected items list */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-stone-300">
              <span>الأصناف المختارة ({selectedItems.length})</span>
              {selectedItems.length > 0 && (
                <button
                  onClick={onClearItems}
                  className="text-stone-500 hover:text-red-400 flex items-center gap-1 transition text-[11px] cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>تفريغ القائمة</span>
                </button>
              )}
            </div>

            {selectedItems.length === 0 ? (
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800/80 text-center text-xs text-stone-400 space-y-2">
                <p>لم تختر أصنافاً بعد من المنيو.</p>
                <p className="text-[11px] text-amber-400/90 font-medium">
                  يمكنك الاستمرار بالطلب المباشر أو اختيار أصناف كبدة ومخ وفليه من القائمة.
                </p>
              </div>
            ) : (
              <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                {selectedItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-2.5 rounded-lg bg-stone-950 border border-stone-800/70 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-bold text-stone-200">{item.name}</div>
                      <div className="text-[10px] text-stone-500">{item.categoryLabel}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-amber-400">{item.price}</span>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-stone-500 hover:text-red-400 p-1 rounded"
                        title="حذف"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Subtotal */}
          {selectedItems.length > 0 && (
            <div className="p-3 rounded-lg bg-stone-950 border border-stone-800 flex items-center justify-between text-sm">
              <span className="font-bold text-stone-300">المجموع التجريبي التقديري:</span>
              <div className="text-left">
                <span className="font-black text-amber-400 text-lg">{totalCalculated} ج.م</span>
                <span className="text-[10px] text-stone-400 block">(سعر تجريبي)</span>
              </div>
            </div>
          )}

          {/* Quick Info Inputs */}
          <div className="space-y-3 pt-1">
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                منطقة التوصيل في الشروق:
              </label>
              <input
                type="text"
                value={addressInput}
                onChange={(e) => setAddressInput(e.target.value)}
                placeholder="مثال: الحي السابع - المجاورة 2"
                className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500 text-right"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                ملاحظات الطلب (نوع العيش، زيادة طحينة، فلفل حار):
              </label>
              <input
                type="text"
                value={notesInput}
                onChange={(e) => setNotesInput(e.target.value)}
                placeholder="مثال: عيش بلدي ساخن، طحينة زيادة، بدون فلفل"
                className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500 text-right"
              />
            </div>
          </div>

          {/* Simulated Success Message */}
          {simulatedSent && (
            <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-200 text-xs text-center flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>تمت محاكاة إرسال الطلب بنجاح! هذا مجرد نموذج تجريبي.</span>
            </div>
          )}
        </div>

        {/* Modal Action Buttons */}
        <div className="bg-stone-950 p-4 border-t border-stone-800 space-y-2.5">
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`https://wa.me/201000000000?text=${sampleWhatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSimulateOrder}
              className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-black text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer text-center"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>طلب عبر واتساب</span>
            </a>

            <button
              onClick={handleSimulateOrder}
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>طلب هاتفي (01000000000)</span>
            </button>
          </div>

          <div className="text-center text-[10px] text-stone-400">
            أرقام الهاتف والواتساب هي أرقام تجريبية افتراضية للمعاينة فقط.
          </div>
        </div>
      </div>
    </div>
  );
};
