import { jogoRepository } from "../repository/jogo.repository.js";

class JogoService{

    async getAll() {
        const jogos = await jogoRepository.getAll()
        return jogos;
    }

    async getById(id){
        const jogos = await jogoRepository.getById(id)
        return jogos;
    }

    async create(body){
        const jogos = await jogoRepository.create(body)
        return jogos;
    }

    async delete(id){
        const jogos = await jogoRepository.delete(id)
        return jogos;
    }

    async updatePut(id, body){
        const jogos = await jogoRepository.updatePut(id, body)
        return jogos
    }
}

export const jogoService = new JogoService()