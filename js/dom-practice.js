function getCount (){
    let items = document.querySelector('li');
    let count = 0;
    for(let i = 0; i < items.length; i++){
        if (items.length[i]){
            items.length++;
        }
    }
    console.log(count);
}

const countBtn = document.querySelector(".count");
countBtn.addEventListener("click", () => {
    const paraInfo = document.querySelector('p').innerHTML = `Total list count is: ${getCount()}`;
})