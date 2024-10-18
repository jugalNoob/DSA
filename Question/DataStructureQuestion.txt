Q what is  string in js ?
In JavaScript, a string is a data type that represents a sequence of
 characters used to store and manipulate text. Strings can be defined
  using single quotes, double quotes, or backticks. They are immutable,
   meaning that once a string is created, its content cannot be changed directly.
 However, new strings can be created based on existing ones.



Strings in JavaScript can include letters, numbers, symbols, 
and spaces. They are commonly used for various purposes, such 
as displaying messages, storing user input, or manipulating text
data. JavaScript provides a variety of methods to work with strings,
allowing you to perform operations
 like concatenation, slicing, searching, and replacing text.

Common String Methods
charAt(index): Returns the character at the specified index.

charCodeAt(index): Returns the Unicode value of the character at the specified index.

concat(string1, string2, ...): Combines two or more strings and returns a new string.

includes(searchString, position): Determines whether a string contains a specified substring, returning true or false.

endsWith(searchString, length): Checks if a string ends with a specified substring.

indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a specified substring, or -1 if not found.

lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of a specified substring.

length: A property that returns the number of characters in a string.

replace(searchValue, newValue): Replaces occurrences of a specified substring with a new substring.

search(regexp): Searches for a specified regular expression and returns the index of the first match.

slice(beginIndex, endIndex): Extracts a section of a string and returns it as a new string.

split(separator, limit): Splits a string into an array of substrings based on a specified separator.

startsWith(searchString, position): Checks if a string starts with a specified substring.

toLowerCase(): Converts all characters in a string to lowercase.

toUpperCase(): Converts all characters in a string to uppercase.

trim(): Removes whitespace from both ends of a string.

valueOf(): Returns the primitive value of a string object.

Other Methods
padStart(targetLength, padString): Pads the current string from the start with another string until it reaches the specified length.
padEnd(targetLength, padString): Pads the current string from the end with another string until it reaches the specified length.



Q what is Array in Javascript ?
An array in JavaScript is a data structure used to store multiple 
values in a single variable. It is an ordered collection, meaning 
the values are stored in a specific sequence, and each value is 
accessed by its position, 
or index, which starts at 0.

Key Characteristics of JavaScript Arrays:

Ordered Collection: The elements in an array are stored in a sequence.
Indexed: Elements are accessed using a numeric index, starting from 0.
Dynamic Size: Arrays in JavaScript are dynamic, meaning they can grow or shrink in size as needed.
Storing a list of items: You can use arrays to store a list of items, like names, numbers, or objects.





Q Object  in javascript ?

An object in JavaScript is a complex data structure that allows you
 to store collections of key-value pairs. It is one of the core building
  blocks of the language and is used to represent real-world entities,
   configurations, and more. Each key (also called a property) in an
    object is associated with a value, which can be of 
any data type (e.g., string, number, array, function, or another object).


Key Characteristics of JavaScript Objects:

Key-Value Pairs: Objects consist of properties, where each property has 
a key (a string or symbol) and an associated value.

Unordered: The properties of an object do not maintain any particular order.

Mutable: Objects in JavaScript are mutable, meaning their properties can be
 added, modified, or deleted after the object is created.

Methods: Objects can also have methods, which are functions that operate
 on the object's properties or perform tasks.


 Example Use Cases:
Representing entities: Objects can represent complex
 entities like a person, product, or any real-world object.

Grouping related data: You can store related data (like 
configurations or user settings) in an object.

State management: In applications, objects are often used to 
manage state, representing the current values and settings at a given point in time.



Q what is function in js ? 

A function in JavaScript is a block of reusable code designed to perform a
 specific task or a set of tasks. Functions take inputs (known as parameters
  or arguments), process them, and can return an output. They
   help in organizing code into modular, reusable,
 and maintainable sections.


