'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-pink-600 to-pink-500 text-white py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
                             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-shadow-lg">
                     絶対に送ってはいけない。<br/>
                     モテない男のDMには共通点がある。
                   </h1>
          <p className="text-lg md:text-xl mb-8 opacity-80 font-medium">
            モテてる男の"実際に使っているDM"だけを学習したAIが、<br/>
            非モテの典型パターンをすべて回避し、自然にデートへつなげます。<br/>
            返信率を上げる一文、無料で知ってください。
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <a
            href="https://motetalk-0723.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center gap-2"
          >
            たった3通、試すだけ。
            <span className="free-badge">無料</span>
          </a>
        </motion.div>
        
        {/* Before/After Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-red-200">Before</h3>
            <img src="/img/matching-app-before.svg" alt="Before" className="w-full max-w-xs mx-auto" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-green-200">After</h3>
            <img src="/img/matching-app-after.svg" alt="After" className="w-full max-w-xs mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 