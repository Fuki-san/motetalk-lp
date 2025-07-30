'use client';

import { motion } from 'framer-motion';

export default function Authority() {
  return (
    <section className="py-20 bg-white border-t-4 border-b-4 border-pink-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-bold mb-8 shadow-lg">
            恋愛経験ゼロから経験人数200人に
          </div>
          <p className="text-xl text-gray-800 leading-relaxed font-medium">
            「<span className="text-pink-600 font-bold">非モテだった開発者自身も効果を実感</span>。3000件以上の会話データから、返信率が上がる'型'を抽出。AIがあなたの返信作成をサポートし、恋愛成功を後押しします。」
          </p>
        </motion.div>
      </div>
    </section>
  );
} 