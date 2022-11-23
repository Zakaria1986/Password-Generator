// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// var arr = [...upperCasedCharacters, ...lowerCasedCharacters, ...specialCharacters, ...numericCharacters];


// Generating raondom numbers test - i'm gonna go with code below as this as this seem more fun

// var arrOriginal = [upperCasedCharacters, lowerCasedCharacters, specialCharacters, numericCharacters];
// console.log(arrOriginal);
var arr = [];
// console.log(arr);

var userInput;
userInput = prompt("Enter a number for password between 10 to 64: ");

console.log("Initial value: ", userInput);


if (userInput < 10 || userInput > 64) {
  for (; true;) {
    alert("Your input:" + userInput)
    userInput = prompt("Enter a number for password should be at least 10 or more but not more than 64: ");
    console.log("Initial value: ", userInput);
    if (userInput >= 10 && userInput <= 64) {
      break;
    }
    else { continue; }
  }
}

// Write confirms dailog box here and then based on user choice add or remove the characters from the list

var userPassCriteria = [
  {
    userChoice: confirm("Do you want special charectors?"),
    characters: specialCharacters
  },
  {
    userChoice: confirm("Do you want special lower cased characters?"),
    characters: lowerCasedCharacters
  },
  {
    userChoice: confirm("Do you want Nummbers added to your password?"),
    characters: numericCharacters
  },
  {
    userChoice: confirm("do you want add Uppder case to your password?"),
    characters: upperCasedCharacters
  }
]

userPassCriteria.forEach(items => {
  console.log(items.userChoice);
  if (items.userChoice === true) {
    arr.push(items.characters);
  }
});


console.log(arr);

var emptArr = [];

for (var i = emptArr.length; i < userInput; i++) {
  console.log("printing index: ", i);

  var indexRandom = Math.floor(Math.random(arr.length) * arr.length);
  console.log('Random computer choice of index: ', indexRandom);

  var accessRandonArrays = Math.floor(Math.random(arr[indexRandom].length) * arr[indexRandom].length);
  console.log(accessRandonArrays);
  var char = arr[indexRandom][accessRandonArrays];

  emptArr.push(char);

}
console.log(emptArr);



// Function to prompt user for password options
function getPasswordOptions() {
  // Ask user the options of enter the length of password and the inlusion of the character
  // if the length is greater than 8 and less than 16 and less. 
  //var passLength = prompt('Enter password between 10 to 64 characters: ');

  // if (passLength > 0 && passLength < 10 && passLength > 64) {
  //   prompt("Your password should be at least 10 characters but no more than 64");
  // }
  // if not true prompt to enter numbers between the lesson 
  // if it is true then enter ask if they wanna innclude numbers,
  // if it is true then enter ask if they wanna innclude symbol,
  // if it is true then enter as if they wanna innclude Upper case letters,
  // if it is true then enter as if they wanna innclude lower case letters

  // if all true or base on some option get random letters and symbols 

}
var getPasswordOptions = getPasswordOptions();
console.log(getPasswordOptions);


// Function for getting a random element from an array
function getRandom(arr) {



}
getRandom();

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);