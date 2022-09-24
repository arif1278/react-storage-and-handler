const add = (first, second) => {
    return first + second;
}
const multiply = (first, second) => {
    return first * second;
}
const divide = (first, second) => {
    return first / second;
}
// const numbers=[20,30,40,50,60];
// const sumReducer=(previous,current)=>previous+current;
// const total=numbers.reduce(sumReducer,0)

// const items=[
//     {id:1,name:'alta',price:100},
//     {id:2,name:'palta',price:200},
//     {id:3,name:'talta',price:300},
//     {id:4,name:'lalta',price:400},
//     {id:5,name:'kalta',price:500},
//     {id:6,name:'galta',price:600},
//     {id:7,name:'falta',price:700},
// ]
// const itemSumReducer=(previous,current)=>previous+current.price;
// const itemTotal =items.reduce(itemSumReducer,0);

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}
export { add, multiply, divide, getTotalPrice };