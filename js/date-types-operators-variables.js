let a = 1;
//a = 1
let b = a++;
//b = 1, a = 2
let c = ++a;
// a = 3, b = 1, c = 3
console.log(a);
console.log(b);
console.log(c);

let d = "hello";
let e = false;
d++;
//d = NaN
e++;
//1 (0 is falsey so javascript thinks you're trying to increment from 0)

let perplexed;
perplexed + 2;
console.log(perplexed + 2);

let price = 2.7;
price.toFixed(2);
//"2.70"
console.log(price.toFixed(2));

let price2 = "2.7";
price.toFixed(2);
//error becuase .toFixed can only run numbers
console.log(price2);

isNaN(0);
//false

isNaN(1);
//false

isNaN("");
//false ; undefined is falsey thus = to 0

isNaN("string");
//true

isNaN("0");
//false ; cohersed into a number

isNaN("1");
//false ; cohersed into a number

isNaN("3.145");
//false ; coheresed into a number

isNaN(Number.MAX_VALUE);
//false ; max value is the highest number javascript can count so still a number

isNaN(Infinity);
//false; still considered a number as it is infinte

isNaN("true");
//true

isNaN(true);
//false ; true is considered a truthy value which is = 1

isNaN("false");
//true
isNaN(false);
//false ; false is considered a falsey value which is = 0

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
//false

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

let sampleLength = sample.length;
console.log(sampleLength); //we are doing it this way to ensure we practice and make easier for diagnostics
console.log(sample.length);//but this is not incorrect

let sampleUpper = sample.toUpperCase();
let sampleLower = sample.toLowerCase();
console.log(sampleUpper);
console.log(sampleLower);
console.log(sample.toLowerCase());
console.log(sample.toUpperCase());

let sampleJoin = sample + ' Students.';
let sampleJoinBetter = `${sample} Students.`;
console.log(sampleJoin);
console.log(sampleJoinBetter);
console.log(sample + " Students");

let sampleJoinReplace = sampleJoinBetter.replace('Students', 'Class');
console.log(sampleJoinReplace);
console.log(sample + " Students".replace(" Students", " Class"));

let cIndex = sampleJoinReplace.indexOf('c');
console.log(cIndex);
console.log(sample.indexOf('c'));

let capCIndex = sampleJoinReplace.indexOf('C');
console.log(capCIndex);
console.log(sample.indexOf('C'));


console.log(sample.substring(6)); //this is without using indexOf & substring together

let codeupWord = sampleJoinReplace.substring(capCIndex, 12);
console.log(codeupWord);

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

let pricePerDay = 3;
let movie1 = 3;
let movie2 = 5;
let movie3 = 1;
let totalMovieCost = pricePerDay * (movie1 + movie2 + movie3);
console.log(`The price per day for each movie is $${pricePerDay}.
The total number o ays for each move is $${movie1 + movie2 + movie3}.
The total cost to the customer is $${totalMovieCost}`);

let rentMovie = 3 //the way I did it was this way
let mermaid = (3 * rentMovie);
let brotherBear = (5 * rentMovie);
let hercules = (1 * rentMovie)
let totalCost = mermaid + brotherBear + hercules;
console.log(`Total cost to rent all 3 movies is: $${totalCost}`);


let google = 6 * 400;//the way I did it, essentially the same as the example done in class
let amazon = 4 * 380;
let facebook = 10 * 350;
let totalPayWeek = google + amazon + facebook;
console.log (`My total pay this week is: $${totalPayWeek}`);
let formattedPaycheck = totalPayWeek.toLocaleString("en-US", {style:"currency", currency:"USD"});
// this part done in class
console.log(formattedPaycheck);

let scheduleConflicts = false;
let maxClassSize = 30;
let currentClassSize = 24;
let canEnroll = !scheduleConflicts && currentClassSize < maxClassSize;
console.log(canEnroll);

let classNotFull = true //the one i did
let doesNotConflict = true
let message = "Enrolled!"
if(classNotFull === doesNotConflict) {
    console.log(message);
} else {
    console.log("Cannot Enroll.");
}

let minCartSize = 2;
let cartSize = 3;
let premiumMember = false;
let offerExpired = false;
let canOfferApply = (premiumMember || (cartSize >= minCartSize)) && !offerExpired;
console.log(canOfferApply);

let boughtMoreThan2 = true; //this was my route of thought after changing from previous that had numbers
let isPremium = true;
let offerIsExpired = false;
let offerValid = (isPremium || offerIsExpired) && boughtMoreThan2; //not right but might be if written differently
//have not tested it
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
let char5 = password.length >= 5;
let notUserName = password.indexOf(username) >= 0; // this was my original: password !== username;
let userLength = username.length <= 20;
let noWhitespace = (username.indexOf (" ")) <= 0 && (password.indexOf (" ")) <= 0;
//let userLength = username.length
//let passwordLength = passoword.length
//let firstCharUser = username.substring(0,1);
//let lastCharUser = username.substring((userLength - 1), userLength);
//let firstCharPass = password.substring(0,1);
//let lastCharPass = password.substring((passLength - 1), passLength);
//let hasWhiteSpace = firstCharUser === ' ' || lastCharUser === ' ' || firstCharPass === ' ' || lastCharPass === ' ';
//console.log(hasWhiteSpace);
if (char5 && notUserName && userLength && noWhitespace) {
    console.log("Username and password requirements are met.");
} else {
    console.log("Username and password do not meet requirements.");
}