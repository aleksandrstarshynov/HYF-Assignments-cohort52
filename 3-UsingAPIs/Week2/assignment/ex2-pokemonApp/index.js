async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error; 
  }
}

async function fetchAndPopulatePokemons(selectElement) {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
  try {
    const data = await fetchData(url);
    data.results.forEach(pokemon => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = capitalize(pokemon.name);
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error('Error populating Pokémon list:', error);
  }
}

async function fetchImage(url, imgElement) {
  try {
    const data = await fetchData(url);
    const imageUrl = data.sprites.front_default;
    imgElement.src = imageUrl;
    imgElement.alt = data.name;
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function main() {
  const select = document.createElement('select');
  const img = document.createElement('img');
  img.alt = 'Select a Pokémon to see its image';
  img.style.marginTop = '1rem';

  document.body.appendChild(select);
  document.body.appendChild(img);

  await fetchAndPopulatePokemons(select);

  select.addEventListener('change', () => {
    const url = select.value;
    if (url) {
      fetchImage(url, img);
    }
  });
}
window.addEventListener('load', main);