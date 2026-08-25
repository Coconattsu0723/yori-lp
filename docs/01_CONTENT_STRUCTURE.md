# yori CONTENT STRUCTURE

## 0. このファイルの役割

このファイルは、LPの情報設計、正式コピー、各セクションの役割をまとめた実装前の正式正本です。最終未確定の文章は「未確定」と明記します。

---

## 1. 正式構成

```text
Header
Hero
Problem
Insight
Styling Check
  ├─ Type Check
  └─ Styling Simulation
About yori
What You Get
Styling Examples
First Styling Experience
Stylist
Voice
Price
Flow
FAQ
Final CTA
Reservation Form
Footer
```

心理導線：

```text
私向けかも
↓
まさにこれで困っている
↓
服が足りないことが問題ではなかった
↓
自分はどこで迷っているのか知る
↓
yoriなら整理できそう
↓
実際に自分にも使えそう
↓
何をするサービスか分かった
↓
このスタイリストなら相談できそう
↓
料金・流れ・不安が解消される
↓
一度体験してみよう
```

---

## 2. 正式主要コピー

### Brand Message / Hero Main Copy

**私に似合うを、私が選べるように。**

### Hero Sub Copy

**好みも、仕事も、暮らしも。  
今のあなたに合う服選びを一緒に整理して、  
これから自分で選べる「服選びの軸」を見つけます。**

### Hero CTA

**初回スタイリング体験を予約する**

### Service Key Message

**似合う服を教えるだけではなく、自分で選べるようになるために。**

### Final CTA Heading

**これからの服選びを、一度整理してみませんか。**

### Final CTA Button

**初回スタイリング体験を予約する**

### 言葉のルール

使いたい言葉：私らしい / 選ぶ / 似合う / 好き / 暮らし / 迷う / 整える / 軸 / 今の自分 / これから

避けたい言葉：垢抜け / モテ / ダサい / 正解コーデ / 劇的変身 / 絶対似合う / 年齢相応 / 女子力 / コンプレックス解消

---

## 3. セクション仕様

### 3.1 Header

- **Section Name**：Header
- **ユーザー心理**：ブランド名とページの全体像を把握したい。
- **役割**：主要セクションへの移動と予約導線を提供する。
- **伝える内容**：`yori / PERSONAL STYLING`、主要ナビゲーション、予約CTA。
- **前後とのつながり**：ページ全体の入口としてHeroへつなぎ、スクロール中も必要な情報へ戻れる状態をつくる。
- **必要ビジュアル**：正式画像なし。ロゴ表現の最終仕様は未確定。
- **CTAとの関係**：初回体験予約への短い導線を置く。

### 3.2 Hero

- **Section Name**：Hero
- **ユーザー心理**：「自分向けのサービスかもしれない」と感じる。
- **役割**：ブランドの価値と行動を最初に提示する。
- **伝える内容**：Hero Main Copy、Hero Sub Copy、Hero CTA。
- **前後とのつながり**：Headerから受け取り、Problemの共感へつなぐ。
- **必要ビジュアル**：`assets/images/photos/hero/hero_main.png`。人物が服を「選んでいる」場面。
- **CTAとの関係**：主要CTAを提示する。押下後の遷移先はReservation Formを基本候補とし、実装時に確定する。

### 3.3 Problem

- **Section Name**：Problem
- **ユーザー心理**：「まさにこれで困っている」と自分ごと化する。
- **役割**：表面的な服選びの悩みを言語化する。
- **伝える内容**：朝迷う、服はあるのに着たい服がない、買っても着ない、仕事服が無難、診断結果を活かせない等。
- **前後とのつながり**：Heroの共感を具体化し、Insightで本質的な課題へ視点を移す。
- **必要ビジュアル**：新規正式画像なし。文章と余白を中心に構成。
- **CTAとの関係**：直接予約を迫らず、課題認識を深める。

### 3.4 Insight

- **Section Name**：Insight
- **ユーザー心理**：「服が足りないことが問題ではなかった」と気づく。
- **役割**：深層課題を「服選びの軸が整理されていないこと」と定義する。
- **伝える内容**：情報量ではなく、自分の場合の判断基準へ変換できていないこと。
- **前後とのつながり**：Problemの悩みに理由を与え、Styling Checkで自分の迷い方を確かめる動機をつくる。
- **必要ビジュアル**：新規正式画像なし。Key MessageとTypographyを主役にする。
- **CTAとの関係**：サービス価値の理解を通じて、後続CTAの納得度を高める。

