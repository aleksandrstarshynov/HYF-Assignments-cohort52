function requestData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
}

function renderImage(data) {
  const img = document.createElement('img');
  img.src = data.img;
  img.alt = data.alt;
  img.title = data.title;
  img.style.maxWidth = '100%';
  document.body.appendChild(img);
}

function renderError(error) {
  const errorElement = document.createElement('h1');
  errorElement.textContent = `Error: ${error.message}`;
  errorElement.style.color = 'red';
  document.body.appendChild(errorElement);
}

async function main() {
  try {
    const data = await requestData('https://xkcd.now.sh/?comic=latest');
    renderImage(data);
  } catch (error) {
    renderError(error);
  }
}

window.addEventListener('load', main);
