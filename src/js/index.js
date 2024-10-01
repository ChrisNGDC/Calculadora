let onOff = false;
let displayById = document.getElementById('display');
let onOffById = document.getElementById('onOff');
let buttons = document.getElementsByClassName('btn');
let ingresoPermitido = true;

function encenderApagar() {
    if (onOff) {
        displayById.style.backgroundColor = 'gray';
        onOffById.style.cssText = 'background-color: green; color: white;'
        onOffById.value = 'on';
        displayById.value = '';
        for (let index = 0; index < buttons.length; index++) {
            buttons[index].disabled = true;
        }
        onOff = false;
    } else {
        displayById.style.backgroundColor = 'yellowgreen';
        onOffById.style.cssText = 'background-color: orange; color: black;'
        onOffById.value = 'off';
        setTimeout(() => {
            displayById.value = '0';
        }, 500);
        onOff = true;

        for (let index = 0; index < buttons.length; index++) {
            buttons[index].disabled = false;
        }
    }
}

function ingresarDato(valor) {
    if (!ingresoPermitido) {
        displayById.value = '';
    } else {
        if (displayById.value === '0') {
            displayById.value = valor;
        } else {
            displayById.value += valor;
        }
    }
}

function ingresarOperador(valor) {
    if (!ingresoPermitido) {
        displayById.value = '';
    } else {
        displayById.value += valor;
    }
}

function borrar() {
    displayById.value = '0';
}

function calcular() {
    const valorDisplay = displayById.value;
    try {
        const resultado = math.evaluate(valorDisplay);
        displayById.value = resultado;
    } catch (error) {
        displayById.value = 'Error';
    }
}

document.addEventListener('keydown', (event) => {
    onOffById.blur();
    const key = event.key;
    if (!isNaN(key)) {
        ingresarDato(key);
    } else if (['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
        ingresarOperador(key);
    } else if (key === 'Enter') {
        calcular();
    } else if (key === 'Backspace') {
        borrar();
    }
})