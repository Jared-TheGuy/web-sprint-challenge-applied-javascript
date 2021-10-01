import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const fCard = document.createElement('div');
  const fHeadline = document.createElement('div');
  const fAuthor = document.createElement('div');
  const fImgContainer = document.createElement('div');
  const fImg = document.createElement('img');
  const fAuthorName = document.createElement('span');

  fCard.classList.add('card');
  fHeadline.classList.add('headline');
  fAuthor.classList.add('author');
  fImgContainer.classList.add('img-container');
  
  fHeadline.textContent = article.headline;
  fImg.src = article.authorPhoto;
  fAuthorName.textContent =`By ${article.authorName}`;

  fCard.appendChild(fHeadline);
  fCard.appendChild(fAuthor);
  fAuthor.appendChild(fImgContainer);
  fImgContainer.appendChild(fImg);
  fAuthor.appendChild(fAuthorName);

  fCard.addEventListener('click', function() {
    console.log(article.headline);
  });
  return fCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const target = document.querySelector(selector);

  axios.get('http://localhost:5000/api/articles').then(function ({data:{articles:{bootstrap, javascript, jquery, node, technology}}}) {
  const oof = [ bootstrap, javascript, jquery, node, technology];

  oof.forEach(function(element) {
    element.forEach(function(arg) {
      const card = Card(arg);
      target.appendChild(card);
      });
    });
  }).catch(function (error) {console.log(error)});
}

export { Card, cardAppender }
