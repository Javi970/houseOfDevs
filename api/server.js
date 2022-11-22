const express = require('express');
const app = express();
const db = require('./db/index');
const models = require('./models/Users');
const routers = require('./routes/index');
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', routers);



app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

db.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log('server escuchando en el puerto 3001');
  });
});
