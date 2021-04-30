//let dateControl = document.querySelector('input[type="datetime-local"]');
let dateControl = document.getElementById("party-date");

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd + 'T12:00';

console.log(today);
//dateControl.value = '2021-04-30T:30';
dateControl.value = today;

// Create event listener for create party.
let btnEl = document.querySelector(".btn-create-party");


// Functions
const getScreenValues = async (event) => {
    event.preventDefault();

    let partyName = document.getElementById("party-name").value.trim();
    let partyShow = document.getElementById("party-show").value.trim();
    let showType = document.getElementById("show-type").value;
    let showGenre = document.getElementById("show-genre").value;
    let showStream = document.getElementById("show-stream").value;
    let partyDate = document.getElementById("party-date").value;

    let res = partyDate.split("T");
    let dateString = `${res[0]} ${res[1]}`;
  
    if (partyName) {
      const response = await fetch(`/api/parties`, {
        method: 'POST',
        body: JSON.stringify({ "party_name": partyName, 
                                "party_time": dateString,
                                "stream_link": showStream,
                                "show_name": partyShow,
                                "show_type": showType,
                                "genre_name": showGenre,
                                "host_id": 1}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      document.location.replace("/watchlist");
    //   if (response.ok) {
    //       document.location.replace("/watchlist");
    //   } else {
    //      // document.location.replace("/");
    //   }
    }
  };

// Event listener
btnEl.addEventListener("click", getScreenValues);