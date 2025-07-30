'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export default function Story() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-pink-200 rounded-full transform translate-x-24 -translate-y-24 opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            恋愛経験ゼロの僕が、DMだけで10人と会えた理由。
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="story-step"
          >
            <span className="story-step-number">1</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">マッチングアプリで最初は全く出会えませんでした</h3>
            <p className="text-gray-700 leading-relaxed font-medium">
              「こんにちは」「よろしくお願いします」といった当たり障りのないメッセージばかり。20人とマッチしても会話が続いたのはわずか2人。デートまで発展したのは0人でした。
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="story-step"
          >
            <span className="story-step-number">2</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">モテる男のDMを分析し、返信率が10倍になりました</h3>
            <p className="text-gray-700 leading-relaxed font-medium">
              友人の紹介でこのサービスを知り、半信半疑で無料プランから開始。AIが提案する返信文の自然さと、相手の反応の違いに驚きました。「そんな視点があったのか」と目から鱗でした。
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="story-step"
          >
            <span className="story-step-number">3</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">その結果、1ヶ月で10人と会うことができました</h3>
            <p className="text-gray-700 leading-relaxed font-medium">
              プレミアムプランに切り替えて本格活用。相手のプロフィールに合わせたメッセージで返信率が格段にアップ。会話も自然に続くようになり、デートの誘いも成功するように。
            </p>
          </motion.div>
        </div>

        {/* Result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl text-center shadow-lg">
            <Trophy className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              結果：1ヶ月で10人と会うことができました！
            </h3>
            <p className="text-lg mb-6 opacity-90 font-medium">
              「！や絵文字の細かいところから、今までモテなかった理由がわかりました」
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 