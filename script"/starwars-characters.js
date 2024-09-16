//event listener for search button
document.getElementById('searchButton').addEventListener('click', async () => { //search for a character
  const characterName = document.getElementById('characterName').value.trim(); //get the name of the character
  if (characterName) {
    await fetchStarWarsCharacter(characterName); //call the fetch function
  }
});

//fetch function
async function fetchStarWarsCharacter(name) { //name is the name of the character
  const url = `https://swapi.dev/api/people/?search=${name}`; //url is the url of the character
  try {
    const response = await fetch(url); //fetch the url
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); //parse the data
    displayData(data); //display the data
  } catch (error) {
    console.error('Error fetching the data:', error);
    document.getElementById('output').textContent = 'Error fetching the data'; //display error
  }
}

//display function
function displayData(data) { //data is the data of the character
  const output = document.getElementById('output'); //get the output element
  output.innerHTML = ''; // Clear previous results

  if (data.count === 0) {
    const li = document.createElement('li'); //create a list item
    li.textContent = 'No characters found';
    output.appendChild(li); //append the list item to the output
  } else {
    data.results.forEach(character => { //loop through the data
      const li = document.createElement('li'); //create a list item
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
      output.appendChild(li); //append the list item to the output
    });
  }
}
