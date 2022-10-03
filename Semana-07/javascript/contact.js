window.onload = function () {
    var formName = document.getElementById('indexName');
    var formEmail = document.getElementById('indexEmail');
    var formMessage = document.getElementById('indexMessage');
    var inputs = [formName, formEmail, formMessage]
    /* NAME VALIDATION */
    var nameP = document.createElement('p');
    var validateName;

    formName.onblur = function() {
        var letters;
        for (var i = 0; i < formName.value.length; i++){
            var element = formName.value;
            var charCode = element.charCodeAt(i)
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
                letters = true;
            } else {
                letters = false;
                break
            }
        }

        if (formName.value == '') {
            formName.classList.add('red-border')
            nameP.innerHTML = 'Name is required'
            formName.parentElement.insertBefore(nameP, formName.nextElementSibling)
        } else if (formName.value.length < 4) {
            formName.classList.add('red-border')
            nameP.innerHTML = 'Name should have more than 3 letters'
            formName.parentElement.insertBefore(nameP, formName.nextElementSibling)
        } else if (!letters) {
            formName.classList.add('red-border')
            nameP.innerHTML = 'Name should have only letters'
            formName.parentElement.insertBefore(nameP, formName.nextElementSibling)
        } else {
            formName.classList.add('green-border')
            validateName = true;
        }
    }

    formName.onfocus = function () {
        removeP(formName);
    }

    /* EMAIL VALIDATION */
    var emailP = document.createElement('p');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var validateEmail;

    formEmail.onblur = function() {
        if (formEmail.value === '') {
            formEmail.classList.add('red-border');
            emailP.innerHTML = 'Email is required'
            formEmail.parentElement.insertBefore(emailP, formEmail.nextElementSibling)
        } else if (!emailExpression.test(formEmail.value)) {
            formEmail.classList.add('red-border');
            emailP.innerHTML = 'Correct format should be email@domain.com';
            formEmail.parentElement.insertBefore(emailP, formEmail.nextElementSibling)
        } else {
            formEmail.classList.add('green-border');
            validateEmail = true;
        }
    }

    formEmail.onfocus = function () {
        removeP(formEmail);
    }

    /* MESSAGE VALIDATION */
    var messageP = document.createElement('p');
    var validateMessage;

    formMessage.onblur = function() {
        var numbers = "0123456789";
        var validationNumber = false

        for(i=0; i<formMessage.value.length; i++){
            if (numbers.indexOf(formMessage.value.charAt(i),0)!=-1){
                validationNumber = true;
            }
        }

        var letters = "abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
        var validationLetters = false

        for(i=0; i<formMessage.value.length; i++){
            if (letters.indexOf(formMessage.value.charAt(i),0)!=-1){
                validationLetters = true;
            }
        }

        if (formMessage.value === '') {
            formMessage.classList.add('red-border');
            messageP.innerHTML = 'The message is required';
            formMessage.parentElement.insertBefore(messageP, formMessage.nextElementSibling)
        } else if (formMessage.value.length < 4 || validationNumber != true && validationLetters != true) {
            formMessage.classList.add('red-border');
            messageP.innerHTML = 'The message must have more than 3 characters of letters&numbers';
            formMessage.parentElement.insertBefore(messageP, formMessage.nextElementSibling)
        } else {
            formMessage.classList.add('green-border');
            validateMessage = true;
        }
    }

    formMessage.onfocus = function () {
        removeP(formMessage);
    }

    /* BUTTON */
    var buttonSend = document.getElementById('send');

    buttonSend.onclick = function (e) {
        e.preventDefault();
        var message = '';

        if (formName.value == '' || formEmail.value == '' || formMessage.value == ''){
            message = 'All fields are required.';
        } else {
            if (formEmail.parentElement.contains(emailP)) {
                message += 'Email error\n';
                message += emailP.innerHTML + '\n';
            }
            if (formName.parentElement.contains(nameP)) {
                message += 'Name error\n';
                message += nameP.innerHTML;
            }
            if (formMessage.parentElement.contains(messageP)) {
                message += 'Message error\n';
                message += messageP.innerHTML;
            }
        }
        if (message == '') {
            message = 'Message sent!\n' +
            formName.value + '\n' + formEmail.value + '\n' + formMessage.value;
        }
        alert(message);
    }

    /* FUNCTIONS */
    function removeP(input) {
        input.classList.remove('red-border');
        if (input.nextElementSibling) {
            input.parentElement.removeChild(input.nextElementSibling);
        }
    }
}