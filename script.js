let addMessage = document.querySelector('.message');
    addInfo = document.querySelector('.ingridient');
    addType = document.querySelector('.or');            
    addButton = document.querySelector('.add');
    list = document.querySelector('.list');
    deleteInput = document.querySelector('.alco_name');
    deleteBtn = document.querySelector('.delete_btn');
    moreBtn = document.querySelector('.more');
    title = document.querySelector('.title');
    titleInfo = document.querySelector('.title_info');
    titleStatus = document.querySelector('.title_status');

let drinks = [];

let type = document.getElementById('alco');

function HashStorage(){
    this.addDrink = function(name, body) {
        localStorage.setItem(name, JSON.stringify(body));
    };
    this.deleteDrink = function(name) {
        localStorage.removeItem(name);
    };
    this.getDrink = function(name) {
        let drink = localStorage.getItem(name);
        drink = JSON.parse(drink);
        title.innerHTML = `Название напитка: ${drink.drink}`;
        titleInfo.innerHTML = `Состав напитка: ${drink.info}`;
        titleStatus.innerHTML = `Алкоголь: ${drink.alco ? 'да' : 'нет'}`;
        console.log(drink);
    }
    this.getDrinks = function() {
        
    }
}



const drinkStorage = new HashStorage();

deleteBtn.addEventListener('click', function() {
    if(!deleteInput.value) return;
    const key = deleteInput.value;
    drinkStorage.deleteDrink(key);
});

addButton.addEventListener('click', function() {
    if(!addMessage.value) return;
    if(!addInfo.value) return;
    const newDrink = { 
        drink: addMessage.value,
        info: addInfo.value,
        alco: type.checked,
    };
    drinkStorage.addDrink(addMessage.value, newDrink);
});

moreBtn.addEventListener('click', function() {
    if(!deleteInput.value) return;
    drinkStorage.getDrink(deleteInput.value);

});












