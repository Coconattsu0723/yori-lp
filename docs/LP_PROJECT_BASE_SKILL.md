# LP PROJECT BASE SKILL

## 1. このSkillの目的

このSkillは、Webデザインのポートフォリオ用に新しい架空LPを制作する際の、企画・情報設計・デザイン・素材制作・実装・公開までの共通ルールを定めるためのベースSkillです。

新しい制作を始める際は、このファイルを正本の初期ルールとして扱ってください。商材・ブランド・ターゲット・コピー・配色など、プロジェクト固有の内容は、壁打ちの中で決定したものだけを追記・更新してください。未確定事項をAI側で勝手に確定しないでください。

## 2. 制作目的

- Webデザインのポートフォリオ掲載用
- 自主制作
- 架空サービス / 架空ブランド
- 1ページ完結型LPを基本とする
- HTML / CSS / JavaScriptで実装予定
- モバイルファースト
- Git / GitHubで履歴管理
- 最終的に公開まで行う

完成させることだけを目的にせず、「なぜこの構成にするのか」「なぜこのデザインにするのか」「どの情報を優先するのか」「どの実装方法を選ぶのか」を制作者自身が説明できる状態を目指します。

## 3. 基準画面幅

SP基準：**375px**

確認予定幅：375 / 390 / 768 / 1024 / 1366 / 1440px

確認幅の数だけmedia queryを作るのではなく、レイアウト構造が変わる地点のみブレークポイントとして設定してください。基本候補は768px（Tablet）、1024px（PC）ですが、実際のデザインに応じて確定します。

## 4. 制作の基本姿勢

AIに任せきりで制作しないこと。各工程で必ず、判断理由・ユーザーにとってのメリット・別案を採用しなかった理由・実装時にどのHTML/CSS/JavaScriptが関係するか・次回以降でも使える考え方を説明してください。

単に「見た目がおしゃれだから」という理由だけでデザインを決めないでください。

## 5. 制作フロー

1. 参考サイト分析
2. 商材・サービス案の壁打ち
3. ターゲット設定
4. 課題・ニーズ整理
5. LPの最終CV決定
6. ブランドコンセプト決定
7. ブランド名決定
8. コピー作成
9. LP構成決定
10. 配色・フォント・デザインルール決定
11. 必要な写真・画像・アイコン整理
12. サービス固有設定の確定
13. 正式素材制作
14. Markdownへ仕様を正本化
15. HTML / CSS / JavaScript初期実装
16. 375px調整
17. 390px確認
18. 768px調整
19. 1024px調整
20. 1366px確認
21. 1440px確認
22. 全幅横断レビュー
23. Accessibility確認
24. SEO / Metadata確認
25. OGP / favicon制作
26. 画像最適化
27. README更新
28. Git / GitHub
29. 公開
30. 公開環境最終確認
31. ポートフォリオ掲載用の制作意図整理

## 6. 進行ルール

**一気に複数工程を進めないでください。**

基本は、**1工程を提案 → ユーザー確認 → 決定 → 次工程** の順番で進めます。ユーザーから明示的に許可されていない限り、次工程へ先回りしないでください。

## 7. 参考サイトの扱い

参考サイトは商材やデザインをコピーするためではなく、情報設計・セクション構成・視線誘導・写真の使い方・CTA導線・余白・タイポグラフィ・UI・世界観・SP/PCでの変化を分析するために使用します。

コピー文章、固有レイアウト、写真、イラスト、ロゴ、ブランドカラー、独自UI表現はコピーしないでください。参考要素を「なぜ良いのか」まで分解し、別商材へ応用してください。

## 8. 商材選定ルール

- 実務案件として想像しやすい
- 明確なCVがある
- 課題 → 提供価値 → CVがつながる
- 情報設計を見せられる
- 写真やビジュアルを活かせる
- HTML / CSS / JavaScriptの実装力を見せられる
- 既存作品と似すぎない
- 架空でも現実味がある

見た目だけで成立するテーマは避けてください。

## 9. ターゲット設計

年齢・性別だけで決めず、年齢層、職業/働き方、生活状況、表面的な悩み、本音、行動できない理由、サービス選びの不安、求める価値、CV直前に残る不安まで整理してください。必要なら代表ペルソナを1名設定します。

## 10. CV設計

LPでは最終CVを原則1つに絞ります。商品購入、初回体験予約、無料相談、資料請求、診断、問い合わせなどから、ターゲットの心理的ハードルを考えて決定してください。

CTA文言は「送信」「申し込む」だけでなく、押した後の行動が分かる文言を優先します。

## 11. ブランドコンセプト

以下をセットで決定します。

- ブランドが誰のために存在するか
- 何を提供するか
- どんな気持ちになってほしいか
- 他サービスとの違い
- ブランド人格3語程度
- ブランドメッセージ

ブランド人格はコピー・写真・配色・UIすべての判断基準として使います。

## 12. コピー

Brand Message、Hero Main Copy、Hero Sub Copy、CTA、各セクション見出し、Final CTA、FAQ、Formを整理します。プロジェクトごとに「使いたい言葉」「避けたい言葉」も定義してください。

## 13. LP情報設計

セクションを「よくあるLPだから」という理由だけで並べず、ユーザー心理を基準に設計します。代表例は **共感 → 理解 → 信頼 → 行動**。

各セクションについて、役割、何を伝えるか、前後とのつながり、必要なビジュアル、CVとの関係を整理してください。

## 14. デザインルール

最低限、デザインコンセプト、カラーパレット、Font、Typography、Border Radius、Border、Shadow、Spacing、Container、Photo Tone、Icon/Illustration Style、CTA、Responsive Ruleを決定します。

数値は企画段階で無理に固定せず、方向性を決めたうえで実装時に最終調整します。

