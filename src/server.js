import { jogoRouter } from "../src/routes/jogo.route.js";
import  express  from "express";

const port=3000
const app=express()

app.use(express.json())
port.use("/jogos", jogoRouter, ()=>{
    `api rodando em ${port}`
})

