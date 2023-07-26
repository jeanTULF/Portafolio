const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input, textarea');

const expresiones = {
    nombre: /^[a-zA-Z0-9,.!?() ]{1,50}$/
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
        patternMismatch: "El campo nombre no puede tener mas de 50 caractéres"
    }
}

const validaFormulario = (e) => {
    switch (e.target.name) {
    case "nombre":
        if (expresiones.nombre.test(e.target.value)) {
            document.getElementById('grupo__nombre').classList.remove('form__grupo-incorrecto');
        } else {
            document.getElementById('grupo__nombre').classList.add('form__grupo-incorrecto');
        }
    break;

    case "email":

    break;

    case "asunto":

    break;

    case "mensaje":

    break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validaFormulario);
    input.addEventListener('blur', validaFormulario);
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
})