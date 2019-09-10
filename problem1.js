let textInputElement= document.querySelector("#ta");
let change= document.querySelector("#pa");
textInputElement.onkeydown = function(e){
    console.log(e.target.value);
};
// change.innerText = onclick ;