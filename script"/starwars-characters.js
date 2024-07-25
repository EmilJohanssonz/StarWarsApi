document.getElementById('searchButton').addEventListener('click', async () => {
  const characterName = document.getElementById('characterName').value.trim();
  if (characterName) {
    await fetchStarWarsCharacter(characterName);
  }
});

async function fetchStarWarsCharacter(name) {
  const url = `https://swapi.dev/api/people/?search=${name}`;
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
    li.textContent = 'No characters found';
    output.appendChild(li);
  } else {
    data.results.forEach(character => {
      const li = document.createElement('li');
      li.innerHTML = `
      <strong>Name:</strong> ${character.name} <br>
      <strong>Height:</strong> ${character.height} <br>
      <strong>Mass:</strong> ${character.mass} <br>
      <strong>Hair Color:</strong> ${character.hair_color} <br>
      <strong>Skin Color:</strong> ${character.skin_color} <br>
      <strong>Eye Color:</strong> ${character.eye_color} <br>
      <strong>Birth Year:</strong> ${character.birth_year} <br>
      <strong>Gender:</strong> ${character.gender}
          `;
      output.appendChild(li);
    });
  }
}