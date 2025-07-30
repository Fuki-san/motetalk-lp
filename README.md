# MoteTalk LP

AI恋愛会話アシスタント「MoteTalk」のランディングページです。

## 📋 プロジェクト概要

- **サービス名**: MoteTalk
- **概要**: モテる男のDMパターンを学習したAIが、非モテの典型パターンを回避し、自然にデートへつなげるサービス
- **ターゲット**: マッチングアプリで恋愛に悩む男性

## 🚀 技術スタック

- **フレームワーク**: Next.js 15.4.4
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **デプロイ**: Vercel推奨

## 📦 セットアップ

### 前提条件
- Node.js 18.0.0以上
- npm または yarn

### インストール
```bash
# リポジトリをクローン
git clone https://github.com/Fuki-san/motetalk-lp.git
cd motetalk-lp

# 依存関係をインストール
npm install
```

### 開発サーバー起動
```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## 📁 プロジェクト構造

```
motetalk-lp/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # ルートレイアウト
│   │   ├── page.tsx        # メインページ
│   │   └── globals.css     # グローバルスタイル
│   └── components/         # Reactコンポーネント
│       ├── Header.tsx      # ヘッダー
│       ├── Hero.tsx        # ヒーローセクション
│       ├── Problems.tsx    # 問題提起セクション
│       ├── Authority.tsx   # 権威性セクション
│       ├── Story.tsx       # 成功ストーリー
│       ├── Features.tsx    # 機能紹介
│       ├── Pricing.tsx     # 料金プラン
│       ├── FAQ.tsx         # よくある質問
│       ├── FinalCTA.tsx    # 最終CTA
│       └── Footer.tsx      # フッター
├── public/
│   └── img/               # 画像ファイル
│       ├── matching-app-before.svg
│       ├── matching-app-after.svg
│       ├── matching-app-fail.svg
│       └── matching-app-success.svg
└── docs/                  # ドキュメント
    ├── DESIGN.md          # デザイン仕様
    ├── CONTENT.md         # コンテンツ仕様
    └── DEPLOYMENT.md      # デプロイ手順
```

## 🎨 デザインガイドライン

- **プライマリカラー**: Pink (#E91E63)
- **セカンダリカラー**: Green (#4CAF50)
- **フォント**: Inter
- **レスポンシブ**: モバイルファースト

詳細は [docs/DESIGN.md](docs/DESIGN.md) を参照してください。

## 📝 コンテンツ管理

- **コピーライティング**: [docs/CONTENT.md](docs/CONTENT.md)
- **画像素材**: `public/img/` ディレクトリ
- **参考資料**: `LP_create.md`, `LP_cla.md`, `writing.md`

## 🚀 デプロイ

詳細は [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) を参照してください。

### Vercel推奨
```bash
npm run build
vercel --prod
```

## 🤝 開発ガイドライン

### コミットメッセージ
- `feat:` 新機能追加
- `fix:` バグ修正
- `style:` スタイル変更
- `docs:` ドキュメント更新
- `refactor:` リファクタリング

### ブランチ戦略
- `main`: 本番環境
- `develop`: 開発環境
- `feature/xxx`: 機能開発

## 📞 サポート

- **GitHub Issues**: バグ報告・機能要望
- **Pull Requests**: 改善提案歓迎

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。
