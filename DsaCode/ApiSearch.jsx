<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search User</title>
</head>
<body>
    <h1>Search for a User</h1>

    <!-- Input for search -->
    <input type="text" id="search" placeholder="Enter username">
    <button onclick="apisear()">Search</button>

    <!-- Display all users -->
    <h2>All Users:</h2>
    <div id="all-users"></div>

    <!-- Display search result -->
    <h2>Search Result:</h2>
    <div id="result"></div>

    <script>
        let allUsers = []; // To store all users globally

        // Fetch and display all users when the page loads
        const fetchAllUsers = async () => {
            try {
                let response = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!response.ok) throw new Error("Failed to fetch data");

                allUsers = await response.json();

                // Display all users
                let allUsersDiv = document.getElementById("all-users");
                allUsers.forEach(user => {
                    allUsersDiv.innerHTML += `
                        <p><strong>Name:</strong> ${user.name}, 
                        <strong>Email:</strong> ${user.email}</p>`;
                });
            } catch (error) {
                console.error("Error fetching all users:", error.message);
                document.getElementById("all-users").innerHTML = `
                    <p style="color: red;">An error occurred: ${error.message}</p>`;
            }
        };

        // Search for a specific user
        const apisear = () => {
            let sear = document.getElementById("search").value.trim();
            let resultDiv = document.getElementById("result");
            resultDiv.innerHTML = ""; // Clear previous result

            let userFound = false;

            allUsers.forEach(user => {
                if (user.name.toLowerCase() === sear.toLowerCase()) {
                    resultDiv.innerHTML = `
                        <h2>User Found:</h2>
                        <p><strong>Name:</strong> ${user.name}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                        <p><strong>Website:</strong> ${user.website}</p>
                        <p><strong>Company:</strong> ${user.company.name}</p>`;
                    userFound = true;
                }
            });

            if (!userFound) {
                resultDiv.innerHTML = `<p style="color: red;">User "${sear}" not found.</p>`;
            }
        };

        // Fetch all users when the page loads
        window.onload = fetchAllUsers;
    </script>
</body>
</html>
