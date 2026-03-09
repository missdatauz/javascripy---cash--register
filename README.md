# JavaScript Cash Register

A functional cash register application that calculates change based on the price of an item, the amount paid, and the currency available in the drawer.

## Features
- **Change Calculation:** Accurately determines the change to be returned to the customer.
- **Drawer Management:** Tracks the amount of each currency unit available in the cash drawer (cid).
- **Status Handling:** - Returns `INSUFFICIENT_FUNDS` if the drawer cannot provide the exact change.
  - Returns `CLOSED` if the change due is exactly equal to the total amount in the drawer.
  - Returns `OPEN` if change is successfully provided and money remains.

## Tech Stack
- **JavaScript (ES6+)** - Core logic and algorithms.
- **HTML5 & CSS3** - User interface and styling.

## Live Demo
You can view the project live here: [Live Link](https://missdatauz.github.io/javascripy---cash--register/)

## How to Run
1. Clone the repository.
2. Open `index.html` in any modern web browser.
