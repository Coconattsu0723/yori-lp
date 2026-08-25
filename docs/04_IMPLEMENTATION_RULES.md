# yori IMPLEMENTATION RULES

## 0. このファイルの役割

このファイルは、実装開始後に守るHTML / CSS / JavaScript・レスポンシブ・Accessibilityの正式ルールです。

**現在は実装未着手です。このファイルの作成をもってHTML / CSS / JavaScriptを作成・編集してよいことにはなりません。**

---

## 1. Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Mobile First
- JavaScriptフレームワークは使用しない

フレームワークが必要になった場合は、必要性を説明し、ユーザー確認後に判断します。

---

## 2. Source of Truth

実装時は以下の6ファイルを正式正本として参照します。

```text
docs/00_PROJECT_BRIEF.md
docs/01_CONTENT_STRUCTURE.md
docs/02_DESIGN_RULES.md
docs/03_IMAGE_ASSETS.md
docs/04_IMPLEMENTATION_RULES.md
docs/05_DECISIONS_LOG.md
```

既存の以下3ファイルはBase Rule / Master Archive / Visual Production Archiveとして残します。

```text
docs/LP_PROJECT_BASE_SKILL.md
docs/YORI_PROJECT_MASTER.md
docs/YORI_VISUAL_PRODUCTION_HANDOFF.md
```

正本間に矛盾が見つかった場合は推測で実装せず、確認事項として止めます。

---

## 3. HTML

- Semantic HTMLを使用する。
- Heroのみ`h1`を使用する。
- 主要セクションは`h2`を使用する。
- 見出しレベルを見た目だけで飛ばさない。
- 操作は用途に応じて`button` / `a`を使い分ける。
- Formには`form` / `label` / 適切な入力要素を使用する。
- Navigationには`nav`を使用する。
- JavaScriptなしでもブランド、サービス、料金、流れ、FAQ等の主要情報を読める構造にする。
- 意味のない`div`の多用を避ける。

---

## 4. CSS

- CSS Custom Propertiesで色・余白・Container・Typography等を共通管理する。
- Grid / Flexを用途に応じて使い分ける。
- 不必要な固定高さを避ける。
- 写真には用途に応じて`object-fit`と`object-position`を使用する。
- 画像比率の安定には`aspect-ratio`を使用する。
- Mobile Firstで基本スタイルを書き、必要な地点だけ拡張する。
- 共通Componentとセクション固有スタイルの役割を分ける。
- Shadowに頼らず、余白・背景・Borderで階層を作る。
- Hoverだけに意味を持たせない。

---

## 5. Responsive

確認順：

```text
375 → 390 → 768 → 1024 → 1366 → 1440
```

### 構造方針

- 375 / 390：1カラム中心
- 768：Tabletとして扱い、無理にPC化しない
- 1024前後：Editorialな左右レイアウトを検討
- 1366 / 1440：Container、余白、行長、写真比率を確認
- 確認幅ごとにmedia queryを作らない
- レイアウト構造が変わる地点のみBreakpoint化する

### 各幅で確認すること

- 横スクロール
- 見出し・本文・CTAの改行
- Section間余白
- 画像Cropと人物位置
- Navigation
- Type Check / Simulationの操作性
- Price Card
- FAQ
- Form

Breakpointの最終値は未確定です。

---

## 6. JavaScript

### 主な役割

- Mobile Navigation
- Styling Type Check
- Styling Simulation
- FAQ Accordion
- Reservation Formのダミー送信・状態管理
- 必要な操作状態管理

装飾目的でJavaScriptを増やしすぎません。静的HTMLとCSSで成立する内容はJavaScriptへ移しません。

---

## 7. Styling Type Check

実装時に以下を管理します。

- 現在質問番号
- 回答状態
- Progress
- 結果タイプ
- Keyboard操作
- Result再表示
- 「もう一度診断」

### 表現ルール

- 性格・体型・似合う服を断定しない。
- タイプに優劣をつけない。
- 「今のあなたには、こんな傾向があるかもしれません。」程度の柔らかな表現にする。
- 服選びの迷い方を整理する簡易チェックであることを明記する。

質問、選択肢、配点、判定ロジック、結果本文は未確定のため、確定前に実装しません。

---

## 8. Styling Simulation

選択状態：

```text
SCENE：WORK / OFF / DINNER
MOOD：CLEAN / SOFT / FRESH
BASE：PANTS / SKIRT
```

### 実装要件

- 選択中のSCENE / MOOD / BASEを状態として管理する。
- 18組み合わせを6画像程度へマッピングする。
- 写真と同時にSTYLE NOTE / WHY THIS STYLEを更新する。
- 選択状態を色だけで伝えない。
- Keyboardで選択できる構造にする。
- 結果切替時のFocusと読み上げ方法を検討する。
- 画像の事前読み込みは通信量とのバランスを見て判断する。

最終マッピングと結果文章は未確定のため、確定前にロジックを固定しません。

---

## 9. Accessibility

最低限、以下を確認します。

- Semantic HTML
- Heading Structure
- 画像の`alt`
- Formの`label`
- `aria-expanded`
- `aria-controls`
- Keyboard操作
- Escapeで閉じる操作
- `focus-visible`
- 十分なTap Target
- Color Contrast
- `prefers-reduced-motion`
- Form Error
- Form Completion Message

### 補足

- Mobile Navigationは開閉状態を支援技術へ伝える。
- FAQはbuttonと関連パネルを関連づける。
- エラーは色だけで示さず、入力項目と文章で関連づける。
- 自動スコアだけで判断せず、Keyboardと実表示を確認する。

---

## 10. Reservation Form

ポートフォリオ用のため、以下を正式方針とします。

- 外部送信なし
- ダミー送信
- 入力チェック後に完了メッセージを表示
- JavaScript無効時に誤送信されない構造
- 外部サービスや実在の予約先へ接続しない
- 個人情報を保存しない

最終入力項目、必須項目、エラー文、完了文は未確定です。

---

## 11. Image Handling

- `03_IMAGE_ASSETS.md`記載の正式素材だけを正式画像として扱う。
- PNG原本を削除・上書きしない。
- 画像内へHTMLで扱うべきコピーを焼き込まない。
- `width` / `height`または`aspect-ratio`で表示領域を確保する。
- Heroは優先読み込みを検討する。
- 下層画像はlazy loadingを検討する。
- 公開前最適化では原本を残して派生ファイルを作る。
- 今回は画像最適化、WebP化、Crop、色補正を行わない。

---

## 12. Motion

- CTA Hoverは小さな色変化とArrow移動程度。
- 派手なアニメーションは禁止。
- 動きは情報理解と操作状態の補助に限定する。
- `prefers-reduced-motion`へ対応する。

---

## 13. SEO / Metadata

実装後・公開前に以下を確認します。

- `title`
- `meta description`
- `lang`
- `viewport`
- canonical
- OGP
- Twitter Card
- favicon

正式公開URL確定前に、仮のcanonicalやOGP URLを勝手に設定しません。OGP / faviconは現時点で未制作です。

---

## 14. 実装開始前の未確定事項

- Type Checkの質問・選択肢・判定ロジック・結果本文
- Styling Simulationのマッピング・STYLE NOTE・WHY THIS STYLE
- 各セクションの最終本文
- Voiceの最終本文
- FAQの最終質問・回答
- Reservation Formの項目・Validation・メッセージ
- 最終フォント
- Breakpointと各種Design Tokenの最終数値
- 画像の最終Cropと派生ファイル方針
- Mobile Navigationの項目・挙動

