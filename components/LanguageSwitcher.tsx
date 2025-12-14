"use client";

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-primary/20">
      <Globe className="w-4 h-4 text-primary" />
      <div className="flex gap-1">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage('sr')}
          className={`px-2 py-0.5 rounded-full text-sm font-semibold transition-all ${
            language === 'sr'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-primary'
          }`}
        >
          SR
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage('en')}
          className={`px-2 py-0.5 rounded-full text-sm font-semibold transition-all ${
            language === 'en'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-primary'
          }`}
        >
          EN
        </motion.button>
      </div>
    </div>
  );
}
