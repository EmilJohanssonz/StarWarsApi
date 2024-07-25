const results = document.querySelector("#results");


async function asyncFetch(value) {
  const res = await fetch(`https://swapi.dev/api/${value}/`);
  const data = await res.json();
  displayResults(data, value);
}

function displayResults(data, value) {
  let output = "";
  console.log(data);
  if (value === "films") {
    data.results.forEach((item) => {
      output += `
      <div class="card p-3 m-3" style="opacity:.8">
      <h4 class="card-title text-center">${item.title}</h>
      <div class="card-content">
      <span style="text-decoration:underline">Producer</span>: ${item.producer}<br>
      <span style="text-decoration:underline">Director</span>: ${item.director}<br>
      <span style="text-decoration:underline">Release Date</span>: ${item.release_date}<br>
      <p class=""text-center${item.opening_crawl}</p >
      </div >
      </div >

      `
    })


  }
  if (value === "people") {
    data.results.forEach((item) => {
      output += `
      <div class="card p-3 m-3" style="opacity:.8">
      <h4 class="card-title text-center">${item.name}</h>
      <div class="card-content">
      <span style="text-decoration:underline">Birth Year</span>: ${item.birth_year}<br>
      <span style="text-decoration:underline">Gender</span>: ${item.gender}<br>
      <span style="text-decoration:underline">Height</span>: ${item.height}<br>
      <span style="text-decoration:underline">Mass</span>: ${item.mass}<br>
      <span style="text-decoration:underline">Skin color</span>: ${item.skin_color}<br>
      <span style="text-decoration:underline">Hair color</span>: ${item.hair_color}<br>
      <span style="text-decoration:underline">Eye color</span>: ${item.eye_color}<br>
      </div >
      </div >

      `
    })


  }
  if (value === "vehicles") {
    data.results.forEach((item) => {
      output += `
      <div class="card p-3 m-3" style="opacity:.8">
      <h4 class="card-title text-center">${item.name}</h>
      <div class="card-content">
      <span style="text-decoration:underline">Vehicles class</span>: ${item.vehicle_class}<br>
      <span style="text-decoration:underline">Cost in credits</span>: ${item.cost_in_credits}<br>
      <span style="text-decoration:underline">Consumable Date</span>: ${item.consumables}<br>
      <span style="text-decoration:underline">Model</span>: ${item.model}<br>
      <span style="text-decoration:underline">Passenger</span>: ${item.passengers}<br>
      <span style="text-decoration:underline">Length</span>: ${item.length}<br>
      <span style="text-decoration:underline">Max speed</span>: ${item.max_atmosphering_speed}<br>
      </div >
      </div >

      `
    })


  }
  if (value === "planets") {
    data.results.forEach((item) => {
      output += `
      <div class="card p-3 m-3" style="opacity:.8">
      <h4 class="card-title text-center">${item.name}</h>
      <div class="card-content">
      <span style="text-decoration:underline">Terrain</span>: ${item.terrain}<br>
      <span style="text-decoration:underline">Climate</span>: ${item.climate}<br>
      <span style="text-decoration:underline">Population</span>: ${item.population}<br>
      <span style="text-decoration:underline">Diameter</span>: ${item.diameter}<br>
      </div >
      </div >

      `
    })



  }
  results.innerHTML = output;
}

//event listener for buttons
document.querySelector("#buttons").addEventListener("click", (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
});
