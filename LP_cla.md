<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>恋愛DMサポートAI - その返信、本当に大丈夫？</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Noto Sans JP', sans-serif;
            line-height: 1.6;
            color: #333;
            background: #fff;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* ヘッダー */
        header {
            background: #fff;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 20px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .logo {
            font-size: 24px;
            font-weight: 700;
            color: #E91E63;
            text-align: center;
        }

        /* ファーストビュー */
        .hero {
            background: linear-gradient(135deg, #E91E63 0%, #FF4081 100%);
            color: white;
            padding: 80px 0;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>') repeat;
            animation: float 20s linear infinite;
        }

        @keyframes float {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-100px); }
        }

        .hero-content {
            position: relative;
            z-index: 2;
        }

        .hero h1 {
            font-size: 48px;
            font-weight: 900;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            animation: slideInDown 1s ease-out;
        }

        .hero .subtitle {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 40px;
            opacity: 0.9;
            animation: slideInUp 1s ease-out 0.3s both;
        }

        @keyframes slideInDown {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideInUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .cta-button {
            display: inline-block;
            background: #FF1744;
            color: white;
            padding: 20px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-size: 20px;
            font-weight: 700;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(255, 23, 68, 0.4);
            position: relative;
            overflow: hidden;
            border: none;
            cursor: pointer;
        }

        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s;
        }

        .cta-button:hover::before {
            left: 100%;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(255, 23, 68, 0.6);
        }

        .free-badge {
            background: #FFC107;
            color: #333;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            margin-left: 10px;
            font-weight: 700;
            box-shadow: 0 4px 15px rgba(255, 193, 7, 0.4);
        }

        /* セクション共通 */
        .section {
            padding: 80px 0;
        }

        .section h2 {
            text-align: center;
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 50px;
            color: #2C3E50;
            position: relative;
        }

        .section h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: #E91E63;
            border-radius: 2px;
        }

        /* 問題提起セクション */
        .problems {
            background: #F8F9FA;
        }

        .problems-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 40px;
            margin-bottom: 50px;
        }

        .problem-card {
            background: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            border-left: 5px solid #E91E63;
            transition: transform 0.3s ease;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .problem-card:hover {
            transform: translateY(-5px);
        }

        .problem-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            display: block;
            border-radius: 50%;
        }

        .problem-card h3 {
            color: #2C3E50;
            margin-bottom: 15px;
            font-size: 20px;
            font-weight: 700;
        }

        /* 機能紹介セクション */
        .features {
            background: white;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 50px;
        }

        .feature-card {
            background: #F8F9FA;
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            transition: transform 0.3s ease;
            border: 2px solid transparent;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            border-color: #E91E63;
        }

        .feature-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            display: block;
            border-radius: 50%;
        }

        .feature-card h3 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
            color: #2C3E50;
        }

        /* 権威性セクション */
        .authority {
            background: white;
            border-top: 5px solid #E91E63;
            border-bottom: 5px solid #E91E63;
        }

        .authority-content {
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }

        .authority-badge {
            display: inline-block;
            background: linear-gradient(135deg, #E91E63 0%, #FF4081 100%);
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 30px;
            box-shadow: 0 8px 25px rgba(233, 30, 99, 0.3);
        }

        .authority-text {
            font-size: 20px;
            font-weight: 500;
            color: #2C3E50;
            line-height: 1.8;
        }

        .authority-highlight {
            color: #E91E63;
            font-weight: 700;
        }

        /* ストーリーセクション */
        .story {
            background: linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 100%);
            position: relative;
            overflow: hidden;
        }

        .story::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 200px;
            height: 200px;
            background: rgba(233, 30, 99, 0.1);
            border-radius: 50%;
            transform: translate(50%, -50%);
        }

        .story-content {
            position: relative;
            z-index: 2;
        }

        .story-timeline {
            max-width: 700px;
            margin: 0 auto;
        }

        .story-step {
            background: white;
            padding: 30px;
            border-radius: 20px;
            margin-bottom: 30px;
            border-left: 5px solid #E91E63;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            position: relative;
        }

        .story-step::before {
            content: '';
            position: absolute;
            left: -12px;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            background: #E91E63;
            border-radius: 50%;
            border: 4px solid white;
        }

        .story-step-number {
            display: inline-block;
            background: #E91E63;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            text-align: center;
            line-height: 30px;
            font-weight: 700;
            margin-right: 15px;
            font-size: 14px;
        }

        .story-step h3 {
            display: inline;
            font-size: 22px;
            font-weight: 700;
            color: #2C3E50;
            margin-bottom: 15px;
        }

        .story-step p {
            margin-top: 15px;
            font-size: 16px;
            color: #555;
            line-height: 1.6;
        }

        .story-result {
            background: linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%);
            color: white;
            text-align: center;
            padding: 40px;
            border-radius: 20px;
            margin-top: 40px;
        }

        .story-result h3 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 20px;
        }

        .story-result p {
            font-size: 18px;
            opacity: 0.9;
        }
        .demo {
            background: #F8F9FA;
        }

        .demo-example {
            background: white;
            padding: 40px;
            border-radius: 20px;
            margin-bottom: 40px;
            position: relative;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .before-after {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
        }

        .message-box {
            background: #F8F9FA;
            padding: 20px;
            border-radius: 15px;
            position: relative;
            margin-top: 20px;
        }

        .message-box.before {
            border-left: 5px solid #FF1744;
        }

        .message-box.after {
            border-left: 5px solid #4CAF50;
        }

        .message-box::before {
            position: absolute;
            top: -10px;
            left: 20px;
            padding: 5px 15px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: 700;
            color: white;
        }

        .message-box.before::before {
            content: '改善前';
            background: #FF1744;
        }

        .message-box.after::before {
            content: '改善後';
            background: #4CAF50;
        }

        /* 口コミセクション */
        .testimonials {
            background: white;
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
        }

        .testimonial-card {
            background: #F8F9FA;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            position: relative;
        }

        .testimonial-card::before {
            content: '⭐⭐⭐⭐⭐';
            display: block;
            text-align: center;
            margin-bottom: 20px;
            font-size: 24px;
        }

        .testimonial-text {
            font-style: italic;
            margin-bottom: 20px;
            font-size: 16px;
            color: #555;
        }

        .testimonial-author {
            text-align: right;
            font-weight: 700;
            color: #E91E63;
        }

        /* 料金プラン */
        .pricing {
            background: #F8F9FA;
        }

        .pricing-table {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .pricing-card {
            background: white;
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }

        .pricing-card:hover {
            transform: translateY(-10px);
        }

        .pricing-card.featured {
            border: 3px solid #E91E63;
            transform: scale(1.05);
        }

        .pricing-card.featured::before {
            content: '人気';
            position: absolute;
            top: 20px;
            right: -30px;
            background: #E91E63;
            color: white;
            padding: 5px 40px;
            font-size: 12px;
            font-weight: 700;
            transform: rotate(45deg);
        }

        .pricing-card h3 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 20px;
            color: #2C3E50;
        }

        .price {
            font-size: 48px;
            font-weight: 900;
            margin-bottom: 20px;
            color: #E91E63;
        }

        .price span {
            font-size: 18px;
            opacity: 0.8;
            font-weight: 500;
        }

        .features-list {
            list-style: none;
            margin-bottom: 30px;
            text-align: left;
        }

        .features-list li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }

        .features-list li::before {
            content: '✓';
            color: #4CAF50;
            font-weight: 700;
            margin-right: 10px;
        }

        .template-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
        }

        .template-option {
            background: #F8F9FA;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            border: 2px solid transparent;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .template-option:hover {
            border-color: #E91E63;
            background: #FFF;
        }

        .template-option h4 {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 10px;
            color: #2C3E50;
        }

        .template-option .price {
            font-size: 20px;
            font-weight: 700;
            color: #E91E63;
        }

        /* FAQ */
        .faq {
            background: white;
        }

        .faq-item {
            background: #F8F9FA;
            margin-bottom: 20px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .faq-question {
            background: #E91E63;
            color: white;
            padding: 20px;
            cursor: pointer;
            font-weight: 700;
            transition: all 0.3s ease;
        }

        .faq-question:hover {
            background: #C2185B;
        }

        .faq-answer {
            padding: 20px;
            display: none;
            background: white;
        }

        .faq-answer.active {
            display: block;
        }

        /* 最終CTA */
        .final-cta {
            background: #E91E63;
            color: white;
            text-align: center;
            padding: 80px 0;
        }

        .final-cta h2 {
            color: white;
            font-size: 42px;
            font-weight: 900;
            margin-bottom: 30px;
        }

        .final-cta h2::after {
            background: white;
        }

        .benefit-highlight {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 40px;
            backdrop-filter: blur(10px);
        }

        .benefit-highlight h3 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 15px;
        }

        .benefit-highlight p {
            font-size: 18px;
            opacity: 0.9;
        }

        /* フッター */
        footer {
            background: #2C3E50;
            color: white;
            text-align: center;
            padding: 40px 0;
        }

        /* レスポンシブ */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 32px;
            }

            .hero .subtitle {
                font-size: 18px;
            }

            .section {
                padding: 50px 0;
            }

            .section h2 {
                font-size: 28px;
            }

            .before-after {
                grid-template-columns: 1fr;
            }

            .pricing-card.featured {
                transform: none;
            }

            .pricing-table {
                grid-template-columns: 1fr;
            }

            .template-options {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="logo">💕 恋愛DMサポートAI</div>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>その返信、本当に大丈夫？</h1>
                <p class="subtitle">AIが教える、女性の心に響くメッセージの作り方</p>
                <a href="#" class="cta-button">
                    今すぐ3通無料で試してみる
                    <span class="free-badge">無料</span>
                </a>
            </div>
        </div>
    </section>

    <section class="section problems">
        <div class="container">
            <h2>こんな悩み、ありませんか？</h2>
            <div class="problems-grid">
                <div class="problem-card">
                    <img src="./img/problem-confused.jpg" alt="困っている男性" class="problem-icon">
                    <h3>既読スルーされがち</h3>
                    <p>せっかく送ったメッセージが無視されてしまう。何を返信すればいいかわからず、いつも「そうですね」「はい」ばかり...</p>
                </div>
                <div class="problem-card">
                    <img src="./img/problem-boring.jpg" alt="退屈そうな表情" class="problem-icon">
                    <h3>会話が盛り上がらない</h3>
                    <p>どうすれば楽しい会話ができるのかわからない。相手が興味を持ってくれるような話題が見つからない</p>
                </div>
                <div class="problem-card">
                    <img src="./img/problem-dating.jpg" alt="デートを誘えない男性" class="problem-icon">
                    <h3>デートに誘えない</h3>
                    <p>自然な誘い方がわからず、チャンスを逃してしまう。断られるのが怖くて一歩が踏み出せない</p>
                </div>
            </div>
            <div style="text-align: center; font-size: 18px; color: #666; font-weight: 500;">
                <p>「大丈夫、みんな最初は同じです。恋愛経験が少なくても、正しいアプローチを学べば必ず上達します。」</p>
            </div>
        </div>
    </section>

    <section class="section authority">
        <div class="container">
            <div class="authority-content">
                <div class="authority-badge">
                    🏆 恋愛心理学博士 田中信夫氏 監修
                </div>
                <p class="authority-text">
                    「<span class="authority-highlight">科学的根拠に基づいた恋愛コミュニケーション</span>を誰でも簡単に実践できるよう設計されています。心理学の観点から見ても、相手の感情に響くメッセージ作成をサポートする画期的なツールです。」
                </p>
            </div>
        </div>
    </section>

    <section class="section story">
        <div class="container">
            <div class="story-content">
                <h2>28歳エンジニア佐藤さんの成功ストーリー</h2>
                <div class="story-timeline">
                    <div class="story-step">
                        <span class="story-step-number">1</span>
                        <h3>マッチングアプリを始めるも...</h3>
                        <p>「こんにちは」「お疲れ様です」といった当たり障りのないメッセージばかり。20人とマッチしても会話が続いたのはわずか2人。デートまで発展したのは0人でした。</p>
                    </div>
                    <div class="story-step">
                        <span class="story-step-number">2</span>
                        <h3>恋愛DMサポートAIと出会う</h3>
                        <p>友人の紹介でこのサービスを知り、半信半疑で無料プランから開始。AIが提案する返信文の自然さと、相手の反応の違いに驚きました。「そんな視点があったのか」と目から鱗でした。</p>
                    </div>
                    <div class="story-step">
                        <span class="story-step-number">3</span>
                        <h3>みるみる変わる返信率</h3>
                        <p>プレミアムプランに切り替えて本格活用。相手のプロフィールに合わせたメッセージで返信率が格段にアップ。会話も自然に続くようになり、デートの誘いも成功するように。</p>
                    </div>
                    <div class="story-result">
                        <h3>結果：3ヶ月で理想の彼女ができました！</h3>
                        <p>「今では一人でも自信を持ってメッセージが送れます。恋愛だけでなく、職場でのコミュニケーションにも活かせています。」</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section features">
        <div class="container">
            <h2>AIがあなたの恋愛メッセージをサポート</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <img src="./img/feature-ai-suggest.jpg" alt="AI提案機能" class="feature-icon">
                    <h3>返信文自動提案</h3>
                    <p>相手の性格・関係性・プロフィール情報を分析し、最適な返信を提案。もう「何を返そう？」と悩む必要はありません。心理学に基づいた効果的なメッセージを生成します。</p>
                </div>
                <div class="feature-card">
                    <img src="./img/feature-multiple-choice.jpg" alt="選択肢" class="feature-icon">
                    <h3>複数パターン提案</h3>
                    <p>有料プランなら3つの異なるトーン（カジュアル・丁寧・ユーモア）で返信候補を提示。あなたの個性や相手との関係性に合わせて最適なスタイルを選択できます。</p>
                </div>
                <div class="feature-card">
                    <img src="./img/feature-templates.jpg" alt="テンプレート集" class="feature-icon">
                    <h3>シーン別テンプレート</h3>
                    <p>初回メッセージ、デートの誘い、関係進展まで、恋愛の各段階で使える実証済みテンプレートを豊富にご用意。成功率の高いメッセージパターンをすぐに活用できます。</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section demo">
        <div class="container">
            <h2>実際にこんな風に使えます</h2>
            <div class="demo-example">
                <h3 style="text-align: center; margin-bottom: 30px; color: #2C3E50; font-weight: 700;">初回メッセージの場合</h3>
                <div class="before-after">
                    <div class="message-box before">
                        <p><strong>送信:</strong> 「こんにちは」</p>
                        <p><strong>結果:</strong> 既読スルー... 😢</p>
                    </div>
                    <div class="message-box after">
                        <p><strong>送信:</strong> 「プロフィールの○○、すごく興味深いですね！僕も同じ趣味を持っているので、ぜひお話しさせてください😊」</p>
                        <p><strong>結果:</strong> 「ありがとうございます！」と返信が来た! 🎉</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section testimonials">
        <div class="container">
            <h2>実際に使った方の声</h2>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <p class="testimonial-text">「返信の質が格段に上がりました！今までの自分の返信がいかにつまらなかったか実感しました。」</p>
                    <p class="testimonial-author">— 26歳・会社員</p>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">「初デートにこぎつけることができました。AIの提案する誘い方が自然で、断られる恐怖がなくなりました。」</p>
                    <p class="testimonial-author">— 24歳・大学院生</p>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">「使い続けるうちに自分なりの文章力も上がった気がします。もう一人でも大丈夫そうです。」</p>
                    <p class="testimonial-author">— 29歳・エンジニア</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section pricing">
        <div class="container">
            <h2>あなたに合ったプランを選んでください</h2>
            <div class="pricing-table">
                <div class="pricing-card">
                    <h3>🆓 無料プラン</h3>
                    <div class="price">無料</div>
                    <ul class="features-list">
                        <li>3通まで無料</li>
                        <li>基本的な返信提案</li>
                        <li>簡単な分析結果</li>
                    </ul>
                    <a href="#" class="cta-button">今すぐ始める</a>
                </div>
                
                <div class="pricing-card featured">
                    <h3>💎 プレミアムプラン</h3>
                    <div class="price">¥1,980<span>/月</span></div>
                    <ul class="features-list">
                        <li>無制限利用</li>
                        <li>3つの返信候補</li>
                        <li>詳細な履歴管理</li>
                        <li>全テンプレート利用可能</li>
                        <li>効果測定レポート</li>
                        <li>優先サポート</li>
                    </ul>
                    <a href="#" class="cta-button">プレミアムで始める</a>
                </div>

                <div class="pricing-card">
                    <h3>📚 買い切りテンプレート</h3>
                    <div class="price">¥1,980<span>/永年</span></div>
                    <p style="margin-bottom: 20px; font-weight: 700;">お好きなテンプレート集を選択</p>
                    <div class="template-options">
                        <div class="template-option">
                            <h4>ユーモア集</h4>
                            <p class="price">¥1,980</p>
                        </div>
                        <div class="template-option">
                            <h4>ホテル誘導</h4>
                            <p class="price">¥1,980</p>
                        </div>
                        <div class="template-option">
                            <h4>初回メッセージ</h4>
                            <p class="price">¥1,980</p>
                        </div>
                        <div class="template-option">
                            <h4>デートの誘い</h4>
                            <p class="price">¥1,980</p>
                        </div>
                    </div>
                    <a href="#" class="cta-button">テンプレートを選ぶ</a>
                </div>
            </div>
        </div>
    </section>

    <section class="section faq">
        <div class="container">
            <h2>よくある質問</h2>
            <div class="faq-item">
                <div class="faq-question" onclick="toggleFAQ(this)">
                    Q: AIが作った文章って、女性にバレませんか？
                </div>
                <div class="faq-answer">
                    A: バレることはありません。AIはあなたの文章のクセや好みを学習し、「あなたらしさ」を保ちながら、より魅力的な表現に改善します。機械的な文章ではなく、自然で温かみのあるメッセージを提案します。
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="toggleFAQ(this)">
                    Q: 本当に返信率が上がるんですか？根拠はありますか？
                </div>
                <div class="faq-answer">
                    A: 心理学と恋愛コミュニケーションの専門知識をベースに開発されており、多くのユーザーから「返信が来やすくなった」「会話が続くようになった」という声をいただいています。無料プランでまずは効果を実感してください。
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="toggleFAQ(this)">
                    Q: 月額プランと買い切りプラン、どっちがお得ですか？
                </div>
                <div class="faq-answer">
                    A: 短期間で集中して使いたい方は月額プランがおすすめです。特定のシーン（初回メッセージなど）だけ困っている方や、長期的に参考にしたい方は買い切りプランがお得です。
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="toggleFAQ(this)">
                    Q: マッチングアプリ以外でも使えますか？
                </div>
                <div class="faq-answer">
                    A: はい！LINEやInstagramのDM、職場の気になる人へのメッセージなど、あらゆるシーンで活用できます。恋愛に限らず、人間関係を良くするコミュニケーションツールとしてもご利用いただけます。
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="toggleFAQ(this)">
                    Q: 恋愛初心者でも大丈夫ですか？
                </div>
                <div class="faq-answer">
                    A: むしろ恋愛初心者の方にこそ使っていただきたいサービスです。基本的な恋愛コミュニケーションから上級テクニックまで幅広くサポートし、自然に恋愛スキルが身につくよう設計されています。
                </div>
            </div>
        </div>
    </section>

    <section class="final-cta">
        <div class="container">
            <h2>今すぐ始めて、恋愛を変えよう</h2>
            <div class="benefit-highlight">
                <h3>🎯 無料で始められる安心感</h3>
                <p>まずは3通無料で効果を実感してください。気に入らなければ料金は一切かかりません。</p>
            </div>
            <a href="#" class="cta-button">
                3通無料で試してみる
                <span class="free-badge">無料</span>
            </a>
            <p style="margin-top: 20px; opacity: 0.8; font-weight: 500;">登録は30秒で完了 | クレジットカード不要</p>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 恋愛DMサポートAI. All rights reserved.</p>
            <p>プライバシーポリシー | 利用規約 | お問い合わせ</p>
        </div>
    </footer>

    <script>
        function toggleFAQ(element) {
            const answer = element.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            // 全てのFAQを閉じる
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.classList.remove('active');
            });
            
            // クリックされた項目が閉じていた場合は開く
            if (!isActive) {
                answer.classList.add('active');
            }
        }

        // スムーススクロール
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // スクロールアニメーション
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // 要素に初期スタイルを適用
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        });

        // CTAボタンのクリック追跡
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                // ここで実際の登録処理やページ遷移を実装
                console.log('CTA clicked: ', this.textContent);
                alert('無料登録画面に遷移します（デモ）');
            });
        });

        // テンプレートオプションの選択機能
        document.querySelectorAll('.template-option').forEach(option => {
            option.addEventListener('click', function() {
                // 他の選択を解除
                document.querySelectorAll('.template-option').forEach(opt => {
                    opt.style.borderColor = 'transparent';
                    opt.style.background = '#F8F9FA';
                });
                
                // 選択されたオプションをハイライト
                this.style.borderColor = '#E91E63';
                this.style.background = '#FFF';
                
                console.log('Template selected: ', this.querySelector('h4').textContent);
            });
        });

        // パフォーマンス最適化：画像の遅延読み込み
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // 実際の画像パスの設定（開発時）
        document.addEventListener('DOMContentLoaded', function() {
            // 画像が見つからない場合のフォールバック
            document.querySelectorAll('img').forEach(img => {
                img.addEventListener('error', function() {
                    // プレースホルダー画像に置き換え
                    this.src = `data:image/svg+xml;base64,${btoa(`
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
                            <rect width="80" height="80" fill="#E91E63" rx="40"/>
                            <text x="40" y="45" text-anchor="middle" fill="white" font-size="24">📱</text>
                        </svg>
                    `)}`;
                });
            });
        });
    </script>
</body>
</html>