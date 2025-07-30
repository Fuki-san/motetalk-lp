import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MoteTalk - AI恋愛会話アシスタント",
  description: "マッチングアプリ専用のAI会話アシスタント。相手のメッセージに最適な返信を3つ提案します。",
  keywords: "AI,恋愛,マッチングアプリ,返信,テンプレート",
  openGraph: {
    title: "MoteTalk - AI恋愛会話アシスタント",
    description: "マッチングアプリ専用のAI会話アシスタント",
    type: "website",
    url: "https://motetalk-lp.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
