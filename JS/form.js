// inputsArr contiene todos los inputs del form, menos el de numero de telefono ya que este no sera un campo obligatorio
const inputsArr = document.querySelectorAll(".required");
const btn = document.querySelector("#btnFormulario");
const form = document.querySelector("#form");
const phone = document.querySelector('#phone')

const inputsArrVacios = Array.from(inputsArr).filter(input => input.value.trim() === '');

// 
const mostrarNotificacion = () => {
    Notification
        .requestPermission()
        .then( resultado => {
            if (resultado === 'granted') {
                new Notification('Notificacion', {
                    body: 'Mensaje Enviado',
                })
            }
        })
    
}

// Cheaquea que los inputs cumplan con los criterios de validación al utilizarlos
inputsArrVacios.forEach(elem => {
    elem.addEventListener('input', () => {
        elem.classList.remove('feedback')
        elem.classList.remove('text-danger');
        elem.classList.remove('border-danger');
        elem.classList.add('border-0');
        elem.classList.add('text-white');
        elem.placeholder = "";
    })
})

// Evento para enviar el contenido del formulario a mi correo
form.addEventListener("submit", function (e) {
    e.preventDefault();

    
    const inputsArrVacios = Array.from(inputsArr).filter(input => input.value.trim() === '');

    const serviceID = "default_service";
    const templateID = "template_imm8bct";

    // Valida que los campos no esten vacios
    if (inputsArrVacios.length > 0) {
        inputsArrVacios.forEach(inputVacio => {
            inputVacio.classList.remove('border-0');
            inputVacio.classList.remove('text-white');
            inputVacio.classList.add('text-danger');
            inputVacio.classList.add('border-danger');
            inputVacio.classList.add('feedback');
            inputVacio.placeholder = "Este campo es obligatorio";
        });
    }else{
        btn.value = "Enviando...";
        emailjs.sendForm(serviceID, templateID, this).then(
            () => {
                btn.value = "ENVIAR";
                inputsArr.forEach(elem => {
                    elem.value = '';
                    
                })
                phone.value = '';
                mostrarNotificacion();
            },
        );
    };
    
});



