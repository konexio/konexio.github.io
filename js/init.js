(function() {
  function storageAvailable(type) {
    try {
      var storage = window[type];
      var x = '__storage_test__';

      storage.setItem(x, x);
      storage.removeItem(x);

      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage.length !== 0
      );
    }
  }

  function setSelectedLanguage(lang) {
    window.localStorage.selectedLanguage = lang;
  }

  function getSelectedLanguage() {
    return window.localStorage.selectedLanguage;
  }

  function loadFrenchPage() {
    window.location.replace('/index-french.html');
  }

  // Check if we have traces of language preference.
  if (storageAvailable('localStorage')) {
    var lang = getSelectedLanguage();
    var usingFrenchNavigator = navigator.language.match(/fr-?\w*/) !== null;
    var onFrenchPage = document.documentElement.lang === 'fr';

    var firstVisit = !lang && !onFrenchPage;

    if (firstVisit && usingFrenchNavigator) {
      setSelectedLanguage('fr');
      loadFrenchPage();
    } else if (!onFrenchPage && lang === 'fr') {
      loadFrenchPage();
    }
  }

  // Remember the user's language selection.
  document.addEventListener('DOMContentLoaded', function(evt) {
    if (storageAvailable('localStorage')) {
      var en = document.querySelector('#lang-en');
      var fr = document.querySelector('#lang-fr');

      if (en) {
        en.addEventListener('click', function(evt) {
          setSelectedLanguage('en');
        });
      } else if (fr) {
        fr.addEventListener('click', function(evt) {
          setSelectedLanguage('fr');
        });
      }
    }
  });
})();
