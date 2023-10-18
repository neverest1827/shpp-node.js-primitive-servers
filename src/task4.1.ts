// easy way is using 'as' keyword
// hard way is ?...
type TypePeople = {
    name: () => string;
    cuteness?: number;
    coolness?: number;
}
function hey1(a: TypePeople ) :string {
    return "hey! i'm " + a.name();
}

console.log(hey1({name: () => "roma", cuteness: 100}));
console.log(hey1({name: () => "vasya", coolness: 100}));
