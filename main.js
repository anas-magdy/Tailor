

// var numInp = document.getElementById("numInp");

// function up() {
//   numInp.stepUp(10);
//   console.log(typeof numInp.valueAsNumber);

// }

// function down() {
//   numInp.stepDown(10)
// }

// // ================================

// var rangeInp = document.getElementById("rangeInp");
// var span = document.getElementById("rangeVal");

// rangeInp.addEventListener("input", function () {
//   // console.log(rangeInp.value);
//   span.textContent = rangeInp.value

// })

// // ===================================


// var audio = document.querySelector("audio");

// var volumeInp = document.getElementById("volumeInp");
// var timeInp = document.getElementById("timeInp");

// var speedSelect = document.getElementById("speed")

// function playAud() {
//   audio.play()
// }

// function pauseAud() {
//   audio.pause();
// }
// function stopAud() {
//   audio.load();
//   audio.pause()
// }
// function muteAud() {
//   // toggle
//   audio.muted = !audio.muted;
// }

// function test() {
//   console.log(audio.volume);

// }

// volumeInp.addEventListener("input", function () {
//   audio.volume = volumeInp.value;
// })

// timeInp.addEventListener("input", function () {
//   audio.currentTime = timeInp.value;
// })

// audio.addEventListener("timeupdate", function () {
//   timeInp.value = audio.currentTime
// })


// window.onload = function () {
//   timeInp.max = audio.duration
// }

// speedSelect.addEventListener("change", function () {
//   audio.playbackRate = speedSelect.value;
// })
var preloader = document.getElementsByClassName("preloader")[0];

window.onload = function () {
  setInterval(leftSlider,3500)
  setTimeout(function () {
    preloader.style.opacity = 0;
    preloader.style.transition = "opacity 0.3s ease";
    setTimeout(function () {
      preloader.style.display = "none";

    }, 400)
  }, 1000)
}



var header = document.getElementsByTagName("header")[0];
var offers = document.getElementsByClassName("offer");
var subService = document.getElementsByClassName("subService")
console.log(offers);


window.onscroll = function () {
  if (scrollY > 440) {
    header.classList.add("fixed-bar");
    offers[0].style.animation = "fadeInUp 1.5s forwards";
    offers[1].style.animation = "fadeInUp 1.5s 0.4s forwards";
    offers[2].style.animation = "fadeInUp 1.5s 0.8s forwards";

  }
  if (scrollY > 2200) {
    subService[0].style.animation = "fadeInUp 1.5s forwards";
    subService[1].style.animation = "fadeInUp 1.5s 0.4s forwards";
    subService[2].style.animation = "fadeInUp 1.5s 0.8s forwards";
    subService[3].style.animation = "fadeInUp 1.5s 0.8s forwards";
  }
  else {
    header.classList.remove("fixed-bar")
  }

}
var scrollNav = document.getElementsByClassName("scrollNav")[0]
scrollNav.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' })

}
var active = 1
var robartNavigator = document.getElementsByClassName("robartNavigator")[0].children
var firstRobart = document.getElementsByClassName("firstRobart")[0]
var secondRobert = document.getElementsByClassName("secondRobert")[0]
robartNavigator[0].onclick = leftSlider

  
  function leftSlider() {
  if (active == 1) {
    robartNavigator[1].classList.remove("active")
    firstRobart.style.animation = "sliderOut  1s linear 1 forwards"
    secondRobert.style.animation ="sliderIn 1s linear 1 forwards"
    robartNavigator[2].classList.add("active")
    active = 2
  } else {
    robartNavigator[2].classList.remove("active") 
    robartNavigator[1].classList.add("active")
    firstRobart.style.animation = "sliderIn  1s linear 1 forwards"
    secondRobert.style.animation ="sliderOut 1s linear 1 forwards"
    active = 1
  }
}
robartNavigator[3].onclick = rightSlider


  function rightSlider() {
  if (active == 1) {
    robartNavigator[1].classList.remove("active")
    firstRobart.style.animation = "RsliderOut  1s linear 1 forwards"
    secondRobert.style.animation = "RsliderIn 1s linear 1 forwards"
    robartNavigator[2].classList.add("active")
    active = 2
  } else {
    robartNavigator[2].classList.remove("active")
    robartNavigator[1].classList.add("active")
    firstRobart.style.animation = "RsliderIn  1s linear 1 forwards"
    secondRobert.style.animation = "RsliderOut 1s linear 1 forwards"
    active = 1
  }
}