const express = require("express");
const morgan = require("morgan");
const app = express();
const knex = require("./db/knex");
const healthCheckRoutes = require("./routes/healthCheckRoutes");
// const todoRoutes = require("./routes/todoRoutes");
// const logger = require("./middleware/logger");

app.use(morgan("dev"));
app.use(express.json());
// app.use(logger)

// /api/health
app.use("/api/health", healthCheckRoutes);

// /api/todos
// app.use('/api/todos', todoRoutes)

app.get("/api/menus", async (req, res) => {
  try {
    const menus = await knex("menus").select("*");
    console.log(menus);
    res.status(200).json(menus);
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ error: "Failed to get menus" });
  }
});

app.post("/api/menus", async (req, res) => {
  try {
    const { name, tag, difficulty } = req.body;
    const [menu_id] = await knex("menus").insert({ name, tag, difficulty }).returning("menu_id");
    res.status(201).json({ menu_id });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ error: "Failed to add menu" });
  }
});

module.exports = app;
