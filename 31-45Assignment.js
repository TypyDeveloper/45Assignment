/*Question No 31
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
console.log("\nQuestion No 31");
var users = [];
// List of users is not empty
if (users.length === 0) {
    console.log("we need to find some users!");
}
else {
    // list is not empty,remove all usersnames
    users = [];
    console.log("all usernames haue been removed");
}
/*Question No 32
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
console.log("\nQuestion No 32");
var current_users = ["hala", "amin", "Ashfaq", "Alam", "ALi"];
var new_users = ["hala", "amin", "adam", "agha", "Iqra"];
new_users.forEach(function (user) {
    var lowercase = user.toLowerCase();
    if (current_users.map(function (users) { return users.toLowerCase(); }).includes(lowercase)) {
        console.log(user, "your username is not available.Please enter different username");
    }
    else {
        console.log(user, "your username is not available.");
    }
});
/* Question No 33
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/
console.log("\nQuestion No 33");
var ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 1; i < ordinal.length; i++) {
    if (i == 1) {
        console.log("".concat(i, "st"));
    }
    else if (i == 2) {
        console.log("".concat(i, "nd"));
    }
    else if (i == 3) {
        console.log("".concat(i, "rd"));
    }
    else if (i >= 4) {
        console.log("".concat(i, "rth"));
    }
}
/* Question No 34
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
console.log("\nQuestion No 34");
var pizzas = ["Macroni pizza", "Spicy Pizza", "Fajita Pizza"];
console.log("\n \t Pizzas Menu:");
pizzas.forEach(function (pp) { return console.log(pp); });
console.log("\n \t Statements ");
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " "));
}
console.log("\n All these Pizzas i realy like!");
/*Question No 35
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common.
 You could print a sentence such as Any of these animals would make a great pet!*/
console.log("\nQuestion No 35");
var animals = ["elephant", "Rabit", "Cat"];
console.log("\n \t Animals Variety:");
animals.forEach(function (pp) { return console.log(pp); });
console.log("\n \t characteristics ");
for (var i = 0; i < animals.length; i++) {
    console.log("This  ".concat(animals[i], " have four legs "));
}
console.log("\n All these animals i realy like the most!");
/*Question No 36
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it.
 Call the function.*/
console.log("\nQuestion No 36");
function make_shirt(name, size) {
    console.log("The brand of these shirts is: ".concat(name, "  and the size of this shirt is:").concat(size, " available"));
}
make_shirt("Zaras", 14 - 24);
/* Question No 37
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
 and a shirt of any size with a different message.*/
console.log("\nQuestion No 37");
function make_shirts(name, message) {
    console.log("Size we have is small -".concat(name, " and message: ").concat(message, " "));
}
make_shirts("large", "I love typescript");
make_shirts("medium", "I love typescript");
make_shirts("Xsmall", "We have different collection");
/* Question No 38
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
 Call your function for three different cities, at least one of which is not in the default country.*/
console.log("\nQuestion No 38");
function describe_city(city, country) {
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("karachi", "Pakistan");
describe_city("Mumbai", "India");
describe_city("Canada", "America");
/* Question No 39
City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
console.log("\nQuestion No 39");
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
var city1 = city_country("Nawabshah", "Pakistan");
var city2 = city_country("Karachi", "Pakistan");
var city3 = city_country("Lahore", "Pakistan");
console.log(city1);
console.log(city2);
console.log(city3);
/*Question No 40
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number of tracks on an album.*/
console.log("\nQuestion No 40");
function makeAlbum(artistName, albumTitle, tracks) {
    var album = { artist: artistName, title: albumTitle };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three albums using the function and printing the results
var album1 = makeAlbum('Artist 1', 'Album 1');
var album2 = makeAlbum('Artist 2', 'Album 2', 12);
var album3 = makeAlbum('Artist 3', 'Album 3', 8);
console.log(album1);
console.log(album2);
console.log(album3);
console.log("\nQuestion No 41");
/* Question No 41
  Magicians: Make a array of magician’s names.
  Pass the array to a function called show_magicians(),
  which prints the name of each magician in the array*/
var magicians_names = ["Aman", "Abid", "Mushtaq"];
function show_magicians(name) {
    for (var _i = 0, magicians_names_1 = magicians_names; _i < magicians_names_1.length; _i++) {
        var magician = magicians_names_1[_i];
        console.log(magician);
    }
}
show_magicians(magicians_names);
console.log("\nQuestion No 42");
/* 42. Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified*/
function make_great(name) {
    for (var _i = 0, magicians_names_2 = magicians_names; _i < magicians_names_2.length; _i++) {
        var magicians = magicians_names_2[_i];
        console.log("Great ".concat(magicians));
    }
}
make_great(magicians_names);
console.log("\nQuestion No 43");
/* 43. Unchanged Magicians: Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and store it in a separate array.
 Call show_magicians() with each array to show that you have one array of the original names and one array
 with the Great added to each magician’s name*/
console.log("Orignal Magicians");
show_magicians(magicians_names);
console.log("\nGreat magicians");
make_great(magicians_names);
console.log("\nQuestion No 44");
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.  Call the function three times, using a different number of arguments each time.*/
function food() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var name_1 = names_1[_a];
        console.log("-", name_1);
    }
    return "".concat(food);
}
console.log("Menu");
food("Club sandwiches", "Mayo Sandwiches", "Chicken Sandwiches", "Garlic sandwiches");
console.log("Ingredients");
food("Bread", "Letuce", "Tomato", "Petty");
console.log("Spices");
food("Chat Masala", "Salt", "Black Pepper");
console.log("\nQuestion No 45");
function createCar(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacture: manufacture, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
var myCar = createCar('Toyoto', 'Camry', ['color', 'blue'], ['year', '2022']);
console.log(myCar);
