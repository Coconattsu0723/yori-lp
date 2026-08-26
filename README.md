# yori PERSONAL STYLING

> 私に似合うを、私が選べるように。

28〜35歳前後の働く女性を想定した、架空のパーソナルスタイリングサービスのランディングページです。

- [公開サイト](https://coconattsu0723.github.io/yori-lp/)
- [GitHubリポジトリ](https://github.com/Coconattsu0723/yori-lp)

## About

`yori PERSONAL STYLING`は、診断結果やスタイリストの感覚だけで「似合う服」を決めるのではなく、好み・仕事・休日・暮らし・手持ち服を一緒に整理する架空のサービスです。

その日のコーディネートを提案するだけでなく、これから自分で服を選べる「服選びの軸」を見つけることを目的としています。

制作種別：自主制作 / 架空のパーソナルスタイリングLP

## Target

服やファッションに興味はあるものの、次のような悩みを持つ28〜35歳前後の働く女性を想定しています。

- 服はあるのに、着たい服がない
- 買っても着なくなる服が増えている
- SNSで見た服が自分に合うか分からない
- 仕事と休日で服が固定化している
- 診断結果を実際の服選びに活かしきれない

## Goal

LPのメインCVは「初回スタイリング体験を予約する」です。

初回サービスとして、`FIRST STYLING SESSION`（90分 / ¥6,600・税込）を案内し、サービスの考え方への理解から予約までを一貫して設計しています。

## Design Concept

**Editorial × Personal × Light**

Editorial / Quiet / Personal / Light / Naturalをキーワードに、知的でありながら親しみやすく、静かで軽やかな印象を目指しました。

- SerifとJapanese Sansによる情報階層
- Warm Off Whiteを基調とした余白のあるレイアウト
- Charcoal / Muted Olive / Warm Grayによる落ち着いた配色
- 写真・Typography・Thin Borderを中心としたEditorialな表現

## Main Features

### Type Check

5問の簡易チェックから、現在の服選びの傾向を4タイプに整理します。優劣を判定する診断ではなく、「今どこで服選びに迷いやすいか」を把握するためのUIとして設計しました。

### Styling Simulation

`SCENE`（WORK / OFF / DINNER）、`MOOD`（CLEAN / SOFT / FRESH）、`BASE`（PANTS / SKIRT）を選択し、3 × 3 × 2の18通りを試せます。

全組み合わせに正式画像を用意し、選択内容に応じて画像・STYLE NOTE・WHY THIS STYLEをVanilla JavaScriptで切り替えています。

### FAQ

JavaScriptによるAccordion UIです。キーボード操作に加え、`aria-expanded`と`aria-controls`を使用して状態と回答の関係を伝えています。

### Reservation Form

ポートフォリオ用のダミー予約フォームです。実際の外部送信は行いません。

- 必須入力チェック
- メール形式チェック
- 同意確認
- エラー時のフォーカス移動
- 完了メッセージ表示

## Responsive Design

Mobile Firstで制作し、次の幅で表示と操作を確認しています。

`375px / 390px / 768px / 1024px / 1366px / 1440px`

Header / Navigation、Hero、1カラム・2カラムの切り替え、写真のサイズとCrop、余白、Styling Check UI、フォームを各幅に合わせて調整し、横スクロールが発生しないことを確認しました。

## Accessibility

- Heroのみ`h1`、主要セクションに`h2`、内部見出しに`h3`を使用
- 写真内容に応じたaltを設定
- `aria-expanded` / `aria-controls` / `aria-pressed`でUI状態を明示
- 診断結果等の更新に`aria-live`を使用
- フォームに`aria-invalid` / `aria-describedby`を使用
- `focus-visible`によるキーボードフォーカス表示
- フォームエラー時に該当項目へフォーカスを移動
- EscapeキーでMobile Menuを閉じられる操作を実装

## Performance / Image Optimization

正式写真の原本PNGを保持しながら、Web表示用のWebP派生画像を作成しました。

- Original PNG：約54.06 MiB
- WebP：約2.87 MiB
- 削減率：約94.69%
- Styling Simulationの18画像もWebP化
- Hero：1024 × 1536px / WebP / `fetchpriority="high"` / lazy loadingなし
- Hero以外：原則`loading="lazy"`

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Git
- GitHub
- GitHub Pages

フレームワークやUIライブラリは使用せず、HTML / CSS / JavaScriptで実装しています。

## OGP / Metadata

- OGP画像：1200 × 630px
- favicon：48 × 48px
- canonical
- Open Graph
- Twitter Card

公開URLに合わせたMetadataを設定済みです。

## Project Structure

```text
yori_lp_project/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
└── README.md
```

企画、コンテンツ構成、デザインルール、画像台帳、実装ルールなどの詳細仕様は`docs/`配下で管理しています。

## Notes

本サイトはポートフォリオ用に制作した架空のサービスサイトです。ブランド、サービス、人物、利用者の声、店舗設定などは実在するものではありません。
