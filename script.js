const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input, textarea');

const expresiones = {
    nombre: /^[a-zA-Z0-9,.!?() ]{1,50}$/,
    email: /^\S+@\S+\.\S+$/,
    asunto: /^\S.{1,50}\S$/,
    mensaje: /^\S.{1,300}\S?$/
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
        validarCampo(expresiones.nombre, e.target, 'nombre');
    break;

    case "email":
        validarCampo(expresiones.email, e.target, 'email');
    break;

    case "asunto":
        validarCampo(expresiones.asunto, e.target, 'asunto');
    break;

    case "mensaje":
        validarCampo(expresiones.mensaje, e.target, 'mensaje');
    break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove('form__input-error-activo');
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('form__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.add('form__input-error-activo');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validaFormulario);
    input.addEventListener('blur', validaFormulario);
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});