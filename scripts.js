function muestraFraseFecha() {
    var saludo = 'Buenos dias, Jose Ignacio.';
    document.getElementById('fecha').innerHTML = saludo + Date();
}

function toCelsius(farenheit) {
    return (5/9) * (farenheit -32);
}