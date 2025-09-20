export abstract class Pizza {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    protected startPreparation(): void {
        console.log(` ---- prepare dough for ${this.name} pizza ---- `);
        console.log(` ---- added base sauces for ${this.name} pizza ---- `);
    }

    abstract prepare(): void;
    baking(): void {
        console.log(`baking of ${this.name} pizza has been started`);
    }

    cutting(): void {
        console.log(`cutting of ${this.name} pizza has been started`);
    }

    boxing(): void {
        console.log(`the boxing of ${this.name} pizza has started`);
    }
}
