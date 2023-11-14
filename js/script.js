const wrapperElement = document.querySelector('div.wrapper');

for (let i = 1; i <= 100; i++) {
  const cardElement = document.createElement('div');
  cardElement.className = 'card';

  const headingCardElement = document.createElement('h2')
  headingCardElement.innerHTML = i;

  if (i % 3 === 0) {
    headingCardElement.classList.add("green")
    headingCardElement.innerHTML = 'fizz';
  } else  if (i % 5 === 0) {
    headingCardElement.classList.add("yellow")
    headingCardElement.innerHTML = 'buzz';
  }

  cardElement.appendChild(headingCardElement);
  wrapperElement.appendChild(cardElement);

  console.log(i)
}

