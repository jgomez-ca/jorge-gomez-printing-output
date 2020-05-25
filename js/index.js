//Variabe definition

let a = 3;
let b = 5;
let c;
let firstTask;

//Concatenation Process

firstTask = 'let a = 3;\n';
firstTask += 'let b = 5;\n';
firstTask += 'let c;\n';
firstTask += '----------\n';
firstTask += 'a + b = ' + (a + b) + '\n';
firstTask += 'a - b = ' + (a - b) + '\n';
firstTask += 'a * b = ' + (a * b) + '\n';
firstTask += 'a / b = ' + (a / b) + '\n';
firstTask += 'a % b = ' + (a % b) + '\n';
firstTask += 'a += b = ' + (a += b) + '\n';
firstTask += 'a -= b = ' + (a -= b) + '\n';
firstTask += 'a *= b = ' + (a *= b) + '\n';
firstTask += 'a /= b = ' + (a /= b) + '\n';
firstTask += 'a %= b = ' + (a %= b) + '\n';
firstTask += 'a == b = ' + (a == b) + '\n';
firstTask += 'a != b = ' + (a != b) + '\n';
firstTask += 'a > b = ' + (a > b) + '\n';
firstTask += 'a < b = ' + (a < b) + '\n';
firstTask += '!a && !c = ' + (!a && !c) + '\n';
firstTask += '!a || !c = ' + (!a || !c) + '\n';

//Printing through alert()
alert( firstTask );





//Task 2
//Declare the variable first_name and assign it with the value of your first name;
//Declare the variable last_name and assign it with the value of your last name;
//Declare the variable email and assign it with the value of your email;
//Declare the variable output;
//Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: 'My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.';
//Assign output with gotten expression;
//Print the output in JavaScript console.

let firstName = 'Jorge';
let lastName = 'Gomez';
let email = 'gome0118@algonquinlive.com';
let output;

output = 'Hello!\n My name is ' + firstName + ' ' + lastName +'.\n You can contact me at ' + email + '. \n Thank you!';


//Printing using the console
console.log( output );

