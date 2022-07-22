
class KioskCalc{
    constructor(fruit,quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 } 
        this.getCost = function(){
            return `${quantity} ${fruit} for KES ${quantity*this.fruitsPriceList.avocado}`
        }

        }
    }
 var kioskCalc = new KioskCalc("avocado", 2);
 console.log(kioskCalc.getCost());
 