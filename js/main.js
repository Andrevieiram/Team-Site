const form = document.getElementById("globalContactForm");

function validateName (name) {
    const arrayName = name.trim().split(" ");
    return arrayName.length >= 2;
}

function validateEmail (email) {
    return email.includes("@");
}

function validatePhone (phone) {
    const clearNumber = phone.replace(/\D/g, "");

    const regex = /^\(?([1-9]{2})\)?([1-9]{1})?([0-9]{4})-?([0-9]{4})$/;

    let result = regex.test(clearNumber);

    return result;
}

form.addEventListener("submit",function (event) {
    let formValid = false;
    event.preventDefault();

    const clientName =document.getElementById("clientName");
    const clientEmail =document.getElementById("clientEmail");
    const clientPhone = document.getElementById("clientPhone");

    let nameValid = validateName(clientName.value);
    let emailValid = validateEmail(clientEmail.value);
    let phoneValid = validatePhone(clientPhone.value);


    document.querySelector('.name-error').innerHTML = '';
    document.querySelector('.email-error').innerHTML = '';
    document.querySelector('.phone-error').innerHTML = '';

    let message;

    if(nameValid & emailValid & phoneValid) {
        message = ('Projeto enviado com sucesso! Entraremos em contato');

        const messageContainer = document.querySelector('.global-sucess-message');
        messageContainer.innerHTML = message;

        setTimeout(() => {
            window.location.reload();
        }, 3000);

        clientName.value = '';
        clientEmail.value = '';
        clientPhone.value = '';

    } else if(nameValid === false) {
        message = ('O nome está incompleto');

        const messageContainer = document.querySelector('.name-error');
        messageContainer.innerHTML = message;

        clientName.value = '';

    } else if(emailValid === false) {
        message = ('Insira um e-mail válido');

        const messageContainer = document.querySelector('.email-error');
        messageContainer.innerHTML = message;

        clientEmail.value = '';

    } else if(phoneValid === false) {
        message = ('Insira um telefone válido');

        const messageContainer = document.querySelector('.phone-error');
        messageContainer.innerHTML = message;

        clientPhone.value = '';

    }


})

console.log(form);


const formUnique = document.querySelector(".contact-right");

formUnique.addEventListener("submit",function (e) {
    let formValid = false;
    e.preventDefault();

    const nome = document.querySelector(".nome");
    const email = document.querySelector(".email");

    let validaNome = validateName(nome.value);
    let validaEmail = validateEmail(email.value);


    document.querySelector('.erro-nome').innerHTML = '';
    document.querySelector('.erro-email').innerHTML = '';


    let mensagem;

    if(validaEmail & validaNome) {
        mensagem = ('Mensagem enviada com sucesso!');

        const mensagemContainer = document.querySelector('.mensagem-sucesso');
        mensagemContainer.innerHTML = mensagem;

        setTimeout(() => {
            window.location.reload();
        }, 3000);

        nome.value = '';
        email.value = '';

    } else if(validaNome === false) {
        mensagem = ('O nome está incompleto');

        const mensagemContainer = document.querySelector('.erro-nome');
        mensagemContainer.innerHTML = mensagem;

        nome.value = '';

    } else if(validaEmail === false) {
        mensagem = ('Insira um e-mail válido');

        const mensagemContainer = document.querySelector('.erro-email');
        mensagemContainer.innerHTML = mensagem;

        email.value = '';

    }


})

console.log(formUnique);