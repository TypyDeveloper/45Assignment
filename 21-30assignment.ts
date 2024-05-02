import inquirer from "inquirer";

import chalk from "chalk";


/*Question No:21
They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items.*/
 console.log("Question No:21");
 let ObjectContainingItems : {[key:string]:any}={
     "oxford":{
         name :"Enlish",
         price : 3000,
         model : "New",
         available : "Yes",
     },
     "oxford2":{
         name :"Maths",
         price : 2000,
         model : "New",
         available : "Yes",
     },
 };
 ObjectContainingItems.oxford2["material"]="Solid";
 console.log(ObjectContainingItems.oxford2);
 
 /*Question No:22
 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error.
  Make sure you correct the error before closing the program.*/
 console.log("Question No:22");
 let IntentionalError : number[] = [1.,2,3,4,45,56];
 console.log(IntentionalError[12]);
 
  /* Question No:23
  Conditional Tests: Write a series of conditional tests. 
  Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
 
 let car = 'subaru';
 
 console.log("Is car == 'subaru'? I predict True.")
 
 console.log(car == 'subaru')
 
 • Look closely at your results, and make sure you understand why each line evaluates to True or False.
 
 • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
 console.log("Question No:23");
 
 //test 1
 let car = 'subaru';
 console.log("Is car == 'subaru'? I predict True.")
 console.log(car == 'subaru');
 
 //test 2
 console.log("Is car == 'suzuki'? I predict True.")
 console.log(car == 'saburo');
 
 //test 3
 console.log("Is car == 'suzuki'? I predict True.")
 console.log(car == 'saburo');
 
 //test 4
 console.log("Is car == 'toyota'? I predict True.")
 console.log(car == 'toyota');
 
 //test 5
 console.log("Is car.length < 7 ? I predict True.")
 console.log(car.length < 7);
 
 //test 6
 console.log("Is car.length > 0 ? I predict True.")
 console.log(car.length > 0);
 
 //test 7
 console.log("Is car.toUpperCase() === 'SUBARU' ? I predict True.")
 console.log(car.toUpperCase() === 'SUBARU');
 
 //test 8
 console.log("Is car.toUpperCase() === 'subaru' ? I predict True.")
 console.log(car.toUpperCase() === 'subaru');
 
 //test 9
 console.log("Is car.toLowerCase() === 'subaru' ? I predict True.")
 console.log(car.toLowerCase() === 'subaru');
 
 // //test 10
 console.log("Is car.toLowerCase() === 'SUBARU') ? I predict True.")
 console.log(car.toLowerCase() === 'SUBARU');
 
  /*Question No:24
  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
 • Tests for equality and inequality with strings
 
 • Tests using the lower case function
 
 • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
 
 • Tests using "and" and "or" operators
 
 • Test whether an item is in a array
 
 • Test whether an item is not in a array*/
 console.log("Question No:24");
 let a = "shaheryar";
 let b = "hala";
 // Test for equality and inequality 
 console.log("Test for equality and inequality a == b" ,a == b);
 console.log("Test for equality and inequality a >= b)" ,a >= b);
 // Test using the lowercase function
 let lowercase = "hala";
 let upperCase = " HALA";
 console.log(" Test using the lowercase function lowercase !== upperCase.toLowerCase()",lowercase !== upperCase.toLowerCase());
 console.log(" Test using the lowercase function lowercase == upperCase.toLowerCase()",lowercase == upperCase.toLowerCase());
 
 //Numerical test involving equality an inequality,greater than and less than,greater than or equal than to,less than or equal to,
  let alpha = 46;
  let beta = 36;
  console.log("equality an inequality between alpha == beta", alpha == beta);
  console.log("equality an inequality between alpha !== beta", alpha !== beta);
  console.log("alpha > beta", alpha > beta);
  console.log("alpha < beta", alpha < beta);
  console.log("alpha >= beta", alpha >= beta);
  console.log("alpha <= beta", alpha <= beta);
  
  // USing "AND" or "OR" operators
  console.log(" alpha && beta", alpha>beta && beta>alpha);
  console.log(" alpha || beta", alpha>beta || beta>alpha);
 
 //  Test whether an item is an array
 let test : number[] =[1,2,3,4,5];
 let test2 = 4;
 console.log("test.indexOf(test2) == 3",test.indexOf(test2) == 3);
 //  Test whether an item is not an array
 console.log("test.indexOf(test2) == -3",test.indexOf(test2) == -3);
 
  /*Question No:25
  Alien Colors #1: Imagine an alien was just shot down in a game.
   Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
 • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
 
 • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/
  console.log("Question No:25");
 let alien_color1 = "green";
  if( alien_color1 == "green" ){
        console.log("the player just earned 5");
        
  }
  else{
     console.log("The version that fails will have no output.");
     
  }
 
 /*Question No:26
 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
 • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
 
 • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
 
 • Write one version of this program that runs the if block and another that runs the else block.*/
  console.log("Question No:26");
  let alienColor = 'green';
 
 if (alienColor === 'green') {
     console.log("You just earned 5 points for shooting the alien!");
 } else {
     console.log("You just earned 10 points!");
 }
 
 /* Question No:27
 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
 • If the alien is green, print a message that the player earned 5 points.
 
 • If the alien is yellow, print a message that the player earned 10 points.
 
 • If the alien is red, print a message that the player earned 15 points.
 
 • Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
  console.log("Question No:27");
  let alienColor1= 'Green';
  
 
  if (alienColor1 === "Green"){
     console.log("The player earned 5 points")
     
  }
  else if (alienColor1 === 'Yellow'){
          console.log("The player earned 10 points")
          
  }
  else if(alienColor1 === 'Red'){
     console.log("The player earned 15 points")
  }
 
  let alienColor2 = 'Yellow';
 
  if (alienColor1 === "Yellow"){
     console.log("The player earned 5 points")
     
  }
  else if (alienColor1 === 'Green'){
          console.log("The player earned 10 points")
          
  }
  else if(alienColor1 === 'Red'){
     console.log("The player earned 15 points")
  }
 
 
 
 
  let alienColor3 = 'Red';
  if (alienColor1 === "Yellow"){
     console.log("The player earned 5 points")
     
  }
  else if (alienColor1 === 'Green'){
          console.log("The player earned 10 points")
          
  }
  else if(alienColor1 === 'Red'){
     console.log("The player earned 15 points")
  }
 
 
 /*Question No:28
 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
 • If the person is less than 2 years old, print a message that the person is a baby.
 
 • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
 
 • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
 
 • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
 
 • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
 
 • If the person is age 65 or older, print a message that the person is an elder.*/
  console.log("Question No:28");
  let answer = await inquirer.prompt({
     name :"if",
     message : "What is your age",
     type : "number"
  })
 
  let person_age : number = 80;
  if(answer.if >= 2 && answer.if < 4  ){
     console.log("The person is a toddler");
  }
  else if(answer.if >= 4 && answer.if < 13 ){
     console.log("The person is a kid");
     
  }
  else if(answer.if >= 13 && answer.if < 20 ){
     console.log("The person is a teenager");
     
  }
  else if(answer.if >= 20 && answer.if < 65){
     console.log("the person is an adult");
     
  }
  else if(answer.if >= 65){
          console.log("The person is an elder");
 
  }
  /* Question No:29
  Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
 • Make a array of your three favorite fruits and call it favorite_fruits.
 
 • Write five if statements. Each should check whether a certain kind of fruit is in your array.
  If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
  console.log("Question No:29");
  let favourite_fruit : string[] = ["Banana","Apple","Orange", "Mango"];
  if(favourite_fruit.includes("Banana")){
     console.log("You really like banana");
     
  }
  else if(favourite_fruit.includes("Apple")){
     console.log("You really like Apple");
     
  }
  else if(favourite_fruit.includes("Orange")){
     console.log("You really like Orange");
     
  }
  else if(favourite_fruit.includes("Mango")){
     console.log("You really like Mango");
     
  }
  /*Question No 30
  Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
 • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
 
 • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
  console.log("Question No:30");
  let userName : string[] = ["Hala_1234", "Admin", "Hfarooqui", "Shaheryar04"];
  for(let i=0; i<userName.length; i++){
              if(userName[i]  == "Admin"){
           console.log("hello admin,would you like to see a status report");
       
    }
    else{
       console.log("Hello Eric, thank you for logging in again");
       
    }
 
   } 
 