### 3.5 Styling Check

- **Section Name**：Styling Check
- **ユーザー心理**：「自分はどこで迷っているのか知りたい」。
- **役割**：Type CheckとStyling Simulationをまとめ、ユーザーが自分の選び方を言語化・体験できる場にする。
- **伝える内容**：STEP 1は迷い方の簡易チェック、STEP 2はシーン・気分・ベースによる選択の変化。
- **前後とのつながり**：Insightを体験へ変え、About yoriで「一緒に整理するサービス」へ接続する。
- **必要ビジュアル**：Type Checkは画像不要。Simulationは正式採用済み7画像を使用。
- **CTAとの関係**：診断自体を最終CVにせず、サービスの必要性を自分ごと化する中間体験とする。

#### Type Check

- **Section Name**：Type Check / 服選びタイプ診断
- **ユーザー心理**：「自分はどこで迷っているのか知りたい」。
- **役割**：服選びの迷い方を簡易チェックで言語化する。
- **伝える内容**：5問程度、4タイプ、断定しない結果表現。
- **前後とのつながり**：Insightの気づきを自己理解へ変え、Styling Simulationの選択体験へつなぐ。
- **必要ビジュアル**：正式画像なし。Progress、選択肢、結果UIはHTML / CSS / JavaScriptで実装。
- **CTAとの関係**：診断完了を最終CVにせず、About yoriと初回体験への理解を深める。

目的：自分の服選びを言語化し、迷い方に気づくための5問程度の簡易チェック。

質問テーマ：

1. 朝、服を選ぶとき
2. 服を買うとき
3. SNSや雑誌を見たあと
4. クローゼットを見たとき
5. 今一番変えたいこと

結果タイプ：

```text
TYPE 01 情報を集めすぎタイプ
TYPE 02 いつもの服に戻るタイプ
TYPE 03 買ってから迷うタイプ
TYPE 04 無難に整えすぎタイプ
```

- 性格・体型・似合う服を断定しない。
- タイプに優劣をつけない。
- **服選びの迷い方を整理する簡易チェック**と明記する。
- 「今のあなたには、こんな傾向があるかもしれません。」程度の柔らかな表現を使う。
- 最終質問文、選択肢、配点、判定ロジック、結果本文は未確定。

#### Styling Simulation

- **Section Name**：Styling Simulation
- **ユーザー心理**：「シーンや気分が変わると、選び方も変わる」と体験する。
- **役割**：選択条件と服装の関係を写真と理由で示す。
- **伝える内容**：SCENE / MOOD / BASE、STYLE NOTE、WHY THIS STYLE。
- **前後とのつながり**：Type Checkの自己理解を具体的な選択体験へ移し、About yoriのサービス価値へつなぐ。
- **必要ビジュアル**：`assets/images/photos/simulation/`内のBase Visual＋Variation 01〜06。
- **CTAとの関係**：自分で選べる軸の価値を体験させ、初回体験予約への関心を高める。

「あなたに似合う服を判定する機能」ではなく、同じ人でもシーン・気分・普段の好みによって選択が変わることを体験するUIです。

選択項目：

```text
SCENE：WORK / OFF / DINNER
MOOD：CLEAN / SOFT / FRESH
BASE：PANTS / SKIRT
```

結果表示：

- STYLE NOTE
- WHY THIS STYLE

18組み合わせすべての写真を作らず、回答を6スタイル程度へマッピングします。正式画像はBase VisualとVariation 01〜06の7点です。各組み合わせの最終マッピング、STYLE NOTE本文、WHY THIS STYLE本文は未確定です。

### 3.6 About yori

- **Section Name**：About yori
- **ユーザー心理**：「yoriなら一緒に整理できそう」。
- **役割**：正解を押しつけず、利用者と一緒に服選びを整理するサービスであることを説明する。
- **伝える内容**：好み・似合う・仕事・休日・暮らし・手持ち服等を総合的に整理し、自分で選べる軸をつくること。
- **前後とのつながり**：Styling Checkで得た気づきをサービス価値へ変え、What You Getで成果を具体化する。
- **必要ビジュアル**：`assets/images/photos/about/about_styling-session.png`。補助候補として`assets/images/photos/studio/studio_main.png`。
- **CTAとの関係**：サービスへの納得をつくり、後続の体験内容・料金確認へ進ませる。

