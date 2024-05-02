import chalk from "chalk";
import { log } from "console";
//Question 02
/* Personal Message: Store a person’s name in a variable, and print a message to that person. 
 Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?” */
let  person_Name = "Eric"
console.log("\nQuestion 02");
console.log("Hello",person_Name, "would you like to learn some python today?");

//Question 03
/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
 uppercase, and titlecase.*/
let tar = "hala is a good girl";
console.log("\nQuestion 03");
console.log('UpperCase:', tar.toUpperCase() );
console.log('LowerCase:', tar.toLowerCase() );
console.log('Titlecase:', tar.replace(/\b\w/g, (char)=> char.toUpperCase()));

//Question 04
/*Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
 Your output should look something like the following, including the quotation marks:
 Albert Einstein once said, “A person who never made a mistake never tried anything new.”
 */
let  author = "Albert Einstein";
console.log("\nQuestion 04");
console.log(author,'once said, “A person who never made a mistake never tried anything new.”');


//Question 05
/*Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
 Then compose your message and store it in a new variable called message. Print your message */
let Famous_Person = "Albert Einstein"
let mess ="once said, “A person who never made a mistake never tried anything new.”";
console.log("\nQuestion 05");
console.log(Famous_Person,mess );

//Question 06
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
 Then print the name after striping the white spaces. */
console.log("\nQuestion 06");
let withwhitespacename ="\n\tHala Farooqui\t\n";
console.log(withwhitespacename);
let withoutwhitespacename = withwhitespacename.trim();
console.log(withoutwhitespacename);

//Question 07
/*Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
 Be sure to enclose your operations in print statements to see the results. */
console.log("\nQuestion 07\n");
console.log('Addition', 4+4);
console.log('Subtraction', 12 - 4);
console.log('Multiplication', 2*4);
console.log('Division', 16/2);

/*Question 09
Favorite Number: Store your favorite number in a variable.
 Then, using that variable, create a message that reveals your favorite number. Print that message.
*/
console.log("\nQuestion 09\n");
let favouritenum : number = 9;
let message = "is my favourite number";
console.log ( favouritenum,message);

/*Question 10
Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file.
 Then write one sentence describing what the program does.*/
console.log("\nQuestion 10\n");
//with whitespace
let withwhite_spacename ="\n\tHala Farooqui\t\n";
console.log(withwhite_spacename);
//without whitespace
let withoutwhite_spacename = withwhitespacename.trim();
console.log(withoutwhite_spacename);


/*Question 11
Names: Store the names of a few of your friends in a array called names.
 Print each person’s name by accessing each element in the list, one at a time.*/
console.log("\nQuestion 11\n");
let friendsname = ['hala','aqsa','bisma','himna'];
friendsname.forEach(friendname => console.log(friendname));

/*Question 12 
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name*/
console.log("\nQuestion 12\n");
let friends_name = ['hala','aqsa','bisma','himna'];
friends_name.forEach(friendname => console.log('Hello',friendname ,'mam would you like some tea?'));


