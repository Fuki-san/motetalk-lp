# デプロイ手順書

## 🚀 推奨デプロイ方法

### Vercel（推奨）

#### 1. Vercel CLIを使用
```bash
# Vercel CLIをインストール
npm install -g vercel

# プロジェクトディレクトリで実行
vercel

# 本番環境にデプロイ
vercel --prod
```

#### 2. GitHub連携
1. [Vercel](https://vercel.com) にアクセス
2. GitHubアカウントでログイン
3. 「New Project」をクリック
4. `motetalk-lp` リポジトリを選択
5. 設定を確認して「Deploy」

#### 3. 環境変数設定
```bash
# Vercelダッシュボードで設定
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### Netlify

#### 1. Netlify CLIを使用
```bash
# Netlify CLIをインストール
npm install -g netlify-cli

# ビルド
npm run build

# デプロイ
netlify deploy --prod --dir=out
```

#### 2. GitHub連携
1. [Netlify](https://netlify.com) にアクセス
2. GitHubアカウントでログイン
3. 「New site from Git」をクリック
4. `motetalk-lp` リポジトリを選択
5. ビルド設定を確認して「Deploy site」

### その他のプラットフォーム

#### Railway
```bash
# Railway CLIをインストール
npm install -g @railway/cli

# ログイン
railway login

# プロジェクトを初期化
railway init

# デプロイ
railway up
```

#### Render
1. [Render](https://render.com) にアクセス
2. 「New Web Service」をクリック
3. GitHubリポジトリを連携
4. 設定を確認してデプロイ

## 📦 ビルド設定

### package.json
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export"
  }
}
```

### next.config.ts
```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig
```

## 🔧 環境変数

### 開発環境 (.env.local)
```bash
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 本番環境
```bash
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📊 パフォーマンス最適化

### 画像最適化
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  }
}
```

### コード分割
```typescript
// 動的インポート
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./Component'), {
  loading: () => <p>Loading...</p>
})
```

## 🔍 SEO設定

### metadata.ts
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MoteTalk - AI恋愛会話アシスタント',
  description: 'モテる男のDMパターンを学習したAIが、非モテの典型パターンを回避し、自然にデートへつなげます。',
  keywords: '恋愛,DM,マッチングアプリ,AI,モテる',
  openGraph: {
    title: 'MoteTalk - AI恋愛会話アシスタント',
    description: 'モテる男のDMパターンを学習したAIが、非モテの典型パターンを回避し、自然にデートへつなげます。',
    url: 'https://your-domain.com',
    siteName: 'MoteTalk',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoteTalk - AI恋愛会話アシスタント',
    description: 'モテる男のDMパターンを学習したAIが、非モテの典型パターンを回避し、自然にデートへつなげます。',
    images: ['https://your-domain.com/og-image.jpg'],
  },
}
```

### robots.txt
```txt
User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml
```

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 📈 アナリティクス

### Google Analytics
```typescript
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🔒 セキュリティ

### セキュリティヘッダー
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### CSP設定
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
          },
        ],
      },
    ]
  },
}
```

## 🚨 トラブルシューティング

### よくある問題

#### 1. ビルドエラー
```bash
# 依存関係をクリーンインストール
rm -rf node_modules package-lock.json
npm install

# キャッシュをクリア
npm run build -- --no-cache
```

#### 2. 画像が表示されない
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    domains: ['your-domain.com'],
    unoptimized: true
  }
}
```

#### 3. 環境変数が読み込まれない
```bash
# 環境変数を確認
echo $NEXT_PUBLIC_GA_ID

# .env.localファイルを確認
cat .env.local
```

#### 4. パフォーマンスが悪い
```bash
# バンドルサイズを分析
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

## 📋 デプロイチェックリスト

### デプロイ前
- [ ] ローカルでビルドが成功する
- [ ] 環境変数が正しく設定されている
- [ ] SEO設定が完了している
- [ ] アナリティクスが設定されている
- [ ] セキュリティヘッダーが設定されている

### デプロイ後
- [ ] サイトが正常に表示される
- [ ] 画像が正しく表示される
- [ ] リンクが正常に動作する
- [ ] フォームが正常に動作する
- [ ] モバイル表示を確認
- [ ] パフォーマンスを確認
- [ ] SEO設定を確認

## 🔄 CI/CD

### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
``` 