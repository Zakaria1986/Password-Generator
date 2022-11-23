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

  // Setting an empty array which will be populated based on users choice. 
  var arr = [];
  // console.log(arr);

  // here setting userInput variable to none as I wanted it to be dynamic so when first user inputs value it will set to that otherwise
  // change value to based on the condition
  var userInput;
  userInput = prompt("Enter a number for password between 10 to 64: ");
  userInput = +(userInput); // here setting user input to number
  console.log(typeof userInput);

  // below checking if user has inter the correct values within the range 
  // then setting the for loop to true and untill the user has enter the right value 
  // which then check to see the condition is true, it is true then it breaks out of loop 
  // or otherwise it continues to prompt user to enter the right value
  if (isNaN(userInput) || userInput < 10 || userInput > 64) {
    for (; true;) {
      alert("Your input: " + userInput + " Please enter Only numbers between 10 to 64");
      userInput = prompt("Enter a number for password should be at least 10 or more but not more than 64: ");
      userInput = +(userInput);
      console.log("Initial value: ", typeof userInput);
      if (typeof userInput === "number" && userInput >= 10 && userInput <= 64) {
        break;
      }
      else { continue; }
    }
  }


  // Write confirms dailog box here and then based on user choice add or remove the characters from the list
  // the Array below hold objects which holds user prompts for their chioce and rightful characters

  var userPassCriteria = [
    {
      userChoice: confirm("Do you want special charectors?"),
      characters: specialCharacters
    },
    {
      userChoice: confirm("Do you want your password to have lower cased characters?"),
      characters: lowerCasedCharacters
    },
    {
      userChoice: confirm("Do you want your password to have Numbers?"),
      characters: numericCharacters
    },
    {
      userChoice: confirm("Do your want your password to have Uppder case characters?"),
      characters: upperCasedCharacters
    }
  ]

  // Running the loop on the array then checkes the user choices based that choice the characters gets added to the array.  
  userPassCriteria.forEach(items => {
    console.log(items.userChoice);
    if (items.userChoice === true) {
      arr.push(items.characters);
    }
  });

  console.log(arr);
  // putting the character array and the user length into the array which then get returned making it valable to getRandom() function to
  // do its thing.
  var output = [arr, userInput];
  return output;
}


// Function for getting a random element from an array
function getRandom(arr) {

  // setting an empty array for the length of characters to be stored
  var emptArr = [];

  for (var i = emptArr.length; i < arr[1]; i++) {

    // IndexRandom gets generates random index numbers for the list array chosen by the user 
    var indexRandom = Math.floor(Math.random(arr[0].length) * arr[0].length);
    console.log('Random computer choice of index: ', indexRandom);
    // Random selects characters from the arrays which then gets push to empty array  from char variable
    var accessRandonArrays = Math.floor(Math.random(arr[0][indexRandom].length) * arr[0][indexRandom].length);
    console.log(accessRandonArrays);
    var char = arr[0][indexRandom][accessRandonArrays];
    emptArr.push(char);
  }

  console.log(emptArr);
  // returning the final array of characters 
  return emptArr;
}

// Function to generate password with user input
function generatePassword() {

  // Here passing the retured arrays (characters // input, length of password) from users choices to getRandom() as an array 
  // to generate random characters
  var getPasswordOptions_output = getPasswordOptions();
  var password = getRandom(getPasswordOptions_output);
  console.log("testing...", getPasswordOptions_output);

  // Emptyr string holds the invidual letters from the returned array from getRandom() function as string. 
  // forEach() loop is used to loop over the arrays and then through each iteration each letters added to stirng to get more readable and frienldy password
  var finalPass = "";

  password.forEach(l => { finalPass += l; });
  console.log(finalPass);

  // Finally returning the desired password 
  return finalPass;
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