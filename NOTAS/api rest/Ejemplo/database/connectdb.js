import mongoose from "mongoose";
try {
  await mongoose.connect(process.env.connectM);
  console.log("conexion funcional");
} catch (error) {
  console.log("error de conexion a mongo DB" + error);
}
