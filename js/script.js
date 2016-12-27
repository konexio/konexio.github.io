var unselected = document.querySelector('#language-selector a:not(.selected)');

function clickEvent(e) {
  e.preventDefault();
  var main = document.querySelector('.main');
  main.classList.toggle('fr');
  main.classList.toggle('en');

  var langSelectors = document.getElementsByClassName('select-lang');
  for (var i = 0; i < langSelectors.length; i++) {
    langSelectors[i].classList.toggle('selected');
  }

  unselected.removeEventListener('click', clickEvent);
  document.querySelector('#language-selector a:not(.selected)').addEventListener('click', clickEvent);
}

unselected.addEventListener('click', clickEvent);
