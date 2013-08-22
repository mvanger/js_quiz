//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)
var quiz = {};

// Question 1: a function called sleepIn
//////////////
// You can sleep in if it is not a weekday or if you are on vacation.
// quiz.sleepIn() => false
// quiz.sleepIn({vacation: true}) => true
quiz.sleepIn = function(options) {
  date = Date();
  date = date.substring(0, 3);
  console.log(options);
  if (date === "Sat" || date === "Sun") {
    return true;
  } else if (options && options.vacation === true){
    return true;
  } else {
    return false;
  }
};

// Question 2: function called nearHundred
//////////////
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// quiz.nearHundred(52) => false
// quiz.nearHundred(93) => false TRUE??
// quiz.nearHundred('two') => Error: Please enter a number!
quiz.nearHundred = function(number) {
  if (89 < number && number < 100) {
    return true;
  } else if (typeof(number) !== "number") {
    return "Error: Please enter a number!";
  } else {
    return false;
  }
};

// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!
quiz.missingChar = function(string, index) {
  if (typeof(string) !== "string") {
    return "Error: Please enter a string!";
  } else {
  return string.slice(0, index) + string.slice(index+1);
  }
};

// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"
quiz.delDel = function(string){
  return string.replace("del", "");
};

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"
String.prototype.backAround = function(string){
  return this.slice(-1) + this.substr(0, this.length -1);
};






