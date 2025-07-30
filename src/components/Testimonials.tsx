'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "「返信の質が格段に上がりました！今までの自分の返信がいかにつまらなかったか実感しました。」",
    author: "26歳・会社員"
  },
  {
    text: "「初デートにこぎつけることができました。AIの提案する誘い方が自然で、断られる恐怖がなくなりました。」",
    author: "24歳・大学院生"
  },
  {
    text: "「使い続けるうちに自分なりの文章力も上がった気がします。もう一人でも大丈夫そうです。」",
    author: "29歳・エンジニア"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            実際に使った方の声
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="testimonial-card"
            >
              <div className="text-center mb-6 text-2xl">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 