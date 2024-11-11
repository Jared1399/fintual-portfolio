import Portfolio from "./Portfolio.js";
import Stock from "./Stock.js"

const apple = new Stock(
  'AAPL',
  {
    '2023-01-01': 100,
    '2024-01-01': 110
  }
);

const fintual = new Stock(
  'FNTL',
  {
    '2023-01-01': 200,
    '2024-01-01': 460
  }
);

//get price of a singular stock on a specific date
console.log(apple.getPrice(new Date('2023-01-01'))); //price entry exists
console.log(apple.getPrice(new Date('2023-02-01'))); //price entry does not exists

// Create a portfolio and add the stocks
const portfolio = new Portfolio();
portfolio.addStock(apple);
portfolio.addStock(fintual);

// Calculate profit and annualized return
const startDate = new Date('2023-01-01');
const endDate = new Date('2024-01-01');

const profit =  portfolio.profit(startDate, endDate)
const annReturn = portfolio.annualizedReturn(startDate, endDate)

console.log(`Profit: USD ${profit}`, ); 
console.log(`Annualized Return: ${annReturn} %`); 