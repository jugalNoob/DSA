  /// Total All amount with all user 



  let totalSum = 0; // Initialize sum variable

  for (let key of  objArray) { 
      let sum = key.details.total; // Extract `total` value
      totalSum += sum; // Add to total sum
    //  console.log(sum); // Print individual total values
  }
  
  console.log("Total Sum:", totalSum); // Print the final sum of all `total` values
  
  



  // search with index number  ..............................

let sear = 0;
let userFounds = false;

for (let user of objArray) { 
    if (user.index === sear) { // Compare with index
        console.log("User found:", user.details.name);
        console.log("User info:", user);
        userFounds = true;
        break;
    }
}

if (!userFounds) {
    console.log("User not found.");
}



/// Search with name in object Banking system 


let sear = "Jugal Sharma";
let userFounds = false;


for (let user of objArray) { 
    if (user.details.name.toLowerCase() === sear.trim().toLowerCase()) { // Trim and compare case-insensitively
        console.log("User found:", user.details.name);
        console.log("User info:", user);
        userFounds = true;
        break;
    }
}


if (!userFounds) {
    console.log("User not found.");
}



/// Store  in loacl Stoarge 


let jsondata = JSON.stringify(objArray); // Correct way to convert data to JSON string

console.log(jsondata); // Logs the JSON string instead of the object

localStorage.setItem("userData", jsondata); // Stores JSON string in localStorage



/// Add user with inpute box  Important ..................................

function addUser() {
    let name = document.getElementById("name").value.trim();
    let total = document.getElementById("total").value;
    let accountNumber = document.getElementById("accountNumber").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let accountType = document.getElementById("accountType").value;

    if (!name || !total || !accountNumber || !email || !phone || !address) {
        alert("All fields are required!");
        return;
    }

    let newUser = {
        index: objArray.length,
        details: {
            name,
            total: parseFloat(total),
            accountNumber,
            email,
            phone,
            address,
            accountType,
            createdAt: new Date().toISOString(),
        }
    };

    objArray.push(newUser);
    alert("User added successfully!");
    displayUsers();
}


// Update User Name in Banking system ...................


// Function to update user name using for...of loop
function updateUserName(accountNumber, newName) {
    let userFound = false;

    for (let user of objArray) {
        if (user.details.accountNumber === accountNumber) {
            console.log(`Before Update: ${user.details.name}`);
            user.details.name = newName;
            console.log(`After Update: ${user.details.name}`);
            userFound = true;
            break; // Exit loop once the user is found and updated
        }
    }

    if (!userFound) {
        console.log("User not found.");
    }
}

// Example: Change "Jugal Sharma" to "Jugal Verma"
updateUserName("1234567890", "Jugal Verma");

// Example: Change "Kanika Sharma" to "Kanika Gupta"
updateUserName("0987654321", "Kanika Gupta");

console.log(objArray);



/// ------------------- Detele with nindex number ---------


const objArray = [
    {
        index: 0,
        details: {
            name: "Jugal Sharma",
            total: 45,
            accountNumber: "1234567890",
            email: "jugal@example.com",
            phone: "9876543210",
            address: "123 Main St, City, Country",
            accountType: "Savings",
            createdAt: new Date().toISOString(),
        }
    },
    {
        index: 1,
        details: {
            name: "Kanika Sharma",
            total: 69,
            accountNumber: "0987654321",
            email: "kanika@example.com",
            phone: "8765432109",
            address: "456 Elm St, City, Country",
            accountType: "Checking",
            createdAt: new Date().toISOString(),
        }
    }
];

// Function to delete user by index using for...of loop
function deleteUserByIndex(indexNumber) {
    let indexToDelete = -1; // Store index of user to delete

    for (let i = 0; i < objArray.length; i++) {
        if (objArray[i].index === indexNumber) {
            indexToDelete = i;
            break; // Stop loop once found
        }
    }

    if (indexToDelete !== -1) {
        console.log(`Deleting user: ${objArray[indexToDelete].details.name}`);
        objArray.splice(indexToDelete, 1);
        console.log("User deleted successfully.");
    } else {
        console.log("User not found.");
    }
}

// Example: Delete user with index 0
deleteUserByIndex(0);

// Example: Try deleting a non-existent user
deleteUserByIndex(5);

console.log(objArray);



/// 0---- user Delete ------------


function deleteUserByIndex(indexNumber) {
    let newArray = [];
    
    for (let user of objArray) {
        if (user.index !== indexNumber) {
            newArray.push(user); // Keep users except the one to delete
        }
    }

    if (newArray.length === objArray.length) {
        console.log("User not found.");
    } else {
        console.log(`User with index ${indexNumber} deleted successfully.`);
    }

    return newArray;
}

// Example: Delete user with index 0
const updatedArray = deleteUserByIndex(0);
console.log(updatedArray);



/// Total Mmemory Update In Your back account .............


let totalmoney = 10; // Initialize sum variable

for (let key of objArray) { 
    if (key.index === 0) {  // Check if index is 0

        if (key.details.total <= 45) {
            key.details.total += totalmoney;  // ✅ Corrected += instead of =+
        } else {
            console.log("Check Your Total Money");
        }
        
        console.log("Total for index 0:", key.details.total);
    }
}
