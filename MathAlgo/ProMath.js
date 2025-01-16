1. Basic Probability in JavaScript


Simulating a Coin Toss: check with precentage check

let p = Math.pow(2/4 , 1); // flip coin 

console.log(p)

Simulating a Coin Toss:

javascript
Copy code
const coinToss = () => (Math.random() < 0.5 ? "Heads" : "Tails");
console.log(coinToss());


Rolling a Die:

javascript
Copy code
const rollDie = () => Math.floor(Math.random() * 6) + 1; // Outputs 1 to 6
console.log(rollDie());
Calculating Simple Probability: Example: Probability of rolling a 3 on a six-sided die.

javascript
Copy code
const probability = (favorable, total) => favorable / total;
console.log(probability(1, 6)); // 1/6 = 0.1666...
2. Random Selection
Randomly Selecting an Item:

javascript
Copy code
const selectRandom = (items) => items[Math.floor(Math.random() * items.length)];
const fruits = ["Apple", "Banana", "Cherry"];
console.log(selectRandom(fruits)); // Randomly selects a fruit
Simulating Events with Probabilities: Example: Simulating events with different probabilities.

javascript
Copy code
const weightedRandom = (weights) => {
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  const rand = Math.random() * total;
  let cumulative = 0;

  for (let i = 0; i < weights.length; i++) {
    cumulative += weights[i];
    if (rand < cumulative) return i;
  }
};

const outcomes = ["Win", "Lose", "Draw"];
const probabilities = [0.5, 0.3, 0.2]; // Probabilities must sum to 1
console.log(outcomes[weightedRandom(probabilities)]);


3. Conditional Probability
Example: Probability of event A given event B.
javascript
Copy code
const conditionalProbability = (probAandB, probB) => probAandB / probB;
console.log(conditionalProbability(0.2, 0.5)); // P(A|B) = P(A and B) / P(B)
4. Simulating Repeated Experiments
Monte Carlo Simulation: Estimate the probability of an event by simulating random experiments.
javascript
Copy code
const monteCarlo = (trials, event) => {
  let success = 0;
  for (let i = 0; i < trials; i++) {
    if (event()) success++;
  }
  return success / trials;
};

// Example: Probability of rolling a 6 on a die
const event = () => rollDie() === 6;
console.log(monteCarlo(10000, event)); // Approximate probability



5. Logical Operations with Probability


Union of Events (A or B):
const unionProbability = (probA, probB, probAandB) =>
    probA + probB - probAandB;
  
  console.log(unionProbability(0.3, 0.5, 0.1)); // Example



  Intersection of Events (A and B):P(A∩B) =P(A)×P(B) (if independent)
  const intersectionProbability = (probA, probB) => probA * probB;

console.log(intersectionProbability(0.4, 0.5)); // Example





6. Advanced Simulations
Simulating a Deck of Cards:

javascript
Copy code
const createDeck = () => {
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  const deck = [];
  suits.forEach((suit) => {
    values.forEach((value) => {
      deck.push(`${value} of ${suit}`);
    });
  });
  return deck;
};

const deck = createDeck();
const shuffledDeck = deck.sort(() => Math.random() - 0.5);
console.log(shuffledDeck[0]); // Draw a random card
Probability of Drawing Specific Cards:

javascript
Copy code
const probabilityOfCard = (desiredCards, totalCards) =>
  desiredCards / totalCards;

console.log(probabilityOfCard(4, 52)); // Probability of drawing a specific rank (e.g., King)
7. Visualization (Optional with Libraries)
Use JavaScript libraries like Chart.js or D3.js to visualize probabilities:

Bar charts for probability distributions.
Pie charts for event outcomes.
Use Cases in AI and Games
Predicting outcomes in games (e.g., dice rolls, card games).
Simulating random behaviors (e.g., NPC decisions in a game).
Generating datasets with probabilistic rules for training AI models.
By mastering these techniques, you can effectively use JavaScript for probability-based logic in applications, simulations, or games!