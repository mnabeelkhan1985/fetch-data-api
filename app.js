fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7f448076fdad4ac8a1fc45bc2b05109c`)

  .then(response => response.json())

  .then(json => console.log(json))





fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7f448076fdad4ac8a1fc45bc2b05109c`)

  .then(response => response.json())

  .then(json => {

    var cards; 

    var cardsDiv = document.getElementById("cards");

    for (var i = 0; i < json.articles.length; i++) {

          cards = `<div class="card" style="width: 18rem;">

          <img class="card-img-top" src="${json.articles[i].urlToImage}" alt="Card image cap">

          <div class="card-body">

            <h5 class="card-title">${json.articles[i].title}</h5>

            <p class="card-text">${json.articles[i].description}</p>

          </div>

        </div>`

        cardsDiv.innerHTML += cards;

      }

  })