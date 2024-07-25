let nextPage = "https://swapi.dev/api/starships/";

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

      data.results.forEach(starship => {

        const starshipElement = document.createElement("div");

        starshipElement.innerHTML = `

                    <strong style="text-decoration:underline">Name:</strong> ${starship.name}<br>

                    <strong style="text-decoration:underline">Cost in Credits:</strong> ${starship.cost_in_credits}<br>

                    <strong style="text-decoration:underline">Length:</strong> ${starship.length}<br>

                    <strong style="text-decoration:underline">Crew:</strong> ${starship.crew}<br>

                    <strong style="text-decoration:underline">Passengers:</strong> ${starship.passengers}<br>

                    

                `;

        contentDiv.appendChild(starshipElement);

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

