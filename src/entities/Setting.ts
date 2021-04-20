import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("settings")
class Setting {
    @PrimaryColumn()
    id: string;
    @Column() // se for nome diferente da tabela @Column({name: "usernameTeste"})
    username: string;
    @Column()
    chat: boolean;
    @UpdateDateColumn()
    updated_at: Date;
    @UpdateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Setting}