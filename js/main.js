const langSelect = document.querySelectorAll('.custom-select');
const langListItems = document.querySelectorAll('.custom-select__item');
const activeLangImg = document.querySelectorAll('.custom-select__active img');
const activeLang = document.querySelectorAll('.custom-select__active span');
const titleOne = document.querySelector('.animate-one');
const animateTwo = document.querySelector('.users-flex');
const animateThree = document.querySelector('.community');
const animateFour = document.querySelector('.animation-four');
const sectionTwo = document.querySelector('.section-2');

const window_height = (window.innerHeight ? window.innerHeight : (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight));

// window.addEventListener('scroll', function() {
 
//     const top = document.body.scrollTop;
//     const find = document.querySelector('.section-2').offsetTop;
//         // if(el_top > top && ((el.clientHeight + el_top) < (top + window_height))) {
//         //     el.style.backgroundColor = "#999";
//         // }
//         console.log(find);
//         console.log(top);
//         if (sectionTwo.offsetTop <= top) {
//           console.log('3');
//         }

//       })

titleOne.classList.remove('hidden');
setTimeout(() => {
  animateTwo.classList.remove('hidden');
  animateThree.classList.remove('hidden');
}, 400)

if (sectionTwo.scrollIntoView) {
  console.log('2')
}
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


let anchors = document.querySelectorAll('#yakor a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      console.log(anchorId)
      document.getElementById(anchorId).scrollIntoView({behavior: 'smooth', block: 'start'})
    })
  }
}