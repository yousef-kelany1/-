/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { OffersSection } from './components/OffersSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { MenuItem, MENU_ITEMS } from './data/menuData';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);

  const handleSelectItem = (item: MenuItem) => {
    setSelectedItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const handleRemoveItem = (id: string) => {
    setSelectedItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearItems = () => {
    setSelectedItems([]);
  };

  const handleSelectOffer = () => {
    // Add default popular combo items for the offer
    const offerItems = MENU_ITEMS.filter((i) => i.id === 'k1' || i.id === 'm1' || i.id === 'w2');
    setSelectedItems(offerItems);
    setIsOrderModalOpen(true);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Navigation */}
      <Navbar onOpenOrder={() => setIsOrderModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero: "عشري" - "كبدة • مخ • فليه" - Button: "اطلب الآن" */}
        <Hero
          onOpenOrder={() => setIsOrderModalOpen(true)}
          onExploreMenu={scrollToMenu}
        />

        {/* 2. Menu: Cards for كبدة, مخ, فليه, ساندوتشات, وجبات (Demo prices clearly labeled) */}
        <MenuSection
          onSelectItem={handleSelectItem}
          selectedItemIds={selectedItems.map((i) => i.id)}
        />

        {/* 3. Offers: One simple promotional section */}
        <OffersSection onSelectOffer={handleSelectOffer} />

        {/* 4. Location: "مدينة الشروق" */}
        <LocationSection />

        {/* 5. Contact: WhatsApp and phone placeholders */}
        <ContactSection onOpenOrder={() => setIsOrderModalOpen(true)} />
      </main>

      {/* 6. Footer: Demo only notice, disclaimer, no official claim */}
      <Footer />

      {/* Interactive Demo Order Dialog */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedItems={selectedItems}
        onRemoveItem={handleRemoveItem}
        onClearItems={handleClearItems}
      />
    </div>
  );
}
