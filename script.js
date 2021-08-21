

  var menu = document.querySelector(".menu")
  var ham = document.querySelector(".ham")
  var xIcon = document.querySelector(".xIcon")
  var menuIcon = document.querySelector(".menuIcon")
  
  ham.addEventListener("click", toggleMenu)
  
  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      xIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      xIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }
  
  var menuLinks = document.querySelectorAll(".menuLink")
  
  menuLinks.forEach(
    function (menuLink) {
      menuLink.addEventListener("click", toggleMenu)
    }
  )

  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 1000
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true })
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 10000000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // (function() {
  //   document.querySelector('a[href*=#]').on('click', function(e) {
  //     e.preventDefault();
  //     document.querySelector('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  //   });
  // });

  function scrollWin() {
    window.scrollBy(0, 500);
    behavior: 'smooth'
  }
