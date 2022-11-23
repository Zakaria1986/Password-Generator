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




// console.log(emptArr.includes(userPassCriteria[0].upperCasedCharacters));





// Function to prompt user for password options
function getPasswordOptions() {
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
      alert("Your input: " + userInput + " Please enter number between 10 to 64");
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
      userChoice: confirm("Do you want Numbers added to your password?"),
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
  var output = [arr, userInput];
  return output;
}


// Function for getting a random element from an array
function getRandom(arr) {

  var emptArr = [];

  for (var i = emptArr.length; i < arr[1]; i++) {

    var indexRandom = Math.floor(Math.random(arr[0].length) * arr[0].length);
    console.log('Random computer choice of index: ', indexRandom);
    var accessRandonArrays = Math.floor(Math.random(arr[0][indexRandom].length) * arr[0][indexRandom].length);
    console.log(accessRandonArrays);
    var char = arr[0][indexRandom][accessRandonArrays];
    emptArr.push(char);
  }

  console.log(emptArr);

  return emptArr;

}

// Function to generate password with user input
function generatePassword() {
  var getPasswordOptions_output = getPasswordOptions()
  getRandom(getPasswordOptions_output);
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