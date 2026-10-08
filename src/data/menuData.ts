export interface MenuItem {
  id: string;
  name: string;
  category: 'kebda' | 'mokh' | 'fillet' | 'sandwiches' | 'meals';
  categoryLabel: string;
  description: string;
  price: string; // e.g. "25 ج.م (تجريبي)"
  numericPrice: number;
  highlight?: string;
  tag?: string;
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'الكل' },
  { id: 'kebda', label: 'كبدة' },
  { id: 'mokh', label: 'مخ' },
  { id: 'fillet', label: 'فليه' },
  { id: 'sandwiches', label: 'ساندوتشات' },
  { id: 'meals', label: 'وجبات' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // كبدة
  {
    id: 'k1',
    name: 'ساندوتش كبدة إسكندراني',
    category: 'kebda',
    categoryLabel: 'كبدة',
    description: 'كبدة بقري مقطعة رفيع ومتبلة بالخل والتوم والفلفل الأخضر الحامي على نار عالية، مع رشة طحينة وليمون.',
    price: '28 ج.م',
    numericPrice: 28,
    highlight: 'الأكثر طلباً',
    tag: 'عيش بلدي أو فينو',
  },
  {
    id: 'k2',
    name: 'ساندوتش كبدة بالردة',
    category: 'kebda',
    categoryLabel: 'كبدة',
    description: 'شرائح كبدة متبلة ومغلفة بالردة الناعمة ومقلية ذهبية، تُقدم مع شرائح الليمون الأخضر والطحينة البلدية.',
    price: '32 ج.م',
    numericPrice: 32,
    tag: 'مقلي بالردة',
  },
  {
    id: 'k3',
    name: 'طبق كبدة إسكندراني مخصوص',
    category: 'kebda',
    categoryLabel: 'كبدة',
    description: 'طاسة كبدة إسكندراني ساخنة مع فلفل حار وليمون، تكفي فرداً مع 3 أرغفة عيش بلدي وسلطة طحينة ومخلل.',
    price: '75 ج.م',
    numericPrice: 75,
    tag: 'طبق مقبلات وعيش',
  },

  // مخ
  {
    id: 'm1',
    name: 'ساندوتش مخ بانيه ذهبي',
    category: 'mokh',
    categoryLabel: 'مخ',
    description: 'قطع مخ بتلو طازج مقرمشة بتتبيلة عشري الخاصة مع جرجير فريش وعصير ليمون وطحينة سمسم ناعمة.',
    price: '45 ج.م',
    numericPrice: 45,
    highlight: 'مميز لعشاق المخ',
    tag: 'كرسبي مقرمش',
  },
  {
    id: 'm2',
    name: 'ساندوتش ميكس كبدة ومخ',
    category: 'mokh',
    categoryLabel: 'مخ',
    description: 'الخلطة الشهيرة التي تجمع سخونة الكبدة الإسكندراني المتبلة مع قرمشة المخ البانيه في ساندوتش واحد.',
    price: '42 ج.م',
    numericPrice: 42,
    highlight: 'الميكس الأسطوري',
    tag: 'ميكس مزدوج',
  },
  {
    id: 'm3',
    name: 'طبق مخ بانيه عشري',
    category: 'mokh',
    categoryLabel: 'مخ',
    description: 'وجبة مخ بانيه كرسبي مفرود يقدم مع بطاطس مقلية محمرة وسلطة طحينة وعيش بلدي ساخن وطماطم متبلة.',
    price: '95 ج.م',
    numericPrice: 95,
    tag: 'طبق رئيسي',
  },

  // فليه
  {
    id: 'f1',
    name: 'ساندوتش فليه جريل مشوي',
    category: 'fillet',
    categoryLabel: 'فليه',
    description: 'شرائح لحم بقري فليه بتلو طري جداً متبل ومستوي على الجريل مع بصل مكرمل خفيف وتوابل خاصة.',
    price: '50 ج.م',
    numericPrice: 50,
    highlight: 'لحم بقري صافي',
    tag: 'طري على الجريل',
  },
  {
    id: 'f2',
    name: 'ساندوتش ميكس فليه وكبدة',
    category: 'fillet',
    categoryLabel: 'فليه',
    description: 'تناغم فريد بين طراوة لحم الفليه ونكهة الكبدة الحارة الغنية بالثوم والليمون والفلفل الأخضر.',
    price: '48 ج.م',
    numericPrice: 48,
    tag: 'ميكس جريل',
  },
  {
    id: 'f3',
    name: 'طبق فليه ستيك جريل',
    category: 'fillet',
    categoryLabel: 'فليه',
    description: 'طبق شرائح لحم فليه متبلة مع بطاطس محمرة وبصل مشوي، يقدم مع طحينة ومخلل بلدي وعيش طازج.',
    price: '110 ج.م',
    numericPrice: 110,
    tag: 'طبق فاخر',
  },

  // ساندوتشات
  {
    id: 's1',
    name: 'ساندوتش عشري الملكي (تريبل)',
    category: 'sandwiches',
    categoryLabel: 'ساندوتشات',
    description: 'توليفة الثلاثي التاريخي: كبدة إسكندراني + مخ بانيه مقرمش + شرائح فليه بتلو مع طحينة جبارة.',
    price: '55 ج.م',
    numericPrice: 55,
    highlight: 'تريبل ميكس',
    tag: 'الحجم الكبير',
  },
  {
    id: 's2',
    name: 'ساندوتش كبدة سوبر حار',
    category: 'sandwiches',
    categoryLabel: 'ساندوتشات',
    description: 'لعشاق الشطة المصرية: كبدة إسكندراني مضاعفة الفلفل الحار والخل والتوم في عيش بلدي مقمر.',
    price: '30 ج.م',
    numericPrice: 30,
    tag: 'سبايسي حار',
  },
  {
    id: 's3',
    name: 'ساندوتش مخ رول بالجرجير',
    category: 'sandwiches',
    categoryLabel: 'ساندوتشات',
    description: 'مخ بانيه مقلي ذهبي في خبز فينو طازج مع جرجير بلدي وشرائح مخلل خيار وطحينة إسكندراني.',
    price: '44 ج.م',
    numericPrice: 44,
    tag: 'فينو طازج',
  },

  // وجبات
  {
    id: 'w1',
    name: 'وجبة ميكس عشري الفردية',
    category: 'meals',
    categoryLabel: 'وجبات',
    description: 'ساندوتش كبدة + ساندوتش مخ بانيه + باكت بطاطس مقلية + صوص طحينة ومخلل + مشروب غازي.',
    price: '85 ج.م',
    numericPrice: 85,
    highlight: 'الوجبة الأكثر توفيراً',
    tag: 'وجبة فردية متكاملة',
  },
  {
    id: 'w2',
    name: 'وجبة صينية الشروق (شخصين)',
    category: 'meals',
    categoryLabel: 'وجبات',
    description: 'تشكيلة ساخنة من الكبدة الإسكندراني والمخ البانيه وشرائح الفليه مع بطاطس عائلية و6 أرغفة وسلطات.',
    price: '165 ج.م',
    numericPrice: 165,
    highlight: 'تكفي شخصين',
    tag: 'صينية عائلية',
  },
  {
    id: 'w3',
    name: 'وجبة الفليه المشوي المتكاملة',
    category: 'meals',
    categoryLabel: 'وجبات',
    description: 'طبق شرائح لحم فليه جريل + ساندوتش كبدة + بطاطس مقلية + طحينة ومخلل + خبز بلدي ساخن + مشروب.',
    price: '135 ج.م',
    numericPrice: 135,
    tag: 'وجبة بروتين فاخرة',
  },
];
