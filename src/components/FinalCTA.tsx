'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-pink-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            まずは3通、無料で返信率を変えてみよう。
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="benefit-highlight">
            <h3 className="text-2xl font-bold mb-4">
              無料で始められる安心感
            </h3>
            <p className="text-lg opacity-90 font-medium">
              まずは3通無料で効果を実感してください。気に入らなければ料金は一切かかりません。
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <a
            href="https://motetalk-0723.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center gap-2"
          >
            今すぐ無料で体験する
            <span className="free-badge">無料</span>
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-sm opacity-80 font-medium"
        >
                          <p>登録は30秒で完了</p>
        </motion.div>
      </div>
    </section>
  );
} 