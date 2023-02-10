"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let color = prompt("What is your favorite color?");
console.log(color);
alert(`Great! ${color} is my favorite color too!`);

// CLASS EXAMPLE
// let priceInput = prompt('How much does a movie cost per day?');
// let pricePerDay = parseFloat(priceInput);
// let movieInput = prompt('How many days did you rent Little Mermaid?');
// let movie1 = parseFloat(movieInput);
// let movieInput2 = prompt('How many days did you rent Brother Bear?');
// let movie2 = parseFloat(movieInput2);
// let movieInput3 = prompt('How many days did you rent Hercules?');
// let movie3 = parseFloat(movieInput3);
// let totalMovieCost = pricePerDay * (movie1 + movie2 + movie3);
// alert(`The total cost of your rentals is ${totalMovieCost.toLocaleString("en-US", {style:"currency", currency:"USD"})}`);

let howManyDays = prompt(`How many days total did you rent?
(Total meaning all the days per movie
EX:
little mermaid - 3 days
brother bear - 5 days
hercules - 1 day
Total of 9 days
Enter: 9)`);
console.log(howManyDays);
alert(`Your total cost for your rentals is: $${3 * howManyDays}`);

let hoursGoogle = prompt(`How many hours did you work for Google?`);
console.log(hoursGoogle);
let hoursAmazon = prompt(`How many hours did you work for Amazon?`);
console.log(hoursAmazon);
let hoursFacebook = prompt(`How many hours did you work for Facebook?`);
console.log(hoursFacebook);
let gooolePay = 400;
let amazonPay = 380;
let facebookPay = 350;
alert(`Your total pay for the week is $${
    (hoursGoogle * gooolePay) + (hoursAmazon * amazonPay) + (hoursFacebook * facebookPay)}`);

let maxClassSize = 30;
let currentClassSize = 24;
let scheduleConflicts = confirm(`Does this class conflict with your current schedule?
Click "Cancel" if it does conflict. Click "Ok", if it does not conflict.`);
console.log(scheduleConflicts);

let canEnroll = scheduleConflicts && currentClassSize < maxClassSize;
console.log(canEnroll);
if(canEnroll) {
    alert("Enrolled!");
} else {
    alert("Cannot Enroll.");
}

let minCartSize = 2;
let cartSize = parseInt( prompt('How many items did you purchase?') );
console.log(cartSize);
let arePremium = confirm(`If premium member click "ok".
If not premium member click "cancel".`);
console.log(arePremium);
let addOffer = prompt(`Enter your offer code:`);
console.log(addOffer);
let offerValid = addOffer === 'February1';
console.log(offerValid);
let premiumMember = false;
let offerExpired = false;
let canOfferApply = (arePremium || (cartSize >= minCartSize)) && offerValid;
console.log(canOfferApply);
if(canOfferApply) {
    alert("Discount Applied!");
} else {
    alert("Discount Not Applicable.");
}