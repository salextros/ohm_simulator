// 1️⃣ Capturamos el formulario
const formulario = document.getElementById('ohmForm');

// 2️⃣ Escuchamos cuando se hace clic en el botón "Calcular"
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

// 3️⃣ Capturamos los valores escritos por el usuario
    const voltaje = parseFloat(document.getElementById('voltaje').value);
    const corriente = parseFloat(document.getElementById('corriente').value);
    const resistencia = parseFloat(document.getElementById('resistencia').value);

// 4️⃣ Preparamos variable para mostrar resultado
    let resultado = '';

// 5️⃣ Caso: calcular voltaje (si solo voltaje está vacío)
    if (isNaN(voltaje) && !isNaN(corriente) && !isNaN(resistencia)) {
        const volt = corriente * resistencia;
        resultado = `🔌 Voltaje (V) = ${volt.toFixed(2)} V`;
// 6️⃣ Caso: calcular corriente (si solo corriente está vacía)
    } else if (!isNaN(voltaje) && isNaN(corriente) && !isNaN(resistencia)) {
        const corr = voltaje / resistencia;
        resultado = `💡 Corriente (I) = ${corr.toFixed(2)} A`;
 // 7️⃣ Caso: calcular resistencia (si solo resistencia está vacía)
    } else if (!isNaN(voltaje) && !isNaN(corriente) && isNaN(resistencia)) {
        const res = voltaje / corriente;
        resultado = `🔧 Resistencia (R) = ${res.toFixed(2)} Ω`;

// 8️⃣ Caso: datos mal ingresados
    } else {
        resultado = '❗Por favor, deja vacío solo el valor que deseas calcular.';
    }

// 9️⃣ Mostramos el resultado en pantalla
    document.getElementById('resultado').textContent = resultado;

});

