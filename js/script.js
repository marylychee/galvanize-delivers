let menu = {
  burger : {
    name : "Royale with Cheese",
    price : "$8.99"
  },
  pizza : {
    name : "Argula Pie",
    price : "$11.99"
  },
  ribs : {
    name : "Smoked Swine",
    price : "$14.99"
  },
  icecream : {
    name : "Ice Cream Biscuit",
    price : "$7.99"
  }
};



// This sets up the billling
let menuBody = document.getElementById("menu-body");
let buttons = document.getElementsByClassName("pay");

//sets up the sum total, tax and total
let sumTotal = document.getElementById("subtotal");
let tax = document.getElementById("tax");
let total = document.getElementById("total");
let sumTotalNum = 0;


for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {

      //sets up the billing items to populate on click
      let tableRow = document.createElement('tr');
      let foodItem = document.createElement('td');
      let foodPrice = document.createElement('td');

      //fills in innerText and adds to sum total
      if (i === 0) {
        foodItem.innerText = menu.burger.name;
        foodPrice.innerText = menu.burger.price;
        console.log(sumTotalNum);
        sumTotalNum += 8.99;
        console.log(sumTotalNum);
      } else if (i === 1) {
        foodItem.innerText = menu.pizza.name;
        foodPrice.innerText = menu.pizza.price;
        sumTotalNum += 11.99;
      } else if (i === 2) {
        foodItem.innerText = menu.ribs.name;
        foodPrice.innerText = menu.ribs.price;
        sumTotalNum += 14.99;
      } else if (i === 3) {
        foodItem.innerText = menu.icecream.name;
        foodPrice.innerText = menu.icecream.price;
        sumTotalNum += 7.99;
      };

      tableRow.appendChild(foodItem);
      tableRow.appendChild(foodPrice);
      menuBody.appendChild(tableRow);

      sumTotal.innerText = '$' + (sumTotalNum.toFixed(2)).toString();
      tax.innerText = '$' + ((sumTotalNum * 0.085).toFixed(2)).toString();
      total.innerText = '$' + ((sumTotalNum * 1.085)).toFixed(2).toString();
    });

};
