let data = ["jugal", "karan", "anku", "kanika", "kavi", "kajal"];
let search = "ka"; // Search term for lexical matching (can be full word or prefix)

// Function for Lexical Search (Exact Match)
function lexicalSearchExact(data, search) {
    // Sort data alphabetically (lexical order)
    data.sort();

    for (let i = 0; i < data.length; i++) {
        if (data[i] === search) {
            return `Found exact match: ${search} at position ${i}`;
        }
    }

    return `Exact match for "${search}" not found`;
}

// Function for Lexical Search (Prefix Match)
function lexicalSearchPrefix(data, search) {
    // Sort data alphabetically (lexical order)
    data.sort();

    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].startsWith(search)) {
            result.push(data[i]);
        }
    }

    return result.length > 0 ? `Words starting with "${search}": ${result.join(', ')}` : `No matches found for prefix "${search}"`;
}

console.log(lexicalSearchExact(data, "anku")); // Exact match search
console.log(lexicalSearchPrefix(data, "ka"));   // Prefix match search
