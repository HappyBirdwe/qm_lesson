// es6 => es5
//let const => var 

const num = 9;
let isMarried = false;

let yourTurn = ['好工作', '找老板谈', '驴妈妈网'].map((task, index) => {
    return `${index}-${task}`
});

console.log(yourTurn);

