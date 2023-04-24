import "dotenv/config";
import "./database/connectdb.js";
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

import authRouter from "./routes/auth.route.js";
import linkRouter from "./routes/link.route.js";
import redirectRouter from "./routes/redirect.route.js";
import tareaRoute from "./routes/tareas.route.js";
import { requireToken } from "./middlewares/requireToken.js";

const app = express();

const whiteList = [process.env.ORIGIN1, process.env.ORIGIN2];

app.use(
  cors({
    origin: function (origin, callback) {
      console.log(" =>", origin);
      if (!origin || whiteList.includes(origin)) {
        return callback(null, origin);
      }
      return callback("Error de CORS origin: " + origin + " No autorizado!");
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// ejemplo back redirect (opcional)
app.use("/", redirectRouter);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/links", linkRouter);
app.use("/api/v1/tareas", tareaRoute);


// Lógica para actualizar datos en la ruta /api/update
app.put( requireToken, (req, res) => {
  const { id } = req.body; // Obtener el ID de los datos a actualizar
  const updateData = req.body; // Obtener los datos actualizados

  // Verificar que el usuario actual está autorizado para actualizar los datos
  if (req.decoded.userId === id) {
    User.findById(id, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        user.name = updateData.name;
        user.email = updateData.email;

        user.save((err, updatedUser) => {
          if (err) {
            res.send(err);
          } else {
            res.send(updatedUser);
          }
        });
      }
    });
  } else {
    res.sendStatus(403);
  }
});


// solo para el ejemplo de login/token
// app.use(express.static("public"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(" http://localhost:" + PORT));
