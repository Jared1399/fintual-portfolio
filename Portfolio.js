class Portfolio {
  constructor() {
    this.stocks = [];
  }

  addStock(stock) {
    this.stocks.push(stock);
  }

  profit(startDate, endDate) {
    let startValue = 0;
    let endValue = 0;

    this.stocks.forEach(stock => {
      startValue += stock.getPrice(startDate);
      endValue += stock.getPrice(endDate);
    });

    const profit = endValue - startValue;
    return profit;
  }

  annualizedReturn(startDate, endDate) {
    //get all start values and sum 
    const startValue = this.stocks.reduce((total, stock) => total + stock.getPrice(startDate), 0);

    //get all the end values and sum
    const endValue = this.stocks.reduce((total, stock) => total + stock.getPrice(endDate), 0);

    //take account for leap years
    const years = (endDate - startDate) / (1000 * 60 * 60 * 24 * 365.25);

    //annualized return formula
    const annualizedReturn = Math.pow((endValue / startValue), (1 / years)) - 1;

    return annualizedReturn.toFixed(2);
  }
}

export default Portfolio;