
let price=30;
function calculateFruitCost(fruitName,quantity){
    const fruitObj=[
        {fruit:"Oranges",price:30.00},
        {fruit:"Bananas",price:20.00}
    ]
    fruitObj.find(item => item.fruit===fruitName)
    let fruitPrice=price
    console.log(`${quantity} ${fruitName} for KES ${fruitPrice*quantity}`)
}
calculateFruitCost("Orange",2)