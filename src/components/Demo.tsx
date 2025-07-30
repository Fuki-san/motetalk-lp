'use client';

import { motion } from 'framer-motion';

export default function Demo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            実際にこんな風に使えます
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-lg"
        >
          <h3 className="text-center mb-8 text-2xl font-bold text-gray-900">
            初回メッセージの場合
          </h3>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="message-box before">
              <p className="font-semibold text-red-600 mb-4">送信: 「こんにちは」</p>
              <p className="text-gray-600 mb-4 font-medium">こんにちは</p>
              <p className="text-red-600 font-semibold">結果: 既読スルー... 😢</p>
            </div>
            
            <div className="message-box after">
              <p className="font-semibold text-green-600 mb-4">送信: プロフィールを活用したメッセージ</p>
              <p className="text-gray-600 mb-4 font-medium">プロフィールの○○、すごく興味深いですね！僕も同じ趣味を持っているので、ぜひお話しさせてください😊</p>
              <p className="text-green-600 font-semibold">結果: 「ありがとうございます！」と返信が来た! 🎉</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 