### 3.7 What You Get

- **Section Name**：What You Get
- **ユーザー心理**：「体験後に何が残るのか知りたい」。
- **役割**：MY STYLE NOTEを通じてサービス成果を具体化する。
- **伝える内容**：MY BASE / SILHOUETTE / COLOR / MY RULE / NEXT ITEM。禁止リストではないこと。
- **前後とのつながり**：About yoriの抽象的価値を具体化し、Styling Examplesへつなぐ。
- **必要ビジュアル**：`assets/images/photos/style-note/my-style-note_visual.png`。
- **CTAとの関係**：体験の持ち帰り価値を示し、料金に対する納得を支える。

### 3.8 Styling Examples

- **Section Name**：Styling Examples
- **ユーザー心理**：「実際に自分にも使えそう」と感じる。
- **役割**：利用シーンごとに、服選びの方向性と理由を見せる。
- **伝える内容**：CASE 01 Office / CASE 02 Weekend / CASE 03 Dinner。
- **前後とのつながり**：What You Getの考え方を具体例にし、First Styling Experienceで相談方法を示す。
- **必要ビジュアル**：`styling-case_office.png` / `styling-case_weekend.png` / `styling-case_dinner.png`。
- **CTAとの関係**：自分の生活への適用イメージをつくり、初回体験への関心を高める。

各ケースの正式素材と現段階の文章ステータス：

| Case | Visual Direction | User Condition | User Problem | Styling Direction | Why This Works |
|---|---|---|---|---|---|
| CASE 01 Office | 仕事向けの落ち着いたジャケット＋パンツ | 未確定 | 未確定 | 未確定 | 未確定 |
| CASE 02 Weekend | ライトブルー＋オフホワイトの軽やかな休日スタイル | 未確定 | 未確定 | 未確定 | 未確定 |
| CASE 03 Dinner | ボルドー系トップス＋チャコールパンツ | 未確定 | 未確定 | 未確定 | 未確定 |

### 3.9 First Styling Experience

- **Section Name**：First Styling Experience
- **ユーザー心理**：「何をするサービスか具体的に知りたい」。
- **役割**：初回体験の方法、時間、流れ、成果を説明する。
- **伝える内容**：90分、6,600円、1対1、対面 / オンライン、商品購入不要、5ステップ、MY STYLE NOTE。
- **前後とのつながり**：Styling Examplesの期待を具体的な体験へ移し、Stylistへの信頼確認につなぐ。
- **必要ビジュアル**：`assets/images/photos/first-experience/first-styling_experience.png`、空間補助として`studio_main.png`。
- **CTAとの関係**：予約判断に必要な基本情報を提示し、主要CTAを置く候補セクションとする。

### 3.10 Stylist

- **Section Name**：Stylist
- **ユーザー心理**：「このスタイリストなら相談できそう」。
- **役割**：担当者の人物像と考え方を伝え、対人サービスへの不安を下げる。
- **伝える内容**：佐倉真帆、34歳前後、経歴方向、穏やかで話しかけやすい人物像、「好き」と生活実用性を大切にする考え方。
- **前後とのつながり**：体験内容の次に担当者への信頼をつくり、Voiceで利用後の変化を補強する。
- **必要ビジュアル**：`assets/images/photos/stylist/stylist_maho-portrait.png`。
- **CTAとの関係**：相談相手への不安を解消し、予約の心理的ハードルを下げる。

### 3.11 Voice

- **Section Name**：Voice
- **ユーザー心理**：「利用すると生活がどう変わるのか知りたい」。
- **役割**：外見変化ではなく、服選びの判断力が整う価値を示す。
- **伝える内容**：朝迷う時間が減る、買う前に判断できる、手持ち服を活かせる、自分の好みが整理できる等。
- **前後とのつながり**：Stylistへの信頼を利用後の変化で補い、Priceで費用を確認する準備をつくる。
- **必要ビジュアル**：新規正式画像なし。テキスト中心＋必要なら既存写真の小さなCrop。
- **CTAとの関係**：成果への期待を具体化し、価格への納得を支える。

口コミの最終件数、属性、本文は未確定。「おしゃれになった」だけの表現にはしません。

### 3.12 Price

