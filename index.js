const express = require("express");
const app = express();

function obtenerMensaje() {
  return "¡Hola Mundo desde Node.js en la nube!";
}

function obtenerHora() {
  const fecha = new Date();
  return fecha.toLocaleString("es-ES", {
    timeZone: "America/Lima",
    hour12: true,
  });
}

app.get("/", (req, res) => {
  const mensaje = obtenerMensaje();
  const hora = obtenerHora();
  res.send(`
    <p>${mensaje}</p>
    <p>Hora actual: ${hora}</p>
  `);
});

app.get("/health", (req, res) => res.status(200).send("ok"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
