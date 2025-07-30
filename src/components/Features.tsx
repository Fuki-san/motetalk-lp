'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: "相手の人柄・背景に基づいた返信",
    description: "モテ男の成功パターンをAIが徹底解析。",
    alt: "AI提案機能"
  },
  {
    title: "シーン別テンプレート多数",
    description: "恋愛の各段階で使える実証済みテンプレート。",
    alt: "テンプレート集"
  },
  {
    title: "モテ男に基づく<br/>設計",
    description: "実際に会えたDMだけを学習。",
    alt: "選択肢"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            モテ男のDMには、'型'がある。
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="feature-card"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: feature.title }}></h3>
              <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 