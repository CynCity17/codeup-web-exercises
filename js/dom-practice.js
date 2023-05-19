// const countBtn = document.querySelector(".count");
// const paraInfo = document.querySelector("p");
//
// let countListener  = function getCount (){
//     let ul = document.querySelector('ul');
//     let items = ul.querySelectorAll('li');
//     let count = 0;
//     for(let i = 0; i < items.length; i++){
//        count = items[i]++;
//         }
//         return count;
//     }
//
//
//
// paraInfo.innerHTML = `Total list count is: ${countListener()}`
// countBtn.addEventListener('click', countListener);
let countList = function getCount(element){
    let count = document.querySelectorAll('ul li'). length;
    return count;
}
// let getCount = document.querySelectorAll('ul li').length;
//console.log(getCount)

const countBtn = document.querySelector('.count');
// const paraInfo = document.querySelector('p .display');
countBtn.addEventListener("click", countList);

//paraInfo.innerHTML = `Total list count is: ${}`;