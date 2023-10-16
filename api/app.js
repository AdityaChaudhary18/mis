const express = require("express");
const { sequelize } = require("./models");
const morgan = require("morgan");
require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/v1/contact", contactRoutes);

const NODE_ENV = process.env.NODE_ENV || "development";
const port = process.env.PORT || 8000;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("[CONNECTED TO DATABASE]");
    app.listen(port, () => console.info(`[LISTENING ON PORT:${port}]`));
  })
  .catch((err) => {
    console.error("Failed to connect to db", err);
  });
