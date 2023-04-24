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
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  completado: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const tarea = mongoose.model("tarea", tareaSchema);
