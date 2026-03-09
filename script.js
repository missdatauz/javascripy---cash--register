const cash = document.querySelector('#cash');
const  changeDueElement = document.querySelector('#change-due');
const purchaseButton = document.querySelector('#purchase-btn')

let price = 19.5;
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

let unitValues = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
};




purchaseButton.addEventListener("click", ()=> {
  let cashValue = Math.round(parseFloat(cash.value) * 100);
 let priceIntCents = Math.round(price * 100);
 let changeDue = cashValue - priceIntCents;
let originalChangeDue = changeDue;
  if (cashValue < priceIntCents) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  if (cashValue === priceIntCents) {
    changeDueElement.innerHTML = "No change due - customer paid with exact cash";
    return;
  }
 
  let totalCid = cid.reduce((acc, curr) => {
  return acc + Math.round(curr[1] * 100);
 
}, 0);

let reversedCid = [...cid].reverse()

let resultChange = [];

reversedCid.forEach(curr => {
let currencyName = curr[0];
let currencyTotal = Math.round(curr[1] * 100);
let unitValue = unitValues[currencyName];

let amountFromUnit = 0;

  while (changeDue >= unitValue && currencyTotal > 0) {
  changeDue -= unitValue;
  currencyTotal -= unitValue;
  amountFromUnit += unitValue;
}

if (amountFromUnit > 0) {
  resultChange.push([currencyName, amountFromUnit / 100]);

}
});

if (changeDue > 0) {
   changeDueElement.innerHTML = 'Status: INSUFFICIENT_FUNDS'
  return;
} else if (originalChangeDue === totalCid) {
  let changeStr = resultChange.map(el => `${el[0]}: $${el[1]}`).join(" ");
  changeDueElement.innerHTML = `Status: CLOSED ${changeStr}`;
 return;
} else {
        let changeStr = resultChange.map(el => `${el[0]}: $${el[1]}`).join(" ");
        changeDueElement.innerHTML = `Status: OPEN ${changeStr}`;
    return;
   
}
console.log(resultChange)
})



