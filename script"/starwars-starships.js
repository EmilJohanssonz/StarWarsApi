
// next and previous page button
let nextPage = "https://swapi.dev/api/starships/";
let prevPage = null;
// get the content div
const contentDiv = document.getElementById("content");

// event listener for next button
function updateButtons() {

  document.getElementById("prev").disabled = !prevPage; // disable the previous button if there is no previous page

  document.getElementById("next").disabled = !nextPage; // disable the next button if there is no next page

}

// load the page
function loadPage(url) {

  fetch(url) // fetch the url

    .then(response => response.json()) // parse the response as JSON

    .then(data => {

      console.log(data); // log the data

      contentDiv.innerHTML = ""; // Clear the current content

      data.results.forEach(starship => { // loop through the data

        const starshipElement = document.createElement("div"); // create a new div
        // add the data to the div
        starshipElement.innerHTML = `

                    <strong style="text-decoration:underline">Name:</strong> ${starship.name}<br>

                    <strong style="text-decoration:underline">Cost in Credits:</strong> ${starship.cost_in_credits}<br>

                    <strong style="text-decoration:underline">Length:</strong> ${starship.length}<br>

                    <strong style="text-decoration:underline">Crew:</strong> ${starship.crew}<br>

                    <strong style="text-decoration:underline">Passengers:</strong> ${starship.passengers}<br>

                    

                `;

        contentDiv.appendChild(starshipElement); // add the div to the content

      });

      nextPage = data.next; // set the next page

      prevPage = data.previous; // set the previous page

      updateButtons(); // update the buttons

    })

    .catch(error => console.error("Error fetching data:", error)); // catch any errors

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

