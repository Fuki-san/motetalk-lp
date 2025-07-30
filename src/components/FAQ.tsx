'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "AIが作った文章はバレませんか？",
    answer: "バレることはありません。AIはあなたの文章のクセや好みを学習し、「あなたらしさ」を保ちながら、より魅力的な表現に改善します。機械的な文章ではなく、自然で温かみのあるメッセージを提案します。"
  },
  {
    question: "月額と買い切りどちらがお得ですか？",
    answer: "短期間で集中して使いたい方は月額プランがおすすめです。特定のシーン（初回メッセージなど）だけ困っている方や、長期的に参考にしたい方は買い切りプランがお得です。"
  },
  {
    question: "マッチングアプリ以外でも使えますか？",
    answer: "はい！LINEやInstagramのDM、職場の気になる人へのメッセージなど、あらゆるシーンで活用できます。恋愛に限らず、人間関係を良くするコミュニケーションツールとしてもご利用いただけます。"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            よくある質問
          </h2>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="faq-item"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question w-full text-left"
              >
                Q: {faq.question}
              </button>
              <div className={`faq-answer ${openIndex === index ? 'active' : ''}`}>
                A: {faq.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 