Key Characteristics of Functions in JavaScript:
Reusable: Functions allow you to reuse code. Once a function is defined, it can be called (invoked) multiple times with different inputs.
Parameters: Functions can take one or more parameters, which are inputs passed to the function for processing.
Return Value: Functions can return a value back to the caller using the return statement. If no return is specified, the function returns undefined.
First-Class Citizens: In JavaScript, functions are treated as "first-class objects," meaning they can be assigned to variables, passed as arguments to other functions, and returned from 
other functions (higher-order functions).

Anonymous Functions: JavaScript supports anonymous functions, which are functions without a name, often used 
as arguments in higher-order functions or for short, inline operations.

Arrow Functions: A more concise way to define functions in JavaScript,
 using the => syntax, which also handles the this keyword differently.

 Types of Functions: ..................

Named Functions: Functions that have a name and can be invoked using that name.
Anonymous Functions: Functions without a name, often used inline.
Arrow Functions: Shorter syntax for anonymous functions, introduced in ES6.
Constructor Functions: Functions used with the new keyword to create objects.
IIFE (Immediately Invoked Function Expressions): Functions that are defined and executed immediately.




Q what is set in javascript ?


A Set in JavaScript is a built-in object that allows you to store unique 
values of any type, whether they are primitive values or object references.
 Unlike arrays, Sets automatically eliminate duplicate values and ensure
  that each element in the set appears only once.

Key Characteristics of a Set:
Unique Values: A Set does not allow duplicate values. If you try to add a value that already exists, it will be ignored.
Unordered: Set elements are not indexed and do not maintain any specific order like arrays.
Diverse Data Types: A Set can hold values of different data types (numbers, strings, objects, etc.).
Iterable: A Set is iterable, meaning you can loop over its elements using methods like forEach(), for...of loop, or other iteration techniques.


Common Methods of a Set:
add(value): Adds a new value to the Set. If the value already exists, it is ignored.
delete(value): Removes a value from the Set.
has(value): Checks if a specific value is present in the Set.
clear(): Removes all elements from the Set.
size: A property that returns the number of elements in the Set.
forEach(): Executes a function for each value in the Set.


Difference Between Set and Array:
Sets do not allow duplicate values, while arrays can contain duplicates.
Sets do not have an index or specific order, while arrays are ordered collections and can be accessed by index.




Q what is Map in js ?

A Map in JavaScript is a collection of key-value pairs, where both 
keys and values can be of any data type (objects, primitives, etc.). 
It is similar to an object in that it stores key-value pairs, but it has 
some important differences and additional capabilities.


Key Characteristics of a Map:

Unique Keys: Each key in a Map must be unique, meaning you cannot have
 duplicate keys. However, values can be duplicated.

Preserves Insertion Order: The Map object maintains the order of
 insertion, meaning the keys are iterated in the order they were added.

Flexible Key Types: Unlike objects, which only accept strings or symbols 
as keys, Maps allow keys of any data type, including objects, functions,
 or primitives.

Iterable: Maps are iterable, meaning you can loop through their keys,
 values, or key-value pairs using methods like forEach(), for...of, or
  iteration methods.

Common Methods of a Map: ..............

set(key, value): Adds a new key-value pair to the Map or updates an existing key with a new value.
get(key): Retrieves the value associated with the specified key.
has(key): Returns true if the specified key exists in the Map, otherwise returns false.
delete(key): Removes the specified key-value pair from the Map.
clear(): Removes all key-value pairs from the Map.
size: A property that returns the number of key-value pairs in the Map.
keys(): Returns an iterator for the keys in the Map.
values(): Returns an iterator for the values in the Map.
entries(): Returns an iterator for the key-value pairs in the Map.


Example Use Cases: ..........

