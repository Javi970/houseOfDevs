const express = require("express");
const app = express();
const db = require("./db/index");
const routers = require("./routes/index");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use("/api", routers);

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

//levantar base de datos
db.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log("server escuchando en el puerto 3001");
  });
});
