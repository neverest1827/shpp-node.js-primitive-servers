// 4.3
type TypeHomePet ={
    name: () => string;
    type: string;
    cuteness?: number;
    coolness?: number;
}
function hey3(a: TypeHomePet): string {
    return "hey! i'm " + a.name()
        + (a.type === "cat" ? ("cuteness: "+a.cuteness) : ("coolness: "+a.coolness))
}
hey3({name: () => "roma", type: "cat", cuteness: 100})
hey3({name: () => "vasya", type: "dog", coolness: 100})
