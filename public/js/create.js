let dateControl = document.querySelector('input[type="datetime-local"]');

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd + 'T12:00';

//dateControl.value = '2021-04-30T:30';
dateControl.value = today;

// Create event listener for create party.
let btnEl = document.querySelector(".btn-create-party");


// Functions
function getScreenValues(event){
    let partyName = document.getElementById("party-name").value.trim();
    let partyShow = document.getElementById("party-show").value.trim();
    let showType = document.getElementByID("show-type").value;


    console.log(showType);


}


// Event listener
btnEl.addEventListener("click", getScreenValues);