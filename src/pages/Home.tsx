import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CoreValues from '@/components/CoreValues';
import Footer from '@/components/Footer';
import UserVoice from '@/components/UserVoice';
import { useTheme } from '@/hooks/useTheme';

export default function Home() {
  const { theme, isDark } = useTheme();
  
  // Apply dark mode class to body
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
  
  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
      <Navbar />
      <main>
        <HeroSection />
         <CoreValues />
         <UserVoice />
        {/* More sections will be added here */}
      </main>
      <Footer />
    </div>
  );
}