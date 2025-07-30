'use client';

import { motion } from 'framer-motion';

const problems = [
  {
    title: "既読スルーされがち",
    description: "せっかく送ったメッセージが無視されてしまう。何を返信すればいいかわからず、いつも「そうですね」「はい」ばかり...",
    alt: "困っている男性"
  },
  {
    title: "会話が盛り上がらない",
    description: "どうすれば楽しい会話ができるのかわからない。相手が興味を持ってくれるような話題が見つからない",
    alt: "退屈そうな表情"
  },
  {
    title: "デートに誘えない",
    description: "自然な誘い方がわからず、チャンスを逃してしまう。断られるのが怖くて一歩が踏み出せない",
    alt: "デートを誘えない男性"
  }
];

export default function Problems() {
  return (
    <section id="problems" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            こんな悩み、ありませんか？
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="problem-card"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{problem.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 font-medium">
            「大丈夫、みんな最初は同じです。恋愛経験が少なくても、正しいアプローチを学べば必ず上達します。」
          </p>
        </motion.div>
      </div>
    </section>
  );
} 