const handleMouseEnter = (e) => {
  if (!e.target.dataset.expand) {
    return;
  }

  navsVisited += 1;

  if (navsVisited === 1) {
    expandMenu.classList.add("new--expand");
    menus.forEach((menu) => menu.classList.add("first"));
    indicator.classList.add("first");
  } else {
    expandMenu.classList.remove("new--expand");
    menus.forEach((menu) => menu.classList.remove("first"));
    indicator.classList.remove("first");
  }

  navLinks.forEach((navLink) => {
    if (navLink === e.target) {
      navLink.classList.add("hover");
      currentNav = navLink;
    } else {
      navLink.classList.remove("hover");
    }
  });

  const navLinkCenter = Math.floor(
    e.target.offsetLeft + e.target.clientWidth / 6
  );
  indicator.style.transform = `translateX(${navLinkCenter}px)`;
  indicator.style.opacity = "1";

  const targetMenu = document.querySelector(`#${e.target.dataset.expand}`);
  const targetCoords = targetMenu.getBoundingClientRect();
  const { width: targetWidth, height: targetHeight } = targetCoords;

  expandMenu.style.width = targetWidth + "px";
  expandMenu.style.height = targetHeight + "px";

  const prevMenu = targetMenu.previousElementSibling;

  targetMenu.classList.remove("prev");

  if (prevMenu) {
    prevMenu.classList.add("prev");
  }

  menus.forEach((menu) => {
    if (menu.id === targetMenu.id) {
      menu.classList.add("active");
    } else {
      menu.classList.remove("active");
    }
  });

  expandMenu.classList.add("expand");
};

const handleMouseLeave = (e) => {
  if (isMouseOnMenu || e.y > 50) {
    return;
  }

  forceInitialState();
};

const forceInitialState = () => {
  expandMenu.classList.remove("expand", "active");
  currentNav.classList.remove("hover");
  menus.forEach((menu) => menu.removeAttribute("class"));
  indicator.style.opacity = "0";
  currentNav = null;
  navsVisited = 0;
};

const expandMenu = document.querySelector(".header__expandMenu");
const menus = expandMenu.querySelectorAll(".menu__container > *");
const navLinks = document.querySelectorAll(".nav--link");
const indicator = document.querySelector(".tip");
let isMouseOnMenu = false;
let currentNav;
let navsVisited = 0;

const {
  height: menuHeight,
  width: menuWidth,
} = expandMenu.getBoundingClientRect();

navLinks.forEach((navLink) => {
  navLink.addEventListener("mouseenter", handleMouseEnter);
  runTime();

});

expandMenu.addEventListener("mouseenter", () => {
  if (expandMenu.style.opacity === "1") {
    isMouseOnMenu = true;
  }
});

expandMenu.addEventListener("mouseleave", (e) => {
  if (e.y > 70) {
    isMouseOnMenu = false;
    forceInitialState();
  }
});

document
  .querySelector(".nav__links")
  .addEventListener("mouseleave", handleMouseLeave);






  // Select all slides
  const slides = document.querySelectorAll(".slide");
  
  // loop through slides and set each slides translateX
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });
  
  // select next slide button
  const nextSlide = document.querySelector(".btn-next");
  
  // current slide counter
  let curSlide = 0;
  // maximum number of slides
  let maxSlide = slides.length - 1;
  
  // add event listener and navigation functionality
  nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
  
    //   move slide by -100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });
  
  // select next slide button
  const prevSlide = document.querySelector(".btn-prev");
  
  // add event listener and navigation functionality
  prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
  
    //   move slide by 100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });
  



function runTime(){
console.log("working");
  // Get the element with the id "products"
var productsElement = document.getElementById("products");

// Get the element with the class "header__expandMenu"
var expandMenuElement = document.querySelector(".header__expandMenu");

// Check if the element with id "products" has the class "active"
if (productsElement.classList.contains("active")) {
    // Add the class "customwidth" to the element with class "header__expandMenu"
    expandMenuElement.classList.add("customwidth");
} else {
    // Remove the class "customwidth" from the element with class "header__expandMenu"
    expandMenuElement.classList.remove("customwidth");
}

}

document.addEventListener("DOMContentLoaded", function() {
  // Add animation class to the third image to start the animation
  document.querySelector(".imageContianer img:nth-child(3)").classList.add("slideFromTopAnimation");
});

var listItems = document.querySelectorAll('.hoverUl li');

    // Iterate through each list item
    listItems.forEach(function(item) {
        // Add event listener for mouseenter (hover in)
        item.addEventListener('mouseenter', function() {
            // Add the 'active' class when hovered
            this.classList.add('active');
        });

        // Add event listener for mouseleave (hover out)
        item.addEventListener('mouseleave', function() {
            // Remove the 'active' class when mouse leaves
            this.classList.remove('active');
        });
    });