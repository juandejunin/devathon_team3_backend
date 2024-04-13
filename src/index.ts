import { Server, Socket } from "socket.io";

const io: Server = new Server(3000);

io.on("connection", (socket: Socket) => {
  console.log("Un cliente se ha conectado");

  socket.on("mensaje", (data: any) => {
    console.log("Mensaje recibido:", data);
  });

  socket.emit("bienvenida", "¡Bienvenido a la app de preguntas y respuestas!");
});
