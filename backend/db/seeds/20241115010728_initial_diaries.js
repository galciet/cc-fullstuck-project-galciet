exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("diaries").del();
  await knex("diaries").insert([
    { date: "2024-11-1", content: "ベンチプレス3セット成功" },
    { date: "2024-11-2", content: "スクワットは追加1セットに成功。プランクも成功" },
  ]);
};
