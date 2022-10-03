window.onload = () => {
  const langSelect = document.querySelectorAll('.custom-select');
const langListItems = document.querySelectorAll('.custom-select__item');
const activeLangImg = document.querySelectorAll('.custom-select__active img');
const activeLang = document.querySelectorAll('.custom-select__active span');
const titleOne = document.querySelector('.animate-one');
const animateTwo = document.querySelector('.users-flex');
const animateThree = document.querySelector('.community');
const link = document.querySelector('.link');
const animateFour = document.querySelector('.animation-four');
const sectionTwo = document.querySelector('.section-2');
const animate2 = document.querySelector('.animation-two')
const animate3 = document.querySelector('.animation-three')
const animate4 = document.querySelector('.animation-four');
const animate5 = document.querySelector('.section_centre');
const animate6 = document.querySelectorAll('.animate-six');
const animate7 = document.querySelector('.animate-seven');
const animate8 = document.querySelector('.animate-eight');
const animate9 = document.querySelectorAll('.animate-nine');
const arrows = document.querySelectorAll('.desc');
const animate10 = document.querySelector('.animate-ten');
const animate11 = document.querySelectorAll('.animate-eleven');
const animate12 = document.querySelector('.animate-twelve');
const animate13 = document.querySelectorAll('.animate-thirteen');
const animate14 = document.querySelector('.animate-fourteen');
const animate15 = document.querySelector('.animate-fifteen');

const window_height = (window.innerHeight ? window.innerHeight : (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight));
const sections = document.querySelectorAll(".animate_block");

const cb = (entries) => {
  entries.forEach((entry) => {
    // entry.target.classList.remove("animate", entry.isIntersecting);
    if(entry.isIntersecting) {
      if(entry.target.id === '#zaim') {
        setTimeout(() => {
          animate2.classList.remove('hidden');
        }, 200)
        setTimeout(() => {
          animate3.classList.remove('hidden');
        }, 500)
        setTimeout(() => {
          arrows.forEach(i => i.classList.remove('hidden'));
        }, 800)
      }
      if(entry.target.id === '#karma') {
        setTimeout(() => {
          animate4.classList.remove('hidden');
        }, 100)
        setTimeout(() => {
          animate5.classList.remove('hidden');
        }, 500)
        setTimeout(() => {
          animate6.forEach(i => i.classList.remove('hidden'))
        }, 1100)
      }
      if(entry.target.id === '#limit') {
        setTimeout(() => {
          animate7.classList.remove('hidden');
        }, 100)
        setTimeout(() => {
          animate8.classList.remove('hidden');
        }, 300);
        setTimeout(() => {
          animate9.forEach(i => i.classList.remove('hidden'));
          animate11.forEach(i => i.classList.remove('hidden'));
          animate10.classList.remove('hidden')
          animate12.classList.remove('hidden');
          animate13.forEach(i => i.classList.remove('hidden'));
        }, 800);
      }
      if(entry.target.id === 'five') {
        setTimeout(() => {
          animate14.classList.remove('hidden');
          animate15.classList.remove('hidden');
        }, 200)
      }

    }
  });
};

const sectionObserver = new IntersectionObserver(cb, {
  threshold: [0.2, 0.5, 0.8]
});

sections.forEach((sec) => {
  sectionObserver.observe(sec);
});

titleOne.classList.remove('hidden');
animateTwo.classList.remove('hidden');
setTimeout(() => {

  animateThree.classList.remove('hidden');
  link.classList.remove('hidden');
}, 500)

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
}