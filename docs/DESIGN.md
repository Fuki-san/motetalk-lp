# デザイン仕様書

## 🎨 カラーパレット

### プライマリカラー
- **Pink-600**: `#E91E63` - メインカラー
- **Pink-500**: `#EC4899` - グラデーション用
- **Pink-200**: `#FCE7F3` - 背景・アクセント

### セカンダリカラー
- **Green-600**: `#059669` - 成功・ポジティブ
- **Green-500**: `#10B981` - グラデーション用
- **Green-200**: `#D1FAE5` - 背景・アクセント

### ニュートラルカラー
- **Gray-900**: `#111827` - テキスト（プライマリ）
- **Gray-700**: `#374151` - テキスト（セカンダリ）
- **Gray-600**: `#4B5563` - テキスト（テルティアリ）
- **Gray-200**: `#E5E7EB` - ボーダー
- **Gray-50**: `#F9FAFB` - 背景

### 状態カラー
- **Red-600**: `#DC2626` - エラー・失敗
- **Blue-600**: `#2563EB` - 情報・リンク

## 📝 タイポグラフィ

### フォントファミリー
- **メインフォント**: Inter
- **フォールバック**: system-ui, sans-serif

### フォントサイズ
```css
/* ヒーロー見出し */
text-4xl md:text-6xl (36px - 60px)

/* セクション見出し */
text-3xl md:text-4xl (30px - 36px)

/* サブ見出し */
text-xl md:text-2xl (20px - 24px)

/* 本文 */
text-base (16px)

/* キャプション */
text-sm (14px)
```

### フォントウェイト
- **Bold**: 700 - 見出し
- **Semibold**: 600 - サブ見出し
- **Medium**: 500 - 強調テキスト
- **Normal**: 400 - 本文

## 🎯 レイアウト

### コンテナ
- **最大幅**: `max-w-6xl` (1152px)
- **パディング**: `px-4 sm:px-6 lg:px-8`
- **マージン**: `mx-auto`

### グリッド
- **デスクトップ**: `md:grid-cols-3` (3列)
- **タブレット**: `md:grid-cols-2` (2列)
- **モバイル**: 1列

### スペーシング
- **セクション間**: `py-20` (80px)
- **コンポーネント間**: `mb-16` (64px)
- **アイテム間**: `gap-8` (32px)

## 🧩 コンポーネント仕様

### ボタン
```css
.cta-button {
  @apply bg-gradient-to-r from-pink-600 to-pink-500;
  @apply text-white font-bold py-4 px-8;
  @apply rounded-full shadow-lg;
  @apply hover:shadow-xl transition-all;
  @apply inline-flex items-center gap-2;
}
```

### カード
```css
.feature-card {
  @apply bg-white p-8 rounded-2xl;
  @apply shadow-md hover:shadow-lg;
  @apply transition-shadow duration-300;
}
```

### バッジ
```css
.free-badge {
  @apply bg-green-500 text-white;
  @apply px-3 py-1 rounded-full;
  @apply text-sm font-bold;
}
```

## 📱 レスポンシブデザイン

### ブレークポイント
- **sm**: 640px以上
- **md**: 768px以上
- **lg**: 1024px以上
- **xl**: 1280px以上

### モバイルファースト
- デフォルトはモバイル用スタイル
- ブレークポイントでデスクトップ用に拡張

## 🎭 アニメーション

### Framer Motion
- **初期状態**: `opacity: 0, y: 20`
- **アニメーション**: `opacity: 1, y: 0`
- **持続時間**: 0.6-0.8秒
- **遅延**: 0.2秒間隔

### ホバーエフェクト
- **ボタン**: シャドウ拡大
- **カード**: シャドウ拡大
- **リンク**: カラー変更

## 🖼️ 画像仕様

### SVG画像
- **Before/After**: 300x350px
- **共通画像**: 300x400px
- **フォーマット**: SVG（ベクター）

### 画像配置
- **中央揃え**: `mx-auto`
- **最大幅**: `max-w-4xl`
- **レスポンシブ**: `w-full`

## 🎨 グラデーション

### ヒーローセクション
```css
background: linear-gradient(135deg, #E91E63 0%, #EC4899 100%);
```

### 成功結果
```css
background: linear-gradient(135deg, #10B981 0%, #059669 100%);
```

## 📋 アクセシビリティ

### カラーコントラスト
- **テキスト**: 4.5:1以上
- **大きなテキスト**: 3:1以上

### フォーカス
- **フォーカスインジケーター**: 2px solid #E91E63
- **フォーカス可視性**: 常に表示

### キーボードナビゲーション
- **タブ順序**: 論理的な順序
- **スキップリンク**: 必要に応じて実装

## 🔧 カスタムCSS

### グローバルスタイル
```css
:root {
  --primary: #E91E63;
  --secondary: #10B981;
  --accent: #FCE7F3;
}
```

### ユーティリティクラス
```css
.text-shadow-lg {
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

## 📐 デザインシステム

### 一貫性の原則
1. **カラー**: 定義されたパレットのみ使用
2. **タイポグラフィ**: 階層を守る
3. **スペーシング**: 8pxの倍数
4. **ボーダー**: 統一された半径

### 再利用性
- コンポーネントベース設計
- プロップスによるカスタマイズ
- テーマ対応可能 