console.log("here");

let delBtn = document.querySelector("#my-del");

const delPartyHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();

    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/parties/${id}`, {
      method: 'DELETE',
    });

    document.location.replace('/watchlist');
    // if (response.ok) {
    // } else {
      
    //   //alert('Failed to delete project');
    // }

  };

delBtn.addEventListener('click', delPartyHandler);




