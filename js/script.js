const wrapperElement = document.querySelector('div.wrapper');

for ( let i = 0; i <=20 ; i = i + 2){
  const cardElement = document.createElement('div');
  cardElement.className = 'card';

  const headingCardElement = document.createElement('h2');
  headingCardElement.innerHTML = i;

  cardElement.appendChild(headingCardElement);
  wrapperElement.appendChild(cardElement);

  console.log(i)
}

