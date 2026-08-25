# yori IMAGE ASSETS

## 0. このファイルの役割

このファイルは、実装で使用する正式画像の台帳です。2026-08-25に`assets/images/`以下の実ファイルを確認し、存在・非0バイト・PNGとしての読み込みを照合しました。

- 正式プロジェクトルート：`/Users/natsumikato/Documents/ポートフォリオ/yori_lp_project`
- 正式画像数：17点
- 形式：PNG原本
- 画像最適化：未実施
- Voice専用画像：新規制作なし
- Flow / UI Icon画像：制作せず、SVG / CSSで実装予定

---

## 1. 正式素材台帳

| Category | File Name | Relative Path | Purpose | Status | Notes |
|---|---|---|---|---|---|
| Hero | `hero_main.png` | `assets/images/photos/hero/hero_main.png` | Hero / ブランドの第一印象 | 正式採用・実在確認済み | 1024×1536px / 2,462,129 bytes / 服を「選んでいる」 |
| Stylist | `stylist_maho-portrait.png` | `assets/images/photos/stylist/stylist_maho-portrait.png` | Stylist / 佐倉真帆紹介 | 正式採用・実在確認済み | 1122×1402px / 1,698,985 bytes |
| About | `about_styling-session.png` | `assets/images/photos/about/about_styling-session.png` | About yori / 一緒に整理する価値 | 正式採用・実在確認済み | 1448×1086px / 1,842,194 bytes |
| Studio | `studio_main.png` | `assets/images/photos/studio/studio_main.png` | Studio / サービス空間紹介 | 正式採用・実在確認済み | 1448×1086px / 1,909,089 bytes |
| Styling Simulation | `simulation_base.png` | `assets/images/photos/simulation/simulation_base.png` | Base Visual / ニュートラル基準 | 正式採用・実在確認済み | 1122×1402px / 1,873,066 bytes |
| Styling Simulation | `simulation_work-clean-pants.png` | `assets/images/photos/simulation/simulation_work-clean-pants.png` | Variation 01 / WORK × CLEAN × PANTS | 正式採用・実在確認済み | 1122×1402px / 1,925,895 bytes |
| Styling Simulation | `simulation_work-soft-skirt.png` | `assets/images/photos/simulation/simulation_work-soft-skirt.png` | Variation 02 / WORK × SOFT × SKIRT | 正式採用・実在確認済み | 1122×1402px / 1,940,264 bytes |
| Styling Simulation | `simulation_off-fresh-pants.png` | `assets/images/photos/simulation/simulation_off-fresh-pants.png` | Variation 03 / OFF × FRESH × PANTS | 正式採用・実在確認済み | 1122×1402px / 1,964,853 bytes |
| Styling Simulation | `simulation_off-clean-skirt.png` | `assets/images/photos/simulation/simulation_off-clean-skirt.png` | Variation 04 / OFF × CLEAN × SKIRT | 正式採用・実在確認済み | 1122×1402px / 1,971,619 bytes |
| Styling Simulation | `simulation_dinner-soft-skirt.png` | `assets/images/photos/simulation/simulation_dinner-soft-skirt.png` | Variation 05 / DINNER × SOFT × SKIRT | 正式採用・実在確認済み | 1049×1499px / 1,940,384 bytes |
| Styling Simulation | `simulation_dinner-fresh-pants.png` | `assets/images/photos/simulation/simulation_dinner-fresh-pants.png` | Variation 06 / DINNER × FRESH × PANTS | 正式採用・実在確認済み | 1122×1402px / 1,945,057 bytes |
| Styling Examples | `styling-case_office.png` | `assets/images/photos/styling-examples/styling-case_office.png` | CASE 01：Office | 正式採用・実在確認済み | 1023×1537px / 1,924,482 bytes |
| Styling Examples | `styling-case_weekend.png` | `assets/images/photos/styling-examples/styling-case_weekend.png` | CASE 02：Weekend | 正式採用・実在確認済み | 1122×1402px / 1,953,219 bytes |
| Styling Examples | `styling-case_dinner.png` | `assets/images/photos/styling-examples/styling-case_dinner.png` | CASE 03：Dinner | 正式採用・実在確認済み | 1086×1448px / 1,987,273 bytes |
| First Styling Experience | `first-styling_experience.png` | `assets/images/photos/first-experience/first-styling_experience.png` | 初回体験の相談・整理場面 | 正式採用・実在確認済み | 1448×1086px / 1,796,032 bytes |
| MY STYLE NOTE | `my-style-note_visual.png` | `assets/images/photos/style-note/my-style-note_visual.png` | 持ち帰り資料・提供成果の説明 | 正式採用・実在確認済み | 1448×1086px / 2,032,656 bytes |
| Final CTA | `final-cta_ready-to-go.png` | `assets/images/photos/final-cta/final-cta_ready-to-go.png` | Final CTA / 自分で選べている状態 | 正式採用・実在確認済み | 1122×1402px / 1,983,907 bytes |

---

## 2. Styling Simulationの使用方針

- Base VisualとVariation 01〜06の計7点を使用する。
- `SCENE × MOOD × BASE`の全18組み合わせへ個別写真を用意しない。
- 回答を6スタイル程度へマッピングする。
- Base Visualは基準確認・初期表示・補助用途の候補とするが、最終の初期表示仕様は未確定。
- 18組み合わせから画像への最終マッピングは未確定。

---

## 3. Styling Examplesの使用方針

| Case | File |
|---|---|
| CASE 01：Office | `styling-case_office.png` |
| CASE 02：Weekend | `styling-case_weekend.png` |
| CASE 03：Dinner | `styling-case_dinner.png` |

Simulationと異なり、利用シーンの変化を見せます。各ケースには最終的にUser Condition / User Problem / Styling Direction / Why This Worksを添えますが、文章は未確定です。

---

## 4. 新規画像を制作しない領域

### Voice

- ステータス：**新規正式画像なし**
- 方針：テキスト中心＋必要なら既存写真の小さなCrop
- 新しい人物写真は制作しない

### Flow / UI Icon

- ステータス：**画像素材なし**
- 方針：画像生成せずSVG / CSSで実装予定
- Style：Thin Line / Fillなし / Stroke統一 / Charcoal、ActiveのみMuted Olive

---

## 5. 正式採用外の参考素材

| Category | File Name | Relative Path | Status | Notes |
|---|---|---|---|---|
| Draft | `hero_draft_with-text.png` | `assets/images/photos/drafts/hero_draft_with-text.png` | 不採用・参考用 | 1024×1536px / 2,607,648 bytes / 画像内文字あり。色・光・人物・空間トーンのみ参考 |

この素材は正式画像数17点に含めません。

---

## 6. 実装時の画像ルール

- 原本PNGを削除・上書きしない。
- 画像内へコピー、ロゴ、見出しを焼き込まない。
- 公開前の最適化では原本を残し、Web表示用の派生ファイルを作る。
- `width` / `height`または`aspect-ratio`を使い、レイアウトシフトを抑える。
- 適切な`alt`を設定する。装飾画像は空altを検討する。
- Heroは優先読み込み、下層画像はlazy loadingを検討する。
- Cropは用途と画面幅ごとに確認し、人物・手元・服の意味が失われないようにする。

---

## 7. 未確定事項

- 各画像の最終表示サイズとCrop位置
- レスポンシブ用派生画像の要否
- WebP / AVIF等のWeb表示用派生ファイル名と品質設定
- Styling Simulationの最終マッピング
- Voiceで既存写真Cropを使用するか
- OGP / favicon / ロゴの正式素材

