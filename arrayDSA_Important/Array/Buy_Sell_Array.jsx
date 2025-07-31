function maxProfit(prices) {
    if (prices.length === 0) return 0;
  
    let minPrice = Infinity; // Initialize the minimum price to a very high value
    let maxProfit = 0;       // Initialize the maximum profit to 0
  
    for (let price of prices) {
      // Update the minimum price encountered so far
      if (price < minPrice) {
        minPrice = price;
      } else {
        // Calculate the profit if we sold at the current price
        maxProfit = Math.max(maxProfit, price - minPrice);
      }
    }
  
    return maxProfit;
  }
  
  // Example usage:
  const prices = [7, 1, 5, 3, 6, 4];
  console.log(maxProfit(prices)); // Outputs: 5 (Buy at 1, sell at 6)
  

  console.log(maxProfit([])); // Outputs: 0
  console.log(maxProfit([5])); // Outputs: 0

  const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices)); // Outputs: 0 (Prices always decrease)



  Explanation:
Track the Minimum Price:
At each step, keep track of the lowest price encountered so far (minPrice).
Calculate Profit:
For each price, calculate the potential profit if we sold the stock at the current price (price - minPrice).
Update Maximum Profit:
Keep track of the maximum profit seen so far.