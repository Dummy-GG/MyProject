let currentNumber = document.getElementById("number")
currentNumber.innerHTML = Math.round(Math.random() * 6)

function Character(name, type, hp, weapon) {
    this.name = name
    this.type = type
    this.hp = hp
    this.weapon = weapon
    this.status = function () {
        document.getElementById("character").innerHTML = `Your HP is ${this.hp}!`
    }
    
}


let knight = new Character("Steve", "Worrior", "100", "Sword");
function display() {
    knight.status();
}

