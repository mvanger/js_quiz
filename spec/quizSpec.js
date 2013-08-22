//      ___       _______      ___       __  .__   __.  ______    __
//     /   \     /  _____|    /   \     |  | |  \ |  | |      \  |  |
//    /  ^  \   |  |  __     /  ^  \    |  | |   \|  | `----)  | |  |
//   /  /_\  \  |  | |_ |   /  /_\  \   |  | |  . `  |     /  /  |  |
//  /  _____  \ |  |__| |  /  _____  \  |  | |  |\   |    |__|   |__|
// /__/     \__\ \______| /__/     \__\ |__| |__| \__|     __    (__)
//                                                        (__)
// http://pivotal.github.io/jasmine/

// The first question's tests are written.
// See quiz.js for more details

describe('question1', function() {

  it('returns true if today is saturday or sunday', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.sleepIn()).toBe(false);
  });

  it('returns true if an options hash is passed with vacation set to true', function() {
    expect(quiz.sleepIn({vacation: true})).toBe(true);
  });

});

describe('question2', function() {

  it('returns true if number is 93', function() {
    expect(quiz.nearHundred(93)).toBe(true);
  });

  it('returns false if number is 52', function() {
    expect(quiz.nearHundred(52)).toBe(false);
  });

  it('throws an error for non-numbers', function() {
    expect(quiz.nearHundred('two')).toBe("Error: Please enter a number!");
  });

});

describe('question3', function(){

  it('returns the split string', function(){
    expect(quiz.missingChar("kittie", 1)).toBe("kttie");
  });

  it('throws an error without a string', function(){
    expect(quiz.missingChar(347, 1)).toBe("Error: Please enter a string!");
  });

});

describe('question4', function(){

  it('deletes del from a string', function(){
    expect(quiz.delDel("abdelcd")).toBe("abcd");
  });

  it('does not change anything without del', function(){
    expect(quiz.delDel("xyz")).toBe("xyz");
  });

});

describe('question5', function(){

  it('moves the last character to the front', function(){
    expect("cat".backAround()).toBe("tca");
  });

  it('moves the last character to the front', function(){
    expect("hello".backAround()).toBe("ohell");
  });

});
// Write the next tests yourself!
// See quiz.js for more details






