import { jogoService } from "../services/jogo.service.js";

class JogoController{
    async getAll(res, req) {
        const jogos = await jogoService.getAll()
        res.json(jogos)
    }
    async getById(res, req){
        const jogos = await jogoService.getById(req.params.id)
        res.json(jogos)
    }
    async create(res, req){
        const jogos = await jogoService.create(req.body)
        res.json(jogos)
    }
    async delete(res, req){
        const jogos = await jogoService.delete(req.params.id)
        res.json(jogos)
    }
    async updatePut(res, req){
        const jogos = await jogoService.updatePut(req.params.id)
        res.json(jogos)
    }
}

export const jogoController = new JogoController()