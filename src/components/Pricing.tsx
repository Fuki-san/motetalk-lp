'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    name: "無料プラン",
    price: "無料",
    period: "",
    features: [
      "3通まで無料"
    ],
    cta: "今すぐ始める",
    popular: false
  },
  {
    name: "プレミアムプラン",
    price: "¥1,980",
    period: "/月",
    features: [
      "無制限利用",
      "会話履歴保存",
      "継続チャット機能"
    ],
    cta: "プレミアムで始める",
    popular: true
  }
];

const templates = [
  { 
    name: "初回メッセージ", 
    price: "¥2,500",
    description: "第一印象を決める重要なメッセージ集。相手の興味を引く効果的なアプローチ方法を網羅しています。"
  },
  { 
    name: "会話ネタ", 
    price: "¥2,500",
    description: "盛り上がる話題と会話の続け方。相手が自然に返信したくなる話題選びのコツを紹介します。"
  },
  { 
    name: "デート誘い", 
    price: "¥2,500",
    description: "断られない誘い方のコツ集。自然な流れでデートに誘うための心理的テクニックを解説します。"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            あなたに合ったプランを選んでください
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`pricing-card ${plan.popular ? 'featured' : ''}`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <div className="price mb-6">
                {plan.price}<span className="text-lg opacity-80 font-medium">{plan.period}</span>
              </div>
              
              <ul className="features-list mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="py-2 border-b border-gray-200">
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href="https://motetalk-0723.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button block w-full text-center"
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* 買い切りテンプレート */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            買い切りテンプレート
          </h3>
          <p className="text-gray-600 mb-6 font-medium">¥2,500/永年 - お好きなテンプレート集を選択</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {templates.map((template, index) => (
            <div key={template.name} className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">{template.name}</h4>
              <p className="text-pink-600 font-bold mb-3">{template.price}</p>
              <p className="text-sm text-gray-600 mb-4">{template.description}</p>
              <a
                href="https://motetalk-0723.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium block text-center"
              >
                テンプレートを選ぶ
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 