const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, curval){
//     console.log(`acc: ${acc} and Curval: ${curval}`);
//     return acc+curval
// },0)

const myTotal = myNums.reduce( (acc,curval) => acc+curval, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS course",
        price: 50000
    },
    {
        itemName: "PY course",
        price: 25000
    },
    {
        itemName: "c++ course",
        price: 20500
    },
]

const priceToPay = shoppingCart.reduce( (acc,items) => acc + items.price,0)
console.log(priceToPay);
