
//event listener for search button
document.getElementById('searchButton').addEventListener('click', async () => { //search for a planet
  const query = document.getElementById('searchQuery').value.trim(); //get the name of the planet
  if (query) {
    await fetchStarWarsPlanets(query); //call the fetch function
  }
});

//fetch function
async function fetchStarWarsPlanets(query) {
  const url = `https://swapi.dev/api/planets/?search=${query}`; //url is the url of the planet
  try {
    const response = await fetch(url); //fetch the url
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); //throw error
    }
    const data = await response.json(); //parse the data
    displayData(data); //display the data
  } catch (error) {
    console.error('Error fetching the data:', error);
    document.getElementById('output').textContent = 'Error fetching the data'; //display error
  }
}

//display function
function displayData(data) {
  const output = document.getElementById('output'); //get the output element
  output.innerHTML = ''; // Clear previous results

  if (data.count === 0) {
    const li = document.createElement('li'); //create a list item
    li.textContent = 'No planets found';
    output.appendChild(li); //append the list item to the output
  } else {
    data.results.forEach(planet => {
      const li = document.createElement('li'); //create a list item
      li.innerHTML = `
              <strong>Name:</strong> ${planet.name} <br>
              <strong>Rotation Period:</strong> ${planet.rotation_period} <br>
              <strong>Orbital Period:</strong> ${planet.orbital_period} <br>
              <strong>Diameter:</strong> ${planet.diameter} <br>
              <strong>Climate:</strong> ${planet.climate} <br>
              <strong>Gravity:</strong> ${planet.gravity} <br>
              <strong>Population:</strong> ${planet.population}
          `;
      output.appendChild(li); //append the list item to the output
    });
  }
}
