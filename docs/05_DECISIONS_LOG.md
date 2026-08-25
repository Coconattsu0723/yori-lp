# yori DECISIONS LOG

## 0. このファイルの役割

このファイルは、yori LPで「何を決めたか / なぜ決めたか / 何を採用しなかったか」を残す実装前の意思決定記録です。

記録基準日：2026-08-25

---

## D-001 商材

- **決定**：パーソナルスタイリングサービスを採用する。
- **理由**：明確な課題から提供価値、初回体験予約までの導線を作れる。診断UIとStyling Simulationを自然に組み込み、写真・Typography・JavaScriptの実装力も示せる。既存ポートフォリオとの差別化にもつながる。
- **採用しなかった方向**：見た目だけで成立し、課題とCVが弱い商材。

---

## D-002 Target

- **決定**：28〜35歳前後の働く女性をメインターゲットにする。
- **理由**：仕事と私生活の変化、20代前半までの服がしっくりこなくなる感覚、情報過多と判断軸不足という課題を具体化できる。
- **採用しなかった方向**：年齢・性別だけで定義した広すぎるターゲット。

---

## D-003 Service Value

- **決定**：「似合う服を選ぶ」より、**自分で選べる軸をつくる**ことを優先する。
- **理由**：利用者がサービス後も自分で判断できる変化を提供し、朝の迷い・買い物の後悔・手持ち服の活用といった生活上の価値へつなげられる。
- **採用しなかった方向**：骨格診断やパーソナルカラーだけで正解を断定する、禁止リストを作る、スタイリストが一方的に服を選ぶサービス。

---

## D-004 Final CV

- **決定**：最終CVを**「初回スタイリング体験を予約する」**に一本化する。
- **理由**：90分・6,600円の初回体験はサービス内容を実際に理解できる具体的な入口であり、LP内の価値説明と直接つながる。
- **採用しなかった方向**：無料相談、資料請求、商品購入など複数CVの併置。

---

## D-005 Interactive Content

- **決定**：Type Check + Styling Simulationを採用する。
- **理由**：Type Checkで自分の迷い方を言語化し、Simulationでシーン・気分・ベースによる選び方の変化を体験できる。JavaScriptを装飾ではなく、サービス理解に必要なUIとして使える。
- **採用しなかった方向**：単なる着せ替え、似合う服を断定する診断、全18組み合わせ分の写真制作。
- **補足**：18回答は6スタイル程度へマッピングする。最終ロジックと結果文章は未確定。

---

## D-006 Design Concept

- **決定**：**Editorial × Personal × Light**。
- **理由**：ファッション誌の洗練と、服に自信がない人でも入りやすい距離感を両立できる。
- **採用しなかった方向**：高級ブティックのような緊張感、過度に可愛い表現、装飾の多いUI。

---

## D-007 Color

- **決定**：Warm Off White / Soft Ivory / Charcoal / Warm Gray / Light Greigeを基調に、Muted Oliveをアクセントとして採用する。
- **理由**：知的・親しみやすい・軽やかというブランド人格に合い、写真とTypographyを邪魔せず状態やCTAを示せる。
- **採用しなかった方向**：ピンク主体、強い原色、アクセントカラーの多用。
- **運用**：Muted Oliveは全体の10%前後までを目安にする。

---

## D-008 Typography

- **決定**：Editorial Serif × Japanese Sans Serifの方向を採用する。
- **理由**：英字見出しのEditorial感と、日本語本文・UIの可読性を両立するため。
- **候補**：Cormorant Garamond / Noto Sans JP。
- **未確定**：最終フォントは実装時の表示比較で決める。

---

## D-009 Photography

- **決定**：Quiet Editorial Lifestyle。同一人物・同一撮影シリーズを優先する。
- **理由**：人物を大量に増やすより、利用者が「自分も相談してみたい」と感じる距離感と、ブランド全体の一貫性を作れる。
- **採用しなかった方向**：過度に美しいファッションモデル、素材ごとに別人・別空間・別の光、強い広告表現、過剰レタッチ。

