# login_customer_app
Reactを使用したlogin/customer管理画面

# 顧客管理フロントエンドアプリ（React + MUI）

このアプリケーションは、React と Material UI (MUI) を使用した簡易的な顧客管理画面です。
ログイン画面と顧客一覧画面を備え、フィルター・並び替え・検索機能に対応しています。

開発環境でアプリを起動した後、それぞれ以下のURLで確認できます。
 - ログイン画面：http://localhost:3000/login
 - 顧客一覧画面：http://localhost:3000/customer

---
## 📁 ディレクトリ構成
/src
├── components/
│   ├── Login.jsx
│   └── CustomerList.jsx
├── mock/
│   ├── users.js        // ログイン用テストユーザー
│   └── customers.js    // 顧客テストデータ
├── theme/
│   └── colors.js       // カラーパレット（今回新設）
├── App.jsx
└── index.js

---
## 📦 技術スタック
- React 18.2.0
- Material UI v7
- JavaScript (ES6+)
- Create React App (CRA) + CRACO
- React Router v7
- Docker
- Nginx

---
## 🚀 機能一覧

### ✅ ログイン画面（`Login.jsx`）
- ユーザーIDとパスワードの入力欄
- シンプルなバリデーション（モックユーザー照合）

### ✅ 顧客一覧画面（`CustomerList.jsx`）
- 顧客名、ふりがな、性別、種別を表示（ピル型ラベル）
- 検索機能（名前・ふりがな・会社名・メール）
- フィルター機能（性別・個人/会社）
- 並び替え機能（顧客名昇順／降順切替）
- デザイン調整（ラベル色、テーブル強調、アクセシビリティ配慮）

---
## 🎨 デザイン・スタイル
- カラーパレットは `/theme/colors.js` にて集中管理
- 青系を基調に視認性と一貫性を重視
- ラベルカラーは個人/法人・男女を識別しやすいトーンで設計

---
## 🧪 モックデータ（`/mock/`）
- 顧客データおよびユーザー情報は静的に管理
- 今後のAPI接続やバックエンド連携を見据えた仮実装

---
## ✍️ 制作意図
- 不慣れなエンジニアでも保守しやすいよう、1ファイルにまとめた設計
- コメント付きで機能ごとにブロック整理し、将来的なリファクタにも配慮

---
## 📌 セットアップ手順

### ローカル環境での実行
```bash
# パッケージインストール
npm install

# 開発サーバー起動
npm start
```

### Docker環境での実行
```bash
# コンテナのビルドと起動
docker compose up --build

# バックグラウンドで実行する場合
docker compose up -d --build

# コンテナの停止
docker compose down

# ログの確認
docker compose logs -f
```

#### 開発環境の特徴
- ホットリロード対応
- ソースコードの変更がリアルタイムで反映
- ポート3000でアクセス可能

#### 本番環境の特徴
- Nginxを使用した効率的な静的ファイル配信
- 適切なキャッシュ設定によるパフォーマンス最適化
- マルチステージビルドによるイメージサイズの最適化