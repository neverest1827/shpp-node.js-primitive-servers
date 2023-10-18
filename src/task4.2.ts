//4.2



class Animal {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    name(): string{
        return this._name
    }
}

class Cat extends Animal{
    isLoveMilk: boolean;

    constructor(name: string, isLoveMilk: boolean) {
        super(name);
        this.isLoveMilk = isLoveMilk;
    }
}

class Dog extends Animal{
    liveDays: number;

    constructor(name: string, liveDays: number) {
        super(name);
        this.liveDays = liveDays;
    }
}

type TypePet = {
    name: () => string
}
function hey2(abstractPet: TypePet): string {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("myavchik", true)
let b = new Dog("gavchik", 333)

hey2(a)
hey2(b)