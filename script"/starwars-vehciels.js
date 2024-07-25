let nextPage = "https://swapi.dev/api/vehicles/";

let prevPage = null;

const contentDiv = document.getElementById("content");




function updateButtons() {

  document.getElementById("prev").disabled = !prevPage;

  document.getElementById("next").disabled = !nextPage;

}




function loadPage(url) {

  fetch(url)

    .then(response => response.json())

    .then(data => {

      console.log(data);

      contentDiv.innerHTML = ""; // Clear the current content

      data.results.forEach(vehicle => {

        const vehicleElement = document.createElement("div");

        vehicleElement.innerHTML = `

                    <strong style="text-decoration:underline">Name:</strong> ${vehicle.name}<br>

                    <strong style="text-decoration:underline">Cost in Credits:</strong> ${vehicle.cost_in_credits}<br>

                    <strong style="text-decoration:underline">Crew:</strong> ${vehicle.crew}<br>

                    <strong style="text-decoration:underline">Passengers:</strong> ${vehicle.passengers}<br>

                    

                `;

        contentDiv.appendChild(vehicleElement);

      });

      nextPage = data.next;

      prevPage = data.previous;

      updateButtons();

    })

    .catch(error => console.error("Error fetching data:", error));

}


function loadNextPage() {

  if (nextPage) {

    loadPage(nextPage);

  }

}

function loadPreviousPage() {

  if (prevPage) {

    loadPage(prevPage);

  }

}

document.addEventListener("DOMContentLoaded", () => loadPage(nextPage));

