import { Router } from "express";
import { body } from "express-validator";
import { login, register } from "../controllers/auth.controller.js";
import { titulo, descripcion,importancia } from "../controllers/auth.controller.js";
import { validationResultexpress } from "../middlewares/validationResultexpress.js";
const authRouter = Router();

authRouter.post(
  "/register",
  [
    body("email", "formato email incorrecto").trim().isEmail().normalizeEmail(),
    body("password", "minimo 6 caracteres incorrecta")
      .trim()
      .isLength({ min: 6 }),
  ],
  validationResultexpress,
  register
);

authRouter.post(
  "/login",
  [
    body("email", "formato email incorrecto").trim().isEmail().normalizeEmail(),

    body("password", "minimo 6 caracteres incorrecta")
      .trim()
      .isLength({ min: 6 }),
  ],
  validationResultexpress,
  login
);

export default authRouter;
