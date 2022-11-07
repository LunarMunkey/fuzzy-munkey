//Hamburger Menu start
const hamburger = document.querySelector(".hamburger");
const navUL = document.querySelector(".navUL");
const navItem = document.querySelectorAll(".navItem");
const closeIcon = document.querySelector(".fa-xmark");
const menuIcon = document.querySelector(".fa-bars");

function toggleMenu () {
    if (navUL.classList.contains("showMenu")) {
        navUL.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        navUL.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);
//Hamburger Menu end



//Navigation color change with scroll start
function selectElementByClass(className) {
    return document.querySelector(`.${className}`);
  }

const SECTIONS = [
    selectElementByClass('hero'),
    selectElementByClass('work'),
    selectElementByClass('aboutMe'),
];

const NAV_ITEMS = {
    hero: selectElementByClass('homeNavItem'),
    work: selectElementByClass('projectsNavItem'),
    aboutMe: selectElementByClass('aboutNavItem'),
};

const OBSERVER_OPTIONS = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };

  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // get the nav item corresponding to the id of the section
        // that is currently in view
        var navItem = NAV_ITEMS[entry.target.id];
        // add 'active' class on the navItem
        navItem.classList.add('active');
        // remove 'active' class from any navItem that is not
        // same as 'navItem' defined above
        Object.values(NAV_ITEMS).forEach((item) => {
          if (item != navItem) {
            item.classList.remove('active');
          }
        });
      }
    });
  }
  
  const observer = new IntersectionObserver(observerCallback, OBSERVER_OPTIONS);
  
  SECTIONS.forEach((sec) => observer.observe(sec));
//Navigation color change with scroll end

//Navigation click & scroll to start

$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();

  var targetEle = this.hash;
  var $targetEle = $(targetEle);

  $('html, body').stop().animate({
      'scrollTop': $targetEle.offset().top
  }, 800, 'swing'
);
});
