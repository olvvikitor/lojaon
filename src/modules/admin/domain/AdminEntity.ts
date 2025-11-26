import { randomUUID } from "crypto";

export class AdminEntity {

    constructor(
        private id: string | null,
        private email: string,
        private password: string,
        private name: string | null,
    ) {
        if (!this.id) {
            this.id = randomUUID();
        }
    }

    public getProperties() {
        return {
            id: this.id,
            email: this.email,
            name: this.name,
        };

    }
}