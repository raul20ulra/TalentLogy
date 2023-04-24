import { User } from "../models/user.js";
import jwt from "jsonwebtoken"
// import { tarea } from "../models/tarea.js";

export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) throw { code: 11000 };
    user = new User({ email, password });
    await user.save();
    //generar token
    return res.status(201).json({ ok: "Se a registrado correctamente" });
  } 
  
  
  catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).json({ error: "Ya existe este correo" });
    }
    return res.status(500).json({ error: "Error del servidor" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.status(403).json({ error: "No existe este usuario" });
const respuestaPassword= await user.comparePassword(password)

  } 
  
  catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};
