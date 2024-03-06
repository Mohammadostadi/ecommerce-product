const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input');

minusButton.addEventListener('click', event => {
    if (inputField.value > 0 ){
        event.preventDefault();
        const currentValue = Number(inputField.value) || 0;
        inputField.value = currentValue - 1;
    }
});

plusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue + 1;
});


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
var show = true;
var PopUp = document.getElementById('pop-up');
var popUps = document.getElementById('pop-ups');



function showPopUp(name){
    if (show){
        show = false;
        popUps.classList.add("show")
        if(name == 'user'){
            PopUp.classList.add('show-pop-up')
        }
    }else{
        show = true; 
        popUps.classList.remove("show")
    }
}

function closePopUp(){
    show = true
    popUps.classList.remove("show")
}