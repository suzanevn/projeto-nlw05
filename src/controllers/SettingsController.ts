import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository"

class SettingsController {
    async create(request: Request, response: Response){
        const { chat, username } = request.body;
        const settingsRepository = getCustomRepository(SettingsRepository);
        const settings = settingsRepository.create({
            chat,
            username
        });
        await settingsRepository.save(settings);
        return response.json(settings);
    }
}

export { SettingsController }


/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * Query Params => Filtros e buscas, vem depois da rota ...?id/teste...
 * Body params => {...}
 */