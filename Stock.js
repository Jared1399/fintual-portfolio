class Stock {
  constructor(name, prices) {
    this.name = name;
    this.prices = prices; 
  }

  getPrice(date) {
    // Convert date to string to match the key format in prices object
    const dateString = date.toISOString().split('T')[0];
    //return corresponding date price or 0
    return this.prices[dateString] || 0;
  }
}

export default Stock;