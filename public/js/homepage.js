// Handle button click on homepage
// Query selectors

let createBtn = document.getElementById("my-btn-add");
let joinBtn = document.getElementById("my-btn-join");


// Functions
function joinHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  document.location.assign('/join');
};
  

// Functions
function createHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  document.location.assign('/create');
};
  

// Event listeners
createBtn.addEventListener('click', createHandler);
joinBtn.addEventListener('click', joinHandler);

