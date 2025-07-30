'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function Expert() {
  return (
    <section className="py-20 bg-white border-t-4 border-b-4 border-pink-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-xl font-bold mb-8 shadow-lg">
            22歳まで恋愛経験0から経験人数200人
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-pink-50 p-8 rounded-2xl border-l-4 border-pink-500"
        >
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-pink-600 mt-2 flex-shrink-0" />
            <div>
              <p className="text-lg text-gray-800 leading-relaxed mb-4 font-medium">
                「<span className="text-pink-600 font-bold">タップルで1000マッチ</span>を達成し、3日で彼女を作れた経験を基に開発しました。
                マッチングアプリでの成功パターンを徹底分析し、誰でも再現できるメッセージ作成システムを構築しています。」
              </p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">実績に基づく信頼性</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 