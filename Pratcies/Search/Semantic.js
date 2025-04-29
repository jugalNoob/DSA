// 1. Tokenization
// Breaking text into smaller pieces (tokens), usually words or phrases.


function tokenize(text) {
    let tokens = [];
    let words = text.toLowerCase().split(/\s+/); // Split the text into words

    for (let i = 0; i < words.length; i++) {
        tokens.push(words[i]); // Push each word into the tokens array
    }

    return tokens;
}

const searchQuery = "Find information about JavaScript functions";
const tokens = tokenize(searchQuery);
console.log(tokens); // ['find', 'information', 'about', 'javascript', 'functions']


// Explanation:
// The text.toLowerCase() ensures that the text is converted to lowercase.

// The split(/\s+/) splits the text based on spaces into individual words.

// Instead of using map or split, I loop through the array of words and push each word into the tokens array manually.