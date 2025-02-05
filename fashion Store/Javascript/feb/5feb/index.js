// import fetch from "node-fetch";
// let fetchRespo = fetch("https://jsonplaceholder.typicode.com/users/1");




// fetchRespo
//     .then(response => response.json())
//     .then(response => console.log(response))



let fetchRespo2 = fetch("https://jsonplaceholder.typicode.com/photos/2");

fetchRespo2
    .then(response => response.json())
    .then(xyz => console.log(xyz))


// import fetch from "node-fetch";
// let allUsers = fetch("https://jsonplaceholder.typicode.com/users");
// console.log("----------------------promises--------------")
// allUsers
//   .then((response) => response.json()) // Parse the response as JSON
//   .then((response) => {
//     response.forEach((user) => {
//       console.log(user); // Print each user object
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching users:", error); // Handle any errors
//   });