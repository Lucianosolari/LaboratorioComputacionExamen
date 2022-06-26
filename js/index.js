var capacidad_valor = {
    128: 150000,
    256: 165000,
    512: 180000,
};

var inputCantidad = document.getElementById("cantidad");
var selectOpcion = document.getElementById("opcion");

function calculatePrice() {
    if (validate()) {
        let valorCantidad = Number(inputCantidad.value);
        var valorCapacidad = Number(capacidad_valor[selectOpcion.value]);

        var result = valorCantidad * valorCapacidad

        displayResult(result)
    }
}

function validate() {
    const color = document.getElementById("imagen");
    const capacidad = document.getElementById("opcion");
    const cantidad = document.getElementById("cantidad");

    if (color.value == 0 || capacidad.value == 0 || cantidad.value == 0) {
        showMessageError();
        return false
    } else {
        if (cantidad.value < 0 || cantidad.value > 10) {
            showMessageError();
            return false
        } else {
            return true
        }
    }
}

var mensaje = document.getElementById("result");

function showMessageError() {
    mensaje.innerHTML = "Error: ingresar valores válidos"
    mensaje.style.display = 'block';
    mensaje.style.backgroundColor = "red"
}

function displayResult(result) {
    mensaje.innerHTML = "Cotizacion: $ " + result;
    mensaje.style.display = 'block';
    mensaje.style.backgroundColor = "green"
}

const cambio_imagen = document.getElementById("img")
let color_imagen = document.getElementById("imagen")

function changeProductImage() {
    cambio_imagen.src = "img/iphone_13_" + color_imagen.value + ".png";
}