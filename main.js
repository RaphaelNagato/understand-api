const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "logo.jpg";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

// Create request variable and assign a new XMLttpRequest object to it
let request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function() {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response);
  if (request.status >= 200 && request.status <= 400) {
    data.forEach(movie => {
      // Create a div with a card class
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      //   Create an h1 tag and set it's text content to the film's title
      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      //   Create a p and set the text content to the film's description
      const p = document.createElement("p");
      //   Use substring method to reduce the description of the movie to 300 chars
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      // Add all cards created to container
      container.appendChild(card);

      //   Each card will contain h1 and p elements
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMsg = document.createElement("h1");
    errorMsg.textContent = `Gah, seems we have encountered a problem, rawfile3000 apologizes, LOVE YOU 3000`;
    app.apppendChild(errorMsg);
  }
};

request.send();
