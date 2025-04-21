// 顧客一覧で使用するテストデータ（氏名・ふりがな2段表示、性別・個人/法人ラベル表示対応）
const customers = [
  {
    id: 1,
    name: "山田 優",
    furigana: "やまだ ゆう",
    gender: "女性",
    type: "個人",
    company: "個人",
    email: "yu.yamada@example.com",
    tel: "090-1234-5678",
    registeredAt: "2023-01-10"
  },
  {
    id: 2,
    name: "山田 優",
    furigana: "やまだ まさる",
    gender: "男性",
    type: "会社",
    company: "ヤマダ工業",
    email: "masaru.yamada@yamada.co.jp",
    tel: "03-1234-5678",
    registeredAt: "2023-02-15"
  },
  {
    id: 3,
    name: "佐藤 美咲",
    furigana: "さとう みさき",
    gender: "女性",
    type: "個人",
    company: "個人",
    email: "misaki.sato@example.com",
    tel: "080-1234-9876",
    registeredAt: "2023-03-01"
  },
  {
    id: 4,
    name: "田中 太郎",
    furigana: "たなか たろう",
    gender: "男性",
    type: "会社",
    company: "タナカ企画",
    email: "taro.tanaka@tanaka.co.jp",
    tel: "03-8765-4321",
    registeredAt: "2023-03-12"
  },
  {
    id: 5,
    name: "高橋 京子",
    furigana: "たかはし きょうこ",
    gender: "女性",
    type: "個人",
    company: "個人",
    email: "kyoko.takahashi@example.com",
    tel: "070-1111-2222",
    registeredAt: "2023-04-10"
  },
  {
    id: 6,
    name: "鈴木 一郎",
    furigana: "すずき いちろう",
    gender: "男性",
    type: "会社",
    company: "スズキ商会",
    email: "ichiro.suzuki@suzuki.co.jp",
    tel: "050-1234-5678",
    registeredAt: "2023-04-25"
  },
  {
    id: 7,
    name: "伊藤 美優",
    furigana: "いとう みゆう",
    gender: "女性",
    type: "会社",
    company: "イトウソリューションズ",
    email: "miyuu.ito@ito.co.jp",
    tel: "03-9999-8888",
    registeredAt: "2023-05-05"
  },
  {
    id: 8,
    name: "中村 隼人",
    furigana: "なかむら はやと",
    gender: "男性",
    type: "個人",
    company: "個人",
    email: "hayato.nakamura@example.com",
    tel: "080-8765-4321",
    registeredAt: "2023-06-20"
  },
  {
    id: 9,
    name: "小林 彩",
    furigana: "こばやし あや",
    gender: "女性",
    type: "会社",
    company: "コバヤシマーケティング",
    email: "aya.kobayashi@kobamark.co.jp",
    tel: "03-1234-0000",
    registeredAt: "2023-06-30"
  },
  {
    id: 10,
    name: "松本 大地",
    furigana: "まつもと だいち",
    gender: "男性",
    type: "個人",
    company: "個人",
    email: "daichi.matsumoto@example.com",
    tel: "090-4567-1234",
    registeredAt: "2023-07-01"
  }
];

export default customers; 