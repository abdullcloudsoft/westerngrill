import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MobileDrawer } from './components/MobileDrawer';
import { HeroSection } from './components/HeroSection';
import { CategoryScroller } from './components/CategoryScroller';
import { PopularDishes } from './components/PopularDishes';
import { MenuSection } from './components/MenuSection';
import { PromoBanner } from './components/PromoBanner';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ItemDetailModal } from './components/ItemDetailModal';
import { MenuItem } from './types';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Smooth scroll to section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // When clicking a category in the scroller, update category and scroll to menu
  const handleCategorySelect = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Intersection observer to track active section on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'popular', 'menu', 'gallery', 'about', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#24523d] selection:text-white">
      {/* 1. Compact Header */}
      <Header
        onOpenDrawer={() => setIsDrawerOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Slide-out Navigation Drawer for Mobile */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Body */}
      <main className="flex-1 w-full">
        {/* 2. Single-image Hero (Static, bright, appetizing, no carousel, no video) */}
        <HeroSection onViewMenu={() => handleNavigate('menu')} />

        {/* 3. Small Category Navigation (Circular thumbnails with smooth horizontal scroll) */}
        <CategoryScroller
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />

        {/* 4. Popular Picks (Strictly 4 compact items) */}
        <PopularDishes
          onSelectDish={(dish) => setSelectedDish(dish)}
          onViewAllMenu={() => handleNavigate('menu')}
        />

        {/* 5. Compact Menu (11 categories, integrated quick search, compact cards) */}
        <MenuSection
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          searchQuery={searchQuery}
          onSearchChange={(q) => setSearchQuery(q)}
          onSelectDish={(dish) => setSelectedDish(dish)}
        />

        {/* 6. Small Promo/CTA */}
        <PromoBanner onExploreMenu={() => handleNavigate('menu')} />

        {/* 7. Small Gallery (6 photos, lazy-loaded, compact grid) */}
        <GallerySection />

        {/* 8. Short About (Max 2-3 sentences, clean & simple) */}
        <AboutSection />

        {/* 9. Contact (Location, hotline, 4 clickable buttons) */}
        <ContactSection />
      </main>

      {/* 10. Simple Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Fixed Bottom Navigation Bar (Hidden on desktop) */}
      <MobileBottomNav activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Dish Inquiry Modal */}
      <ItemDetailModal item={selectedDish} onClose={() => setSelectedDish(null)} />
    </div>
  );
}
