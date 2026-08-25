# yori DESIGN RULES

## 0. このファイルの役割

このファイルは、配色・Typography・余白・UI・写真・アイコンの実装前デザイン正本です。数値に幅がある項目は、実装時に表示比較して最終調整します。

---

## 1. Design Concept

**Editorial × Personal × Light**

ファッション誌の洗練を持ちながら、服に自信がない人でも入りやすいパーソナルな空気感を目指します。

### Brand Personality

- 知的
- 親しみやすい
- 軽やか

### Keywords

- Editorial
- Quiet
- Personal
- Light
- Natural

---

## 2. Colors

| Role | Name | HEX | Usage |
|---|---|---|---|
| Base | Warm Off White | `#F7F5F0` | ページ背景 |
| Surface | Soft Ivory | `#FCFBF8` | Card・Form等の面 |
| Text | Charcoal | `#2E302D` | 本文・主要文字 |
| Sub Text | Warm Gray | `#77756F` | 補助文字 |
| Line | Light Greige | `#D8D4CA` | Border・区切り |
| Accent | Muted Olive | `#7D8368` | Primary CTA・Active状態 |
| Accent Light | Pale Olive | `#E8E9DF` | 淡い強調面 |
| Sub Accent | Sand Beige | `#C8BBA8` | 補助的な温かみ |

- Muted Oliveは全体の10%前後までを目安にし、強調しすぎない。
- ピンク主体にはしない。
- 実装時はコントラストを確認し、文字色と背景色の組み合わせを調整する。

---

## 3. Typography

方向：

**Editorial Serif × Japanese Sans Serif**

- 英字・装飾的見出し：Serif
- 日本語本文・UI：Sans Serif
- 候補：Cormorant Garamond / Noto Sans JP

最終フォントは実装時に表示比較して確定するため、現段階では正式確定ではありません。

### 運用方針

- Heroのみ`h1`を使用する。
- 主要セクションは`h2`を使用する。
- 英字ラベルを装飾目的で過剰に増やさない。
- 本文の可読性を優先し、長文にSerifを多用しない。
- 最終のFont Size、Line Height、Letter Spacing、Font Weightは未確定。

---

## 4. Border Radius

- Card：8〜12px
- CTA：4〜8px
- Form：6〜8px
- Diagnosis Option：約8px
- Photo：角丸なし〜ごく小さく

丸みをブランドの主役にせず、Editorialなシャープさを残します。

---

## 5. Border

基本：

```text
1px / Light Greige
```

BorderはCard、Form、選択肢、区切りに使用し、装飾線を増やしすぎません。

---

## 6. Shadow

原則ほぼ使用しません。階層は余白・背景色・Borderで表現します。

---

## 7. Spacing

### SP

- Section：80〜96px程度
- Content：32〜48px
- Small：12〜24px

### PC

- Section：120〜160px程度
- Content：48〜80px

これらは基準値であり、実装時に情報量・改行・写真比率を見ながら微調整します。

---

## 8. Container

- PC最大幅：約1200px
- SP左右Padding：20〜24px程度
- 本文はContainer内を基本とする。
- 大きな写真は必要に応じて部分的にFull Bleedを検討する。

最終値とFull Bleed対象は実装時に確定します。

---

## 9. CTA

Primary CTA：

**初回スタイリング体験を予約する →**

- Muted Olive背景
- Off White文字
- 小さめRadius
- 十分なTap Area
- Arrowあり
- Hoverは小さな色変化とArrow移動程度
- 派手なアニメーションは禁止

CTAは最終CVに一本化し、優先度の低い別行動と競合させません。

---

## 10. UI Direction

- 写真とTypographyを主役にする。
- Cardを並べすぎず、余白でグルーピングする。
- Diagnosis / Simulationの選択状態はBorder、背景、文字色で明確に区別する。
- Active状態にのみMuted Oliveを使い、常時強調しすぎない。
- Formは入力・エラー・完了状態を視覚的に区別する。
- Hoverだけに依存せず、Keyboard Focusを`focus-visible`で示す。

---

## 11. Responsive Design Direction

- 375 / 390：1カラム中心
- 768：Tabletとして扱い、無理にPCレイアウトへしない
- 1024前後：Editorialな左右レイアウトを検討
- 1366 / 1440：余白・Container・写真比率を確認
- 確認幅ごとにmedia queryを作らず、構造が変わる地点だけBreakpoint化する

Breakpointの最終値は実装結果を見て確定します。

---

## 12. Photography

詳細アーカイブ：`YORI_VISUAL_PRODUCTION_HANDOFF.md`

### Visual Concept

**Quiet Editorial Lifestyle**

「おしゃれな人を眺める写真」ではなく、**「自分もこんなふうに服を選べそう」と感じられる写真**を目指します。

### Model

- 利用者モデルは原則同一人物
- 日本人女性、29〜33歳程度
- 都市部で働く会社員を想起
- 知的、親しみやすい、自然体
- モデル然としすぎない
- 過度に美しすぎるファッションモデル表現を避ける

### Light / Color / Texture

- 柔らかな自然光、午前9時〜午後2時程度
- 窓からのSide Light
- Neutral〜Slight Warm
- Low〜Medium Saturation
- 強いコントラスト、過度な白飛び、夕方のオレンジ光を避ける
- 自然な服のシワ、髪の動き、手、視線、適度な生活感を残す
- 過剰レタッチ、完璧すぎる肌・髪・スタジオを避ける

### Camera / Composition

- Wide：Hero / Studio / Final CTA
- Medium：About yori / スタイリストとの相談
- Detail：About / First Styling Experience / 手元・服・生地
- 正面カメラ目線はStylist Portrait等、人物紹介に必要な場面のみ

### Visual Story

```text
Hero：服を選んでいる
↓
About yori：スタイリストと一緒に整理している
↓
Final CTA：自分で服を選べている
```

### Styling Simulation

同一人物・同一背景・同一カメラ位置・同一照明・同一Cropを維持し、衣装のみ変更します。

---

## 13. Icon / Illustration

正式方針：

- 写真とTypographyを主役にする。
- Flowを含む補助アイコンは画像生成しない。
- SVG / CSSで実装する。
- Thin Line
- Fillなし
- Strokeを統一
- 基本色はCharcoal
- ActiveのみMuted Olive
- 少しシャープ
- 角を丸めすぎない

対象候補：Arrow / Check / Progress / Previous / Next / Flow / FAQ + / - / Calendar / Time / Online / In-person。

---

## 14. 未確定事項

- 最終フォントとWeb Fontの読み込み方法
- Type Scale、Line Height、Letter Spacing、Font Weight
- SpacingとContainerの最終数値
- Breakpointの最終値
- Full Bleedにする写真とCropルール
- UI各状態の最終配色・サイズ
- SVGアイコンの個別形状

