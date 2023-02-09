let a = 1;
let b = a++;
let c = ++a;
// a = 3, b = 1, c = 3
console.log(a);
console.log(b);
console.log(c);

let d = "hello";
let e = false;
d++;
e++;

let perplexed;
perplexed + 2;
console.log(perplexed + 2);

let price = 2.7;
price.toFixed(2);
//2.70
console.log(price.toFixed(2));

let price2 = "2.7";
price.toFixed(2);
//only runs numbers
console.log(price2);

isNaN(0);
//false
isNaN(1);
//false
isNaN("");
//true
isNaN("string");
//true
isNaN("0");
//false
isNaN("1");
//false
isNaN("3.145");
//false
isNaN(Number.MAX_VALUE);
//false
isNaN(Infinity);
//false
isNaN("true");
//true
isNaN(true);
//false
isNaN("false");
//true
isNaN(false);
//false
NaN == NaN;

!true;
//false

!false;
//true

!!true;
//true

!!false;
//false

!!0;
//true

!!-0;
//false

!!1;
//true

!!-1;
//true

!!0.1;
//true

!!"hello";
//true

!!"";
//false

!!'';
//false

!!"false";
//true

!!"0";
//true

let sample = "Hello Codeup";
console.log(sample.length);

console.log(sample.toLowerCase());
console.log(sample.toUpperCase());
console.log(sample + " Students");
console.log(sample + " Students".replace(" Students", " Class"));
console.log(sample.indexOf('c'));
console.log(sample.indexOf('C'));
console.log(sample.substring(6));

let firstHalfEnd = sample.indexOf('o') + 2;
let firstHalfName = sample.substring(0, firstHalfEnd);
sample = sample.substring(firstHalfEnd)
console.log(sample);

// let discordName = "[YoLoBlob]Jason";
// let guildCharEnd = discordName.indexOf(']') + 1;
// let guildName = discordName.substring(0, guildCharEnd);
// discordName = discordName.substring(guildCharEnd);
// let message = `The user's name is ${discordName}.
// And they are a member of the ${guildName} guild.`;
// console.log(message);
// console.log("This user's guild is => ", guildName);
// console.log("This user's name is => ", discordName);

let rentMovie = 3
let mermaid = (3 * rentMovie);
let brotherBear = (5 * rentMovie);
let hercules = (1 * rentMovie)
let totalCost = mermaid + brotherBear + hercules;
console.log(`Total cost to rent all 3 movies is: $ ${totalCost}`);

let google = (6 * 400);
let amazon = (4 * 380);
let facebook = (10 * 350);
let totalPayWeek = google + amazon + facebook;
console.log (`My total pay this week is: $ ${totalPayWeek}`);

let classNotFull = true
let doesNotConflict = true
let message = "Enrolled!"
if(classNotFull === doesNotConflict) {
    console.log(message);
} else {
    console.log("Cannot Enroll.");
}

let itemsBought = 3;
let isPremium = true;
let offerExpired = false;
let offerValid = (isPremium || itemsBought) && offerExpired;
if(offerValid) {
    console.log("Discount Applied");
} else {
    console.log("Discount Not Appllied");
}
// let user = "Jason";
// let dontLike = "jason";
// let message = "i don't like you! go away!";
// message = message.toUpperCase();
// if(user.toLowerCase() ===dontLike.toLowerCase()) {
//     console.log(message);
// } else {
//     console.log("Not Jason, you're cool.");
// }

let username = 'codeup';
let password = 'notastrongpassword';
let char5 = password >= 5;
let notUserName = password !== username;
let userLength = username.length <= 20;
let noWhitespace = (username.indexOf (" ")) <= 0 && (password.indexOf (" ")) <= 0;

if (char5 && notUserName && userLength && noWhitespace) {
    console.log("Username and password requirements are met.");
} else {
    console.log("Username and password do not meet requirements.");
}