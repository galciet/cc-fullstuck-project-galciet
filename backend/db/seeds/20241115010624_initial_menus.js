exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("menus").del();
  await knex("menus").insert([
    { name: "ベンチプレス", tag: "胸", difficulty: 7 },
    { name: "ダンベルフライ", tag: "胸", difficulty: 5 },
    { name: "プッシュアップ", tag: "胸", difficulty: 3 },
    { name: "デッドリフト", tag: "背中", difficulty: 7 },
    { name: "ラットプルダウン", tag: "背中", difficulty: 5 },
    { name: "ワンアームダンベルロー", tag: "背中", difficulty: 3 },
    { name: "ショルダープレス", tag: "肩", difficulty: 7 },
    { name: "サイドレイズ", tag: "肩", difficulty: 5 },
    { name: "リアレイズ", tag: "肩", difficulty: 3 },
    { name: "バーベルカール", tag: "腕", difficulty: 7 },
    { name: "ハンマーカール", tag: "腕", difficulty: 5 },
    { name: "トライセプスプッシュダウン", tag: "腕", difficulty: 3 },
    { name: "スクワット", tag: "脚", difficulty: 7 },
    { name: "レッグプレス", tag: "脚", difficulty: 5 },
    { name: "ランジ", tag: "脚", difficulty: 3 },
    { name: "クランチ", tag: "腹", difficulty: 7 },
    { name: "レッグレイズ", tag: "腹", difficulty: 5 },
    { name: "プランク", tag: "腹", difficulty: 3 },
  ]);
};
