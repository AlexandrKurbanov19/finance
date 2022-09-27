window.onload = () => {
    const langSelect = document.querySelectorAll('.custom-select');
    const langListItems = document.querySelectorAll('.custom-select__item');
    const activeLangImg = document.querySelectorAll('.custom-select__active img');
    const activeLang = document.querySelectorAll('.custom-select__active span');

    langSelect.forEach((item) => {
        item.addEventListener('click', (e) => {
          item.classList.toggle('active');
        });
      });
    
      langListItems.forEach((item) => {
        item.addEventListener('click', (e) => {
          let checkLang = item.dataset.lang,
            checkImg = item.children[0].getAttribute('src');
    
          activeLangImg.forEach((i) => {
            i.setAttribute('src', checkImg);
          });
          activeLang.forEach((i) => {
            i.textContent = checkLang;
          });
        });
      });
}