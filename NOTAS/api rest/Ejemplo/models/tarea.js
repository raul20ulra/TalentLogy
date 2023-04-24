import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
  importancia: {
    type: Number,
    required: true,
  },
});

export const tarea = mongoose.model("tarea", tarea);
