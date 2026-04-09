let tup : [number, boolean, string, string] = [1, false, "123abc", "chetan"];
console.log(tup);


interface User {
    name: string;
    age: number;
}
let tup2 : [number, boolean, User] = [1, true, {name:"chetan", age:25}];
console.log(tup2);