import { tarea } from "../models/Tarea.js";
import { User } from "../models/User.js";

export const createTarea = async (req, res) => {
  try {
    const userId = req.uid;
    const user = await User.findById(userId);

    if (!user) return res.send("USER NO EXISTE EN DB");
    const { titulo, descripcion, importancia } = req.body;

    const newTarea = new tarea({
      titulo,
      descripcion,
      importancia,
      completado: false,
      author: userId,
    });

    await newTarea.save();
    res.send(newTarea);
  } catch (error) {
    console.log(error);
    // Alternativa por defecto mongoose
    if (error.code === 11000) {
      return res.status(400).json({ error: "Ya existe esta tares" });
    }
    return res.status(500).json({ error: "Error de servidor" });
  }
};

export const listTareaUser = async (req, res) => {
  try {
    const author = req.uid;
    const user = await User.findById(author);
    if (!user) return res.send("user not found");
    let { completado } = req.body;
    if (completado) {
      completado = true;
    } else {
      completado = false;
    }

    const tareasUser = await tarea
      .find({ author, completado: completado })
      .populate("author", "-password");
    res.send(tareasUser);
  } catch (error) {
    res.send("server error");
  }
};

// controlador para actualizar una tarea existente
export const actualizar = async (req, res) => {
  try {
    const { uid } = req.params; // obtener el ID de la tarea a actualizar
    const { titulo, descripcion, importancia, completado } = req.body; // obtener los nuevos datos de la tarea actualizada

    // verificar que la tarea exista en la base de datos
    const task = await tarea.findById(uid);
    if (!task) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    // actualizar los campos de la tarea con los nuevos datos
    task.titulo = titulo || task.titulo;
    task.descripcion = descripcion || task.descripcion;
    if (completado) {
      task.completado = completado || task.completado;
    }
    if (typeof importancia === "number" && isFinite(importancia)) {
      task.importancia = importancia;
    }

    // guardar los cambios en la base de datos
    await task.save();

    // enviar la tarea actualizada al cliente
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar la tarea" });
  }
};
