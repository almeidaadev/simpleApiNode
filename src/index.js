import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

import routerUser from "./routes/user.js";
import routerHome from "./routes/home.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(routerHome);
app.use(routerUser);

app.listen(8081, () => {
  console.log(`Servidor rodando na port ${port}.
Local host : http://localhost:${port}/
[Ctrl + c] - Para derrubar `);
});
