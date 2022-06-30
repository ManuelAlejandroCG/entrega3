const express = require ("express")
const Contenedor = require("./Contenedor");

const app = express()
const PORT = process.env.PORT || 8080
const contenedor = new Contenedor("./productos.txt")

contenedor.iniciar()

app.get("/", (request, response)=>{
    response.send("<h1 style='color:purple'> Bienvenido!123</h1><h2> puede acceder a: </h2><h3> /productos: para obtener la lista completa</h3><h3>/productosRandom: para obtener un producto al azar</h3>")
})

app.get("/productos", (request, response)=>{
    response.send(contenedor.productos)
})

app.get("/productosRandom", (request, response)=>{   
    const r = Math.floor(Math.random()*3) 
    response.send(contenedor.productos[r])
})

app.listen(PORT)

