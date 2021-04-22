import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
    private usersRepositoy: Repository<User>;

    constructor(){
        this.usersRepositoy = getCustomRepository(UsersRepository);
    }

    async create(email: string) {
        // verificar se usuario existe
        const userExists = await this.usersRepositoy.findOne({
            email
        })
        // se existir, retornar user
        if(userExists){
            return userExists;
        }

        const user = this.usersRepositoy.create({
            email
        })

        await this.usersRepositoy.save(user);
        // se nao existe, salva no banco
        return user;

    }
}

export { UsersService }