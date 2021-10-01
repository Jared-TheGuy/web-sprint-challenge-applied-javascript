const Header = (title, date, temp) => { 
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const fHeader = document.createElement('div');
  const fDate = document.createElement('span');
  const fTitle = document.createElement('h1');
  const fTemp = document.createElement('span');
  
  fHeader.appendChild(fDate);
  fHeader.appendChild(fTitle);
  fHeader.appendChild(fTemp);

  fHeader.classList.add('header');
  fDate.classList.add('date');
  fTemp.classList.add('temp');

  fDate.textContent = date;
  fTitle.textContent = title;
  fTemp.textContent = temp;

  return fHeader;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const target = document.querySelector(selector);
  const value = Header('title', 'date', 'temp');
  
  target.appendChild(value);

}

export { Header, headerAppender }
