const express = require("express")
const app = express()
const usuariosRoutes = require("./routes/usuarios.js")


app.use(express.json())
app.use("/api/usuarios", usuariosRoutes)


const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor escuchando en https://localhost:${PORT}`)
})