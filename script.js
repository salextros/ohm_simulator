//Capturamos el formulario
const formulario = document.getElementById('ohmForm');

//Escuchamos cuando se hace clic en el botón "Calcular"
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

//Capturamos los valores escritos por el usuario
    const voltaje = parseFloat(document.getElementById('voltaje').value);
    const corriente = parseFloat(document.getElementById('corriente').value);
    const resistencia = parseFloat(document.getElementById('resistencia').value);

//Preparamos variable para mostrar resultado
    let resultado = '';

//Caso: calcular voltaje (si solo voltaje está vacío)
    if (isNaN(voltaje) && !isNaN(corriente) && !isNaN(resistencia)) {
        const volt = corriente * resistencia;
        resultado = `🔌 Voltaje (V) = ${volt.toFixed(2)} V`;
//Caso: calcular corriente (si solo corriente está vacía)
    } else if (!isNaN(voltaje) && isNaN(corriente) && !isNaN(resistencia)) {
        const corr = voltaje / resistencia;
        resultado = `💡 Corriente (I) = ${corr.toFixed(2)} A`;
 //Caso: calcular resistencia (si solo resistencia está vacía)
    } else if (!isNaN(voltaje) && !isNaN(corriente) && isNaN(resistencia)) {
        const res = voltaje / corriente;
        resultado = `🔧 Resistencia (R) = ${res.toFixed(2)} Ω`;

//Caso: datos mal ingresados
    } else {
        resultado = '❗Por favor, deja vacío solo el valor que deseas calcular.';
    }

//Mostramos el resultado en pantalla
    document.getElementById('resultado').textContent = resultado;

});