/*Question 13
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
console.log("\nQuestion 13\n");
let Transporation_mode = ['Car','Bike','Aeroplane','Train'];
Transporation_mode.forEach(mode => console.log( 'I would like to own a ',mode ,));

/*Question 14
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/
console.log("\nQuestion 14\n");
let Guestinglist = ['zeenat','Salman','Ali','Ahsan'];
Guestinglist.forEach(guest => console.log( 'Assalamu alaikum',guest,'would like to dinner with me?'));

/*Question 15
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
console.log("\nQuestion 15\n");
let guestlists : string[] =['hala','ayan','ashfaq','amir','ali'];
let notcome ="hala";
 console.log(notcome,"Sorry you are not invited for the dinner");
 guestlists.splice(0,1,"ashar");

guestlists.forEach(char => console.log(char,"congratulations you invited for the dinner"));

let Guestlist = ['zeenat','Salman','Ali','Ahsan'];
let notcomesss = Guestlist[0];
console.log(notcomesss,'This girl is not appear in our function');
Guestlist.splice(0,1,'Afaq');
Guestlist.forEach(guests => console.log( 'Assalamu alaikum',guests,'would like to dinner with me?'));


/* Question 16 
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

console.log("\nQuestion 16\n");
let guestlist =['zeenat','salman','ali', 'ahsan'];
let notcomes = guestlist[0];
console.log(chalk.red( notcomes,'This girl is not appear in our function'));
let announcement = "Hey  i found a bigger dinner table for you all.";
console.log(chalk.bgGreen( announcement));
guestlist.splice(0,1,"Afaq");
guestlist.push("Imran");
guestlist.forEach(guestss => console.log(' Assalamu alaikum',guestss,'would like to dinner with me?'));



/*Question 17
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

console.log("\nQuestion 17\n");
let guestslist =['zeenat','salman','ali', 'ahsan'];
let notcomess = guestslist[0];
console.log(chalk.red( notcomess,'This girl is not appear in our function'));
let announcement2 = "Hey  i found a bigger dinner table for you all.";
console.log(chalk.green( announcement2));
guestslist.splice(0,1,"Afaq");
guestslist.push("Imran");
guestslist.forEach(guestss => console.log(' Assalamu alaikum',guestss,'would like to dinner with me?'));
console.log(chalk.bold.greenBright("Sorry because of some reasons i have space for only 2 people at a time"));
while(guestslist.length>2 ){
    let remove = guestslist.pop();
    console.log(`"sorry sir/madam  ${remove} \n you can’t invite them to dinner."`)
}
let withwhitee_spacename ="\n\t And\t\n";
console.log(withwhitee_spacename);
for( let i=0; i<guestslist.length;  i++ ){
   console.log("sir/madam ",guestslist[i], "\n you still invited for the dinner")
}
guestslist.splice(0,2);
console.log(guestslist);

/* Question No:18
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
console.log("Question No:18");

//• Store the locations in a array. Make sure the array is not in alphabetical order.
let locations :string[] = ["Malysia","Singapore","Islamabad"];

// Print your array in its original order.
console.log(chalk.bold.blue("orinal Order 01\n"),( chalk.white(locations)  ));


// Print your array in alphabetical order without modifying the actual list.
console.log(chalk.bold.blue("\n With Aphabetical Order"));
console.log(locations.slice().sort());

//Show that your array is still in its original order by printing it.
console.log(chalk.bold.blue("\n Orignal Order 02\n" ),(chalk.white(locations)));


//Print your array in reverse alphabetical order without changing the order of the original list.
console.log(chalk.bold.blue("\n With Reverse Order"));
console.log( locations.sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log(chalk.bold.blue("\n Orignal Order 03 \n",(chalk.white(locations))));
//locations.forEach(Element =>console.log(Element));

// Reverse the order of your list. Print the array to show that its order has changed.
console.log(chalk.bold.blue("\n Its order has changed to reverse.",'\n' ));
console.log( locations.slice().reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(chalk.bold.blue("\n Its back to its original order.\n"));
console.log(locations);


// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(chalk.bold.blue("\n Its order has been changed to alphabetical order"));
locations.sort();
console.log(locations);


//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(chalk.bold.blue("\n Its order has been changed to alphabetical order"));
locations.slice().sort().reverse();
console.log(locations);


/*Question No:19
Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner.*/
console.log("Question No:19");
let guestslists =['zeenat','salman','ali', 'ahsan'];
let notcomessss = guestslists[0];
console.log(chalk.red( notcomessss,'This girl is not appear in our function'));
let announcement3 = "Hey  i found a bigger dinner table for you all.";
console.log(chalk.green( announcement3));
guestslists.splice(0,1,"Afaq");
guestslists.push("Imran");
guestslists.forEach(guestss => console.log(' Assalamu alaikum',guestss,'would like to dinner with me?'));
console.log(chalk.bold.greenBright("Sorry because of some reasons i have space for only 2 people at a time"));
while(guestslists.length>2 ){
   let remove = guestslist.pop();
   console.log(`"sorry sir/madam  ${remove} \n you can’t invite them to dinner."`);

}
let withhwhitee_spacename ="\n\t And\t\n";
console.log(withhwhitee_spacename);
for( let i=0; i<guestslist.length;  i++ ){
  console.log("sir/madam ",guestslist[i], "\n you still invited for the dinner")
       
   
}
guestslist.splice(0,2);
console.log(guestslist);

/* Question No:20
Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
Write a program that creates a list containing these items.*/
console.log("Question No:20");
let food:string[] = ["Pasta","Lasania", "Noodles","Biryani","Pulao"];
console.log(food.forEach(foodies => {console.log(foodies);
}));

