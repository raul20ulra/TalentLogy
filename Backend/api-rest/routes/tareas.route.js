import { Router } from "express";
import {
  actualizar,
  createTarea,
  listTareaUser,
} from "../controllers/tarea.controller.js";
import { requireToken } from "../middlewares/requireToken.js";

const tareaRoute = Router();

tareaRoute.post("/create-tarea", requireToken, createTarea);
tareaRoute.get("/list-tarea-user", requireToken, listTareaUser);
tareaRoute.get("/actualizar-tarea/:uid", requireToken, actualizar);

export default tareaRoute;
