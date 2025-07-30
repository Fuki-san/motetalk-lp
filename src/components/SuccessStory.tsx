'use client';

import { motion } from 'framer-motion';
import { User, MessageCircle, Heart, Trophy, ArrowRight } from 'lucide-react';

export default function SuccessStory() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
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
            28歳エンジニア佐藤さんの成功ストーリー
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            実際に使った方の体験談をご紹介します
          </p>
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
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">マッチングアプリを始めるも...</h3>
            </div>
            <p className="text-gray-700 leading-relaxed font-medium">
              「こんにちは」「お疲れ様です」といった当たり障りのないメッセージばかり。
              20人とマッチしても会話が続いたのはわずか2人。デートまで発展したのは0人でした。
              返信率は10%以下で、恋愛に自信を失っていました。
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
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">恋愛DMサポートAIと出会う</h3>
            </div>
            <p className="text-gray-700 leading-relaxed font-medium">
              友人の紹介でこのサービスを知り、半信半疑で無料プランから開始。
              AIが提案する返信文の自然さと、相手の反応の違いに驚きました。
              「そんな視点があったのか」と目から鱗でした。プロフィールを活用したメッセージの重要性を実感。
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
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">みるみる変わる返信率</h3>
            </div>
            <p className="text-gray-700 leading-relaxed font-medium">
              プレミアムプランに切り替えて本格活用。相手のプロフィールに合わせたメッセージで返信率が格段にアップ。
              会話も自然に続くようになり、デートの誘いも成功するように。
              3ヶ月で返信率が60%に向上し、デート成功率も大幅に改善。
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
          <div className="bg-green-500 text-white p-8 rounded-2xl text-center shadow-lg">
            <Trophy className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              結果：3ヶ月で理想の彼女ができました！
            </h3>
            <p className="text-lg mb-6 opacity-90 font-medium">
              「今では一人でも自信を持ってメッセージが送れます。恋愛だけでなく、職場でのコミュニケーションにも活かせています。
              返信率が10%から60%に向上し、デート成功率も3倍になりました。」
            </p>
            <a
              href="https://motetalk-0723.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-flex items-center gap-2"
            >
              あなたも成功体験を
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 