Storing structured data: Maps are ideal for storing complex data structures where you need flexible keys, such as when you want to map objects to values.
Caching or lookup tables: Maps are often used to store data that needs to be quickly retrieved using specific keys, like caching results from expensive operations.
Tracking metadata: Maps are useful for storing additional data about an object or function that may not be appropriate to store directly on that object or function.
Difference Between Map and Object:
Key Types: Objects can only use strings or symbols as keys, whereas Maps can use any type of key, including objects.
Order: Maps maintain the order of key-value pairs, while objects do not guarantee the order of properties.
Size: The size property of a Map gives you the number of entries, while an object has no equivalent (you'd use Object.keys(obj).length to count properties).
Performance: Maps are optimized for key-value pair operations like adding, removing, or querying keys.




Q what is  WeakMap  in js ? 

A WeakMap is similar to a Map, but its keys must be objects, and the key-value pairs are "weakly referenced." This means that if there are no other references to the object, the entry can be garbage-collected, preventing memory leaks.

Use Cases:
Storing metadata or private data for objects without affecting garbage collection.
Managing temporary or auxiliary data that should be garbage-collected when no
 longer needed.

Q what is  WeakSet  in js ?

A WeakSet is similar to a Set, but its values must be objects, and the objects in the WeakSet are weakly referenced. If there are no references to an object, it will be garbage-collected, similar to WeakMap.

Use Cases:
Tracking objects without preventing their garbage collection.
Managing collections of objects without worrying about memory overhead.




Q what is  Queue and Deque (Double-ended Queue) in js ?

JavaScript does not have built-in Queue and Deque data structures, but they can be easily implemented using Arrays:

Queue: A First-In-First-Out (FIFO) data structure, where elements are added to the end and removed from the front.
Deque: A Double-Ended Queue allows adding and removing elements from both ends, either the front or the back.
Use Cases:
Task scheduling systems.
Buffering systems for data processing.

Queue Methods in JavaScript
enqueue: Enter queue, add an element at the end.
dequeue: Leave queue, remove the front element and return it.
front: Get the first element.
isEmpty: Determine whether the queue is empty.
size: Get the number of element(s) in queue.




8. Stacks
Like Queues, Stacks can also be implemented using Arrays. Stacks follow a Last-In-First-Out (LIFO) principle where elements are added and removed from the same end (the top).

Use Cases:
Managing function calls (call stack).
Undo/redo functionality in applications.

Common Methods of Stack in JavaScript
push: Input a new element.
pop: Remove the top element, return the removed element.
peek: Return the top element.
length: Return the number of element(s) in the stack.








3. Linked List .......

Unilateral Linked List Methods in JavaScript
size: Return the number of node(s).
head: Return the element of the head.
add: Add another node in the tail.
remove: Remove a certain node.
indexOf: Return the index of a node.
elementAt: Return the node of an index.
addAt: Insert a node at a specific index.
removeAt: Delete a node at a specific index.


4. Set  ...........

Typical Set Methods in JavaScript
values: Return all elements in a set.
size: Return the number of elements.
has: Determine whether an element exists.
add: Insert elements into a set.
remove: Delete elements from a set.
union: Return the intersection of two sets.
difference: Return the difference of two sets.
subset: Determine whether a certain set is a subset of another set.


5. Hash Table  ............

Hash Table Methods in JavaScript
add: Add a key-value pair.
remove: Delete a key-value pair.
lookup: Find a corresponding value using a key.


6. Tree  ...............

Tree Data Structure Concepts
Root: Root node of a tree; no parent node for root
Parent node: Direct node of the upper layer; only has one
Child node: Direct node(s) of the lower layer; can have multiple
Siblings: Share the same parent node
Leaf: Node with no child
Edge: Branch or link between nodes
Path: The edges from a starting node to the target node
Height of Node: Number of edges of the longest path of a specific node to leaf node
Height of Tree: Number of edges of the longest path of the root node to the leaf node
Depth of Node: Number of edges from root node to specific node
Degree of Node: Number of child nodes



7. Trie 



8. Graph ...........



Here are the types of data structures in JavaScript:

