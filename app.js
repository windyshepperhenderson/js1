let message;

let username = prompt("What is your name?");
// concatenation
// console.log("Hello " + username);

let age = prompt("How Old are you? (18-80)");

if (age <= 30) {
  message = "I am sorry you are too young for me to marry";
} 

else if (age <= 50) {
  message = "Will you Marry me? . . . . .  PLEASE!!!";
} 

else if (age < 80) {
  message = "I am terribly sorry but you are a little old for me";
} 

else {
  message = "Errr, can you not follow instructions?";
}

message = "Hello " + username + ". " + message;
document.write(message);