exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("selected_menus").del();
  await knex("selected_menus").insert([
    { date: "2024-11-1", menu_id: 1, sets: 3, reps: 5, weight: 50 },
    { date: "2024-11-2", menu_id: 13, sets: 5, reps: 10, weight: 60 },
    { date: "2024-11-2", menu_id: 18, sets: 3, reps: 1 },
  ]);
};
