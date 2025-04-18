let video = document.getElementById('videoHistoria');
let playBoton = document.getElementById("play");
let pauseBoton = document.getElementById("pause");

let transformarTiempoActual = (tiempo) => {
    if (tiempo < 60) {
        return `00:${tiempo.toFixed(0).padStart(2, '0')}`;
    } else {
        let minutos = parseInt(tiempo / 60);
        let segundos = (tiempo % 60).toFixed(0);
        return `${minutos}:${segundos.padStart(2, '0')}`;
    }
};

window.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("videoHistoria");
    const playBoton = document.getElementById("play");
    const pauseBoton = document.getElementById("pause");
    const showTime = document.getElementById("showTime");
    let timeProgression;

    setTimeout(() => {
        showTime.innerHTML = `Duración video 04:41`;
    }, 100);

    playBoton.addEventListener("click", () => {
        video.play();
        timeProgression = setInterval(() => {
            showTime.innerHTML = transformarTiempoActual(video.currentTime);
        }, 1000);
    });

    pauseBoton.addEventListener("click", () => {
        video.pause();
        clearInterval(timeProgression);
    });

    function transformarTiempoActual(tiempo) {
        const minutos = Math.floor(tiempo / 60);
        const segundos = Math.floor(tiempo % 60);
        return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }

    const navChange = () => {
        const nav = document.querySelector("nav");
        const cardHist1 = document.querySelector("#cardHist1");
        const cardHist2 = document.querySelector("#cardHist2");
        const cardHist3 = document.querySelector("#cardHist3");

        const distanciaHis1 = cardHist1.offsetTop - window.innerHeight / 1.2;
        const distanciaHis2 = cardHist2.offsetTop - window.innerHeight / 1.2;
        const distanciaHis3 = cardHist3.offsetTop - window.innerHeight / 1.2;

        if (window.scrollY > 50) {
            nav.classList.add("fondoNav");
        } else {
            nav.classList.remove("fondoNav");
        }

        if (window.scrollY > distanciaHis1) {
            cardHist1.querySelector("img").style.animation = "aparecerIzq 1.5s ease-out forwards";
            cardHist1.querySelector(".texto-historia").style.animation = "aparecerDerecha 1.5s ease-out forwards";
        }

        if (window.scrollY > distanciaHis2) {
            cardHist2.querySelector("img").style.animation = "aparecerDerecha 1.5s ease-out forwards";
            cardHist2.querySelector(".texto-historia").style.animation = "aparecerIzq 1.5s ease-out forwards";
        }

        if (window.scrollY > distanciaHis3) {
            cardHist3.querySelector("img").style.animation = "aparecerIzq 1.5s ease-out forwards";
            cardHist3.querySelector(".texto-historia").style.animation = "aparecerDerecha 1.5s ease-out forwards";
        }
    };

    window.addEventListener("scroll", navChange);
    window.addEventListener("load", navChange);
});

