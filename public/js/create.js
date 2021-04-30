let dateControl = document.querySelector('input[type="datetime-local"]');

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd + 'T12:00';

console.log(today);
//dateControl.value = '2021-04-30T:30';
dateControl.value = today;