---

## D-010 Voice

- **決定**：Voice専用の人物画像を新規生成しない。
- **理由**：HeroやStyling Examplesと視覚的に競合させず、朝の迷い・買う前の判断・手持ち服の活用・好みの整理という提供価値をテキストで伝えるため。
- **採用しなかった方向**：口コミごとに新しい人物写真を大量生成する構成。
- **補足**：必要なら既存写真の小さなCropを使う。

---

## D-011 Icons

- **決定**：Flowを含む補助アイコンは画像生成せず、SVG / CSSで実装する。
- **理由**：写真とTypographyを主役にし、色・Stroke・サイズ・状態を実装側で一貫して制御しやすくするため。
- **採用しなかった方向**：画像生成アイコン、装飾的なイラストセット、過度に丸いFillアイコン。
- **Style**：Thin Line / Fillなし / Stroke統一 / Charcoal、ActiveのみMuted Olive。

---

## D-012 Final CTA Story

- **決定**：HeroからFinal CTAへ次の写真ストーリーを採用する。

```text
Hero：選んでいる
↓
Final CTA：選べている
```

- **理由**：サービスの利用前後を劇的変身ではなく、迷いが整理され自分で選べるようになる変化として示せる。
- **採用しなかった方向**：過度なBefore / After、派手な変身表現、外見評価中心の締め方。

---

## D-013 Technology

- **決定**：HTML5 / CSS3 / Vanilla JavaScript / Mobile First。
- **理由**：Semantic HTML、Responsive、Type Check、Simulation、FAQ、Form等の基礎実装力を明確に示せる。
- **採用しなかった方向**：必要性が明確でないJavaScriptフレームワーク。

---

## D-014 Responsive Process

- **決定**：375 → 390 → 768 → 1024 → 1366 → 1440の順で確認する。
- **理由**：375pxを基準にMobile Firstで整え、Tablet・PCで構造が変わる地点だけをBreakpointとして判断するため。
- **採用しなかった方向**：確認幅ごとにmedia queryを作る、SPが固まる前にPCを先行する進め方。

---

## D-015 Image Production

- **決定**：正式画像17点を採用済みとし、Voice専用画像とFlow / UI Icon画像は追加しない。
- **理由**：Hero、Stylist、About、Studio、Simulation、Examples、First Experience、MY STYLE NOTE、Final CTAに必要な写真が揃い、追加生成より実装上の役割整理を優先できるため。
- **採用しなかった方向**：用途が重複する写真の追加、Flowアイコンの画像生成。

---

## D-016 Markdown Source of Truth

- **決定**：`00_PROJECT_BRIEF.md`〜`05_DECISIONS_LOG.md`の6ファイルを実装時の正式正本とする。
- **理由**：企画・情報設計・デザイン・画像・実装・意思決定を役割別に参照できるようにするため。
- **既存資料の扱い**：`LP_PROJECT_BASE_SKILL.md`はBase Rule、`YORI_PROJECT_MASTER.md`はMaster Archive、`YORI_VISUAL_PRODUCTION_HANDOFF.md`はVisual Production Archiveとして削除せず残す。

---

## 未確定事項

- 最終フォント、Type Scale、Breakpoint、Spacing等の実装値
- Header / Footerの最終項目
- 主要コピー以外の各セクション本文
- Type Checkの質問・選択肢・配点・判定ロジック・結果本文
- Styling Simulationの回答マッピング・STYLE NOTE・WHY THIS STYLE
- Styling ExamplesのUser Condition / User Problem / Styling Direction / Why This Works
- Voiceの件数・属性・最終本文
- FAQの最終質問・回答
- Reservation Formの項目・Validation・エラー文・完了文
- 架空スタジオの具体的なエリア・住所表現
- OGP / favicon / ロゴ / 公開URL / canonical

