import { knex } from "../database/knex.js";

class JogoRepository{
    async getAll(){
        const jogos = await knex("jogos").select("*").returning("*");
        return jogos;
    }

    async getById(){
        const jogos = await knex('jogos').select("*").where({ id }).returning("*");
        return jogos;
    }
    
    async create(){
        const jogos = await knex('jogos').insert().returning("*");
        return jogos;
    }

    async delete(){
        const jogos = await knex('jogos').delete("*").where({ id }).returning("*");
        return jogos;
    }

    async updatePut(){
        const jogos = await knex('jogos').update("*").where({ id }).returning("*");
        return jogos;
    }
}

export const jogoRepository = new JogoRepository()