- **Section Name**：Price
- **ユーザー心理**：「料金と選択肢を比較したい」。
- **役割**：通常サービスを示しつつ、初回体験を主な入口として明確にする。
- **伝える内容**：FIRST STYLING 90分 / 6,600円、PERSONAL STYLING 120分 / 13,200円、SHOPPING SUPPORT 120分 / 16,500円。
- **前後とのつながり**：Voiceの価値確認を費用判断へ移し、Flowで申込後の不安を解消する。
- **必要ビジュアル**：新規正式画像なし。CardとTypographyで構成。
- **CTAとの関係**：FIRST STYLINGを最も強く見せ、初回体験予約へつなぐ。

### 3.13 Flow

- **Section Name**：Flow
- **ユーザー心理**：「予約後に何が起こるか知りたい」。
- **役割**：初回体験の5ステップを順序立てて説明する。
- **伝える内容**：事前スタイルチェック / ヒアリング / スタイリング / 服選びの軸を整理 / MY STYLE NOTE。
- **前後とのつながり**：料金確認後の手続き不安を減らし、FAQで残る疑問を解消する。
- **必要ビジュアル**：画像素材なし。Thin LineのSVG / CSSアイコンで実装予定。
- **CTAとの関係**：申込後の見通しを示し、予約直前の不安を下げる。

### 3.14 FAQ

- **Section Name**：FAQ
- **ユーザー心理**：「自分の状況でも利用できるか確認したい」。
- **役割**：予約前に残る実務的な疑問を解消する。
- **伝える内容**：確定情報として、対面 / オンライン、商品購入不要、手持ち服持参可、写真共有可、事前決済を扱う。最終質問文・回答文は未確定。
- **前後とのつながり**：Flowで生じる細かな疑問を解消し、Final CTAへつなぐ。
- **必要ビジュアル**：新規正式画像なし。Accordionの開閉記号はSVG / CSS。
- **CTAとの関係**：最後の障壁を取り除き、Final CTAの行動を支える。

### 3.15 Final CTA

- **Section Name**：Final CTA
- **ユーザー心理**：「一度体験してみよう」。
- **役割**：ブランドストーリーを締め、予約行動を明確に促す。
- **伝える内容**：Final CTA HeadingとFinal CTA Button。
- **前後とのつながり**：FAQで不安を解消した後、Reservation Formへ送る。
- **必要ビジュアル**：`assets/images/photos/final-cta/final-cta_ready-to-go.png`。Heroの「選んでいる」から「選べている」への変化を示す。
- **CTAとの関係**：最終の主要CTA。Reservation Formへ接続する。

### 3.16 Reservation Form

- **Section Name**：Reservation Form
- **ユーザー心理**：「必要事項を確認し、安心して予約したい」。
- **役割**：ポートフォリオ上のダミー予約操作を完了させる。
- **伝える内容**：入力項目、確認事項、エラー、完了メッセージ。最終項目は未確定。
- **前後とのつながり**：Final CTAの行動先として機能し、Footer前に完了状態を返す。
- **必要ビジュアル**：新規正式画像なし。
- **CTAとの関係**：最終CVの操作地点。外部送信は行わない。

### 3.17 Footer

- **Section Name**：Footer
- **ユーザー心理**：ブランド情報とページの終端を確認する。
- **役割**：ブランド表記、必要な補助情報、ページ内導線をまとめる。
- **伝える内容**：`yori / PERSONAL STYLING`。その他の項目は未確定。
- **前後とのつながり**：Reservation Formの完了後にページを静かに閉じる。
- **必要ビジュアル**：新規正式画像なし。
- **CTAとの関係**：主要CTAを重複させるかは未確定。必要ならページ内導線のみ置く。

---

## 4. 未確定事項

- Headerの最終ナビゲーション項目とモバイルメニュー文言
- 各セクションの正式見出し・本文（主要コピー以外）
- Type Checkの質問文、選択肢、配点、判定ロジック、結果本文
- Styling Simulationの18回答から6画像への最終マッピング
- STYLE NOTE / WHY THIS STYLEの最終本文
- Styling Examples各ケースのUser Condition / User Problem / Styling Direction / Why This Works
- Voiceの件数、属性、最終口コミ本文
- FAQの最終質問と回答
- Reservation Formの入力項目、確認文、エラー文、完了文
- Footerの最終掲載項目
