const navChange = () => {
    if (window.scrollY > window.innerHeight * 0.1) {
      document.querySelector("nav").classList.add("fondoNav");
      document.querySelector("#imagen1").style = "animation: aparecerIzq 3s forwards;";
      document.querySelector("#imagen2").style = "animation: aparecerDerecha 3s forwards;";
    } else {
      document.querySelector("nav").classList.remove("fondoNav");
    }
  };