document.getElementById('searchButton').addEventListener('click', async () => {
  const query = document.getElementById('searchQuery').value.trim();
  if (query) {
    await fetchStarWarsPlanets(query);
  }
});

async function fetchStarWarsPlanets(query) {
  const url = `https://swapi.dev/api/planets/?search=${query}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error('Error fetching the data:', error);
    document.getElementById('output').textContent = 'Error fetching the data';
  }
}

function displayData(data) {
  const output = document.getElementById('output');
  output.innerHTML = ''; // Clear previous results

  if (data.count === 0) {
    const li = document.createElement('li');
    li.textContent = 'No planets found';
    output.appendChild(li);
  } else {
    data.results.forEach(planet => {
      const li = document.createElement('li');
      li.innerHTML = `
              <strong>Name:</strong> ${planet.name} <br>
              <strong>Rotation Period:</strong> ${planet.rotation_period} <br>
              <strong>Orbital Period:</strong> ${planet.orbital_period} <br>
              <strong>Diameter:</strong> ${planet.diameter} <br>
              <strong>Climate:</strong> ${planet.climate} <br>
              <strong>Gravity:</strong> ${planet.gravity} <br>
              <strong>Population:</strong> ${planet.population}
          `;
      output.appendChild(li);
    });
  }
}