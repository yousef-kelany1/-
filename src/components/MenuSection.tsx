import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/menuData';
import { AlertCircle, Plus, Check } from 'lucide-react';
import filletDishImg from '../assets/images/ashry_fillet_dish_1791484606529.jpg';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  selectedItemIds: string[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  selectedItemIds,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 md:py-20 bg-stone-900/40 border-y border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
            <span>قائمة طعام عشري</span>
            <span aria-hidden="true">·</span>
            <span>كبدة ومخ وفليه</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            قائمة الطعام والمأكولات
          </h2>

          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            اختر ما يناسب ذوقك من الساندوتشات والوجبات السريعة المحضرة طازجة فور طلبك بتتبيلة عشري الإسكندرانية المميزة.
          </p>

          {/* Prominent Demo Notice Box */}
          <div className="mt-4 p-3.5 rounded-xl bg-amber-950/40 border border-amber-600/30 text-amber-200/90 text-xs text-right sm:text-center flex items-start sm:items-center justify-center gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong>تنبيه توضيحي:</strong> كافة الأسعار والأصناف المعروضة أدناه هي <u>بيانات تجريبية وافتراضية (Demo Data)</u> لأغراض معاينة وتصميم الموقع فقط وليست أسعاراً رسمية.
            </span>
          </div>
        </div>

        {/* Featured Special Banner */}
        <div className="mb-12 bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-5 h-56 md:h-full min-h-[220px]">
            <img
              src={filletDishImg}
              alt="صينية مشكل كبدة وفليه وبطاطس من عشري"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-7 p-6 sm:p-8 space-y-3 text-right">
            <div className="text-xs font-semibold text-amber-400">
              طبق الأسبوع الموصى به
            </div>
            <h3 className="text-2xl font-bold text-white">
              صينية مشكل عشري (كبدة + فليه + مخ)
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              تشكيلة متكاملة من كبدة إسكندراني ساخنة مع شرائح لحم فليه بتلو طري ومخ بانيه مقرمش، تُقدم مع بطاطس محمرة وطحينة ومخلل بلدي وعيش ساخن.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-amber-400">165 ج.م</span>
                <span className="text-xs text-stone-400 font-medium">(سعر تجريبي - Demo)</span>
              </div>
              <button
                onClick={() => {
                  const specialItem = MENU_ITEMS.find((i) => i.id === 'w2');
                  if (specialItem) onSelectItem(specialItem);
                }}
                className="bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm px-5 py-2.5 rounded-lg transition active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>أضف للطلب التجريبي</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs (Zero-pill segmented controls) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 no-scrollbar gap-1.5">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-950'
                    : 'bg-stone-900 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => {
            const isSelected = selectedItemIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-stone-900/90 border border-stone-800 hover:border-amber-500/40 rounded-xl p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 group"
              >
                <div>
                  {/* Category and Subtitle (Anti-slop zero pill metadata) */}
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                    <span className="text-amber-400 font-semibold">{item.categoryLabel}</span>
                    {item.tag && (
                      <>
                        <span aria-hidden="true" className="text-stone-600">·</span>
                        <span>{item.tag}</span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Price and Action Footer */}
                <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-black text-amber-400">
                        {item.price}
                      </span>
                    </div>
                    <span className="text-[10px] text-stone-400">
                      سعر تجريبي (Demo)
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectItem(item)}
                    className={`text-xs font-bold px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-700/60'
                        : 'bg-stone-800 hover:bg-amber-600 hover:text-stone-950 text-stone-200 border border-stone-700'
                    }`}
                    title="إضافة للطلب التجريبي"
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>مُضاف</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>طلب تجريبي</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom helper text */}
        <div className="mt-8 text-center text-xs text-stone-400">
          تتوفر الساندوتشات بخبز بلدي مصري أو عيش فينو طازج مع طحينة ومخلل بلدي مجاناً مع كل طلب (محاكاة تجريبية).
        </div>

      </div>
    </section>
  );
};
