import { Server, Socket } from "socket.io";
import { connectDB, disconnectDB } from "./db/db"; 

const io: Server = new Server(3000);

connectDB();

io.on("connection", (socket: Socket) => {
  console.log("Un cliente se ha conectado");

  socket.on("mensaje", (data: any) => {
    console.log("Mensaje recibido:", data);
  });

  socket.emit("bienvenida", "¡Bienvenido a la app de preguntas y respuestas!");
});
