const io = require("socket.io")(3000);

io.on("connection", (socket) => {
  console.log("Un cliente se ha conectado");

  socket.on("mensaje", (data) => {
    console.log("Mensaje recibido:", data);
  });

  socket.emit("bienvenida", "¡Bienvenido a la app de preguntas y respuestas!");
});
