// next and previous page button
let nextPage = "https://swapi.dev/api/vehicles/";

let prevPage = null;

const contentDiv = document.getElementById("content"); // get the content div



// event listener for next button
function updateButtons() {

  document.getElementById("prev").disabled = !prevPage; // disable the previous button if there is no previous page

  document.getElementById("next").disabled = !nextPage; // disable the next button if there is no next page

}

// load the page
function loadPage(url) {

  fetch(url) // fetch the url

    .then(response => response.json())

    .then(data => { // parse the response as JSON

      console.log(data); // log the data

      contentDiv.innerHTML = ""; // Clear the current content

      data.results.forEach(vehicle => { // loop through the data

        const vehicleElement = document.createElement("div"); // create a new div

        vehicleElement.innerHTML = `

                    <strong style="text-decoration:underline">Name:</strong> ${vehicle.name}<br>

                    <strong style="text-decoration:underline">Cost in Credits:</strong> ${vehicle.cost_in_credits}<br>

                    <strong style="text-decoration:underline">Crew:</strong> ${vehicle.crew}<br>

                    <strong style="text-decoration:underline">Passengers:</strong> ${vehicle.passengers}<br>

                    

                `;

        contentDiv.appendChild(vehicleElement); // add the data to the div

      });

      nextPage = data.next; // update the next page

      prevPage = data.previous; // update the previous page

      updateButtons(); // update the buttons

    })

    .catch(error => console.error("Error fetching data:", error));

}

function loadNextPage() { // load the next page

  if (nextPage) { // if there is a next page

    loadPage(nextPage); // load the next page

  }

}

function loadPreviousPage() { // load the previous page

  if (prevPage) { // if there is a previous page

    loadPage(prevPage); // load the previous page

  }

}

document.addEventListener("DOMContentLoaded", () => loadPage(nextPage)); // load the first page

