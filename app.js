var arrayAmigos = [];
const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

document.getElementById('button-reset').disabled = true;

function actualizarBotonReset() {
    buttonReset = document.getElementById('button-reset');
    if (arrayAmigos.length === 0) {
        buttonReset.disabled = true;
    } else {
        buttonReset.disabled = false;
    }
}

function agregarAmigo(nombreAmigo) {
    var nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo == '') {
        alert('El nombre no puede estar vacío.');
    } else if (!regexSoloLetras.test(nombreAmigo)) {
        alert('Por favor, ingrese un nombre válido (solo caracteres alfabéticos).');
    } else {
        arrayAmigos.push(nombreAmigo);
        document.getElementById('amigo').value = '';
        listarAmigos();
        actualizarBotonReset();
    }
}

function listarAmigos() {
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (var i = 0; i < arrayAmigos.length; i++) {
        var li = document.createElement('li');
        li.textContent = arrayAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (arrayAmigos.length == 0) {
        alert('No hay amigos en la lista, no se puede realizar el sorteo.');
    } else {
        var indiceRandom = Math.floor(Math.random() * arrayAmigos.length);
        var amigoRandom = arrayAmigos[indiceRandom];
        document.getElementById('resultado').innerHTML = `El amigo seleccionado es: ${amigoRandom}`;
    }
}

function limpiarLista() {
    arrayAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
    actualizarBotonReset();
}

