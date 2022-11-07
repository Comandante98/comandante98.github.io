var comida = ["./frutas.jfif", "./verduras.jfif", "./harinas.jfif",
        "./lacteos.jfif", "./dulces.jfif", "./bebidas no alcoholicas.jfif",
        "./bebidas alcoholicas.jfif", "./carne roja.jfif", "./carne de pollo.jfif",
        "./pescados y mariscos.jfif"];
var cont = 0;
    function carrusel(comidas) {
        comidas.addEventListener('click', e => {
            let atras = comidas.querySelector('.anterior'),
                adelante = comidas.querySelector('.siguiente'),
                img = comidas.querySelector('img'),
                obj = e.target;

            if (obj == atras) {
                if (cont > 0) {
                    img.src = comida[cont - 1];
                    cont--;
                } else {
                    img.src = comida[comida.length - 1];
                    cont = comida.length - 1;
                }
            } else if (obj == adelante) {
                if (cont < comida.length - 1) {
                    img.src = comida[cont + 1];
                    cont++;
                } else {
                    img.src = comida[0];
                    cont = 0;
                }
            }
        });
    }
    document.addEventListener("DOMContentLoaded", () => {
        let comidas = document.querySelector('.comidas');

        carrusel(comidas);
    });