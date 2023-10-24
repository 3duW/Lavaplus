const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

});

//animacion del slider el carrusel del video//

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");


var sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });
    
    slides.forEach((slide) => {
        slide.classList.remove('active');
        });

    btns[manual].classList.add('active'); // Cambié "classList" a "classList.add"
    slides[manual].classList.add('active'); // Cambié "classList" a "classList.add"
    
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sliderNav(i);
    });
});




//video controles//
var video = document.getElementById("miVideo");
var playPauseButton = document.getElementById("play-pause-button");
var volumeControl = document.getElementById("volume-control");
var muteButton = document.getElementById("mute-button");

playPauseButton.addEventListener("click", function() {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = "Pausa";
    } else {
        video.pause();
        playPauseButton.textContent = "Reproducir";
    }
});

volumeControl.addEventListener("input", function() {
    video.volume = volumeControl.value;
});

muteButton.addEventListener("click", function() {
    video.muted = !video.muted;
    if (video.muted) {
        muteButton.textContent = "Desmutear";
    } else {
        muteButton.textContent = "Silencio";
    }
});


