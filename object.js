// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 
// 60.00"
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