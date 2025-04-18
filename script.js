const formulario = document.getElementById('ohmForm');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const voltaje = parseFloat(document.getElementById('voltaje').value);
    const corriente = parseFloat(document.getElementById('corriente').value);
    const resistencia = parseFloat(document.getElementById('resistencia').value);

});