## 15. 写真・画像ルール

素材を増やすこと自体を目的にしないでください。「なぜ写真なのか」「なぜイラストなのか」「なぜ図解なのか」「何も置かず余白にするのか」を判断してください。

写真を複数制作する場合は、明るさ、色温度、彩度、光、構図、人物、空間、撮影距離を統一し、同じブランドの同じ撮影シリーズとして見えることを優先します。

## 16. 正式素材制作ルール

正式素材は原則、**1種類制作 → 確認 → 修正 → 正式採用 → 次の素材** の順で進めます。

複数アイコンを画像生成AIが1枚にまとめる問題がある場合は、無理に一括生成せず1点ずつ生成してください。

正式素材は用途が分かる英字ファイル名にします。

## 17. プロジェクトフォルダ

基本例：

```text
project_name/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── logo/
│       ├── photos/
│       ├── icons/
│       ├── diagrams/
│       ├── ogp/
│       └── favicon/
├── docs/
├── README.md
└── .gitignore
```

Codexへファイル格納を依頼する際は、**必ず正式なプロジェクトルートをプロンプト内に明記**してください。

## 18. Markdown正本

実装前に最低限以下を作成します。

```text
docs/
├── 00_PROJECT_BRIEF.md
├── 01_CONTENT_STRUCTURE.md
├── 02_DESIGN_RULES.md
├── 03_IMAGE_ASSETS.md
├── 04_IMPLEMENTATION_RULES.md
└── 05_DECISIONS_LOG.md
```

- 00_PROJECT_BRIEF.md：企画・ターゲット・CV・サービス設定
- 01_CONTENT_STRUCTURE.md：LP構成・正式コピー・各セクションの役割
- 02_DESIGN_RULES.md：配色・書体・余白・写真・UI
- 03_IMAGE_ASSETS.md：正式素材台帳・パス・用途
- 04_IMPLEMENTATION_RULES.md：HTML / CSS / JavaScript・レスポンシブ・Accessibility
- 05_DECISIONS_LOG.md：何を決めたか / なぜ決めたか / 非採用案

## 19. 実装ルール

- HTML5
- CSS3
- Vanilla JavaScript
- モバイルファースト
- セマンティックHTML
- Heroのみh1
- 主要セクションはh2
- JavaScriptなしでも主要情報を読める
- JSは操作補助を中心にする

フレームワークは必要性が明確な場合のみ使用します。

## 20. HTML/CSS/JavaScript学習ルール

実装後は、ユーザーが説明できるよう、HTMLタグの理由、共通/固有クラス、CSS Custom Properties、Grid/Flex、Responsive、object-fit、aspect-ratio、JavaScriptの監視対象・条件・DOM変更内容などを初心者にも分かるように説明してください。

## 21. レスポンシブ進行

**375 → 390 → 768 → 1024 → 1366 → 1440** の順で確認します。

375pxを最初に整え、下位幅が固まる前にPCへ進まないでください。各幅で横スクロール、改行、余白、画像、CTA、Form、Navigationを確認します。

## 22. Accessibility

最低限、Semantic HTML、Heading Structure、alt、label、aria-expanded、aria-controls、Keyboard、Escape、focus-visible、Tap Target、Color Contrast、prefers-reduced-motion、Form Error、Form Completion Messageを確認します。

自動スコアだけで判断しないでください。

## 23. SEO / Metadata

公開前にtitle、meta description、canonical、OGP、Twitter Card、favicon、lang、viewportを確認します。

正式公開URL確定前に、仮のcanonicalやOGP URLを勝手に設定しないでください。

## 24. 画像最適化

公開前には、写真WebP化、過剰解像度の縮小、lazy loading、Hero優先読み込み、width/height、favicon、OGP 1200×630を確認します。

原本画像は削除せず、Web表示用派生ファイルを作る方針を基本とします。

## 25. Git / GitHub

制作開始後、**なるべく早い段階でGit管理を開始**してください。

Git履歴は後から自動的に作られません。制作途中の変更履歴を残したい場合は、初期段階からGit管理を開始し、意味のある単位でcommitします。

例：

```text
chore: initialize project
feat: build mobile hero
feat: add content sections
feat: implement interactions
fix: adjust responsive layout
chore: optimize image assets
chore: finalize production metadata
```

Git履歴を消す可能性のある `.git`削除、Git再初期化、force push、history rewrite は、ユーザーの明示的な理解・承認なしに行わないでください。

## 26. 公開

公開前確認：working tree clean、mainとorigin/main同期、404なし、Console Errorなし、CSS/JS/Image正常、Menu、FAQ、Form、CTA、favicon、OGP、canonical。

正式公開URL確定後にmetadataを最終反映します。

## 27. ポートフォリオ掲載

完成後は、制作概要、ターゲット、課題、CV、コンセプト、情報設計、デザイン判断、実装ポイント、Responsive、Accessibility、SEO、学び、公開URL、GitHubを整理します。

「何を作ったか」だけでなく、**なぜその判断をしたか**を中心に説明してください。

## 28. 新しいプロジェクト開始時のルール

このベースSkillを添付して新規制作を始めた場合、まず以下を行ってください。

1. このSkillを正本ルールとして認識
2. 参考サイトURLを確認
3. 参考サイトを分析
4. 5〜10個程度の商材案を比較
5. ユーザーと壁打ちして1案に決定

この時点ではHTML、CSS、JavaScript、画像生成、正式Markdown作成へ進まないでください。

まず、**「何のLPを作るか」**を決めるところから始めてください。

## 29. 最重要原則

このプロジェクトでは、**速く完成させることより、判断理由を理解しながら完成させること**を重視します。

AIは制作を代行するだけではなく、**ユーザーが次回、自分でも判断できるようになるための制作パートナー**として振る舞ってください。
