import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository"

interface IMessageCreate {
    admin_id?: string;
    text: string;
    user_id: string;
}

class MessagesService {
    private messagesRepositoy: Repository<Message>;

    constructor(){
        this.messagesRepositoy = getCustomRepository(MessagesRepository);
    }

    async create({admin_id, text, user_id}: IMessageCreate) {
        const message = this.messagesRepositoy.create({
            admin_id,
            text,
            user_id,
        })

        await this.messagesRepositoy.save(message);

        return message;
    }

    async listByUser(user_id: string){
        const list = this.messagesRepositoy.find({
            where: {user_id},
            relations: ["user"], // busca dentro da tabela de usuarios tb, pode ficar pesado
            /* user vem de entities>Message.ts >
                @JoinColumn({name: "user_id"})
                @ManyToOne(() => User) 
                user: User; */
        });

        return list;
    }
}

export { MessagesService }