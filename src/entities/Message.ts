import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("messages")
class Message {

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    text: string;
    
    @JoinColumn({name: "user_id"})
    @ManyToOne(() => User) // many é da classe e one é do user, ex: muitas msgs para 1 usuario
    user: User;
    // pode ser @Column() e o banco trata o cammpo, ou define igual acima para ficar melhor
    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Message }