// You're given an array (prices) where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy on stocl and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. if you cannot achieve any profit return 0.

function maxProfit(prices) {
  const results = [];
  for (let i = 0; i < prices.length; i++) {
    const temp = prices.slice(i + 1);
    if (prices[i] < Math.max(...temp)) {
      let max = Math.max(...temp) - prices[i];
      results.push(max);
    }
  }
  return Math.max(...results);
}

console.log(maxProfit([7, 1, 2, 6, 5]));
