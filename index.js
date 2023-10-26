class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner {
    #dessert; 

    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }

   
    getDessert() {
        return this.#dessert;
    }
}

const myBreakfast = new Breakfast('Eggs', 'Orange Juice');
const myLunch = new Lunch('Caesar Salad', 'Tomato Soup', 'Water');
const myDinner = new Dinner('Greek Salad', 'Chicken Soup', 'Steak', 'Ice Cream');

console.log(myDinner.getDessert()); 