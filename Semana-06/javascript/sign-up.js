window.onload = function(){
    var inputs = document.getElementsByTagName('input');
    var inputsP = document.getElementsByClassName('form-input');
    var p = document.createElement('p');

    /* NAME VALIDATION */
    var formName = inputs[0];
    var nameP = inputsP[0];

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
            p.innerHTML = 'Name is required'
            nameP.appendChild(p);
        } else if (formName.value.length < 4) {
            formName.classList.add('red-border')
            p.innerHTML = 'Name should have more than 3 letters'
            nameP.appendChild(p);
        } else if (!letters) {
            formName.classList.add('red-border')
            p.innerHTML = 'Name should have only letters'
            nameP.appendChild(p);
        } else {
            formName.classList.add('green-border')
        }
    }

    formName.onfocus = function () {
        formName.classList.remove('red-border');
        nameP.removeChild(p);
    }

    /* LAST NAME VALIDATION */
    var formLastName = inputs[1];
    var lastNameP = inputsP[1];

    formLastName.onblur = function() {
        var letters;
        for (var i = 0; i < formLastName.value.length; i++){
            var element = formLastName.value;
            var charCode = element.charCodeAt(i)
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
                letters = true;
            } else {
                letters = false;
                break
            }
        }

        if (formLastName.value == '') {
            formLastName.classList.add('red-border')
            p.innerHTML = 'Last name is required'
            lastNameP.appendChild(p);
        } else if (formLastName.value.length < 4) {
            formLastName.classList.add('red-border')
            p.innerHTML = 'Last name should have more than 3 letters'
            lastNameP.appendChild(p);
        } else if (!letters) {
            formLastName.classList.add('red-border')
            p.innerHTML = 'Last name should have only letters'
            lastNameP.appendChild(p);
        } else {
            formLastName.classList.add('green-border')
        }
    }

    formLastName.onfocus = function () {
        formLastName.classList.remove('red-border');
        lastNameP.removeChild(p);
    }

    /* ID VALIDATION */
    var formId = inputs[2];
    var idP = inputsP[2];

    formId.onblur = function () {
        var numbers;
        for (var i = 0; i < formId.value.length; i++){
            var element = formId.value;
            var charCode = element.charCodeAt(i)
            if ((charCode > 47 && charCode < 58)) {
                numbers = true;
            } else {
                numbers = false;
                break
            }
        }

        if (formId.value == ''){
            formId.classList.add('red-border')
            p.innerHTML = 'ID is required'
            idP.appendChild(p);
        } else if (formId.value.length < 7) {
            formId.classList.add('red-border');
            p.innerHTML = 'ID should have at least 7 numbers'
            idP.appendChild(p)
        } else if (!numbers){
            formId.classList.add('red-border')
            p.innerHTML = 'ID should have only numbers'
            idP.appendChild(p);
        } else {
            formId.classList.add('green-border')
        }
    }

    formId.onfocus = function () {
        formId.classList.remove('red-border');
        idP.removeChild(p);
    }

    /* PHONE VALIDATION */
    var formPhone = inputs[4];
    var phoneP = inputsP[4];

    formPhone.onblur = function () {
        var numbers;
        for (var i = 0; i < formPhone.value.length; i++){
            var element = formPhone.value;
            var charCode = element.charCodeAt(i)
            if ((charCode > 47 && charCode < 58)) {
                numbers = true;
            } else {
                numbers = false;
                break
            }
        }

        if (formPhone.value == ''){
            formPhone.classList.add('red-border')
            p.innerHTML = 'Phone number is required'
            phoneP.appendChild(p);
        } else if (formPhone.value.length != 10) {
            formPhone.classList.add('red-border');
            p.innerHTML = 'Phone number should have 10 numbers'
            phoneP.appendChild(p)
        } else if (!numbers){
            formPhone.classList.add('red-border')
            p.innerHTML = 'Phone number should have only numbers'
            phoneP.appendChild(p);
        } else {
            formPhone.classList.add('green-border')
        }
    }

    formPhone.onfocus = function () {
        formPhone.classList.remove('red-border');
        phoneP.removeChild(p);
    }



    /* EMAIL VALIDATION */
    var formEmail = inputs[8];
    var emailP = inputsP[8];
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    
    formEmail.onblur = function() {
        if (formEmail.value === '') {
            formEmail.classList.add('red-border');
            p.innerHTML = 'Email is required'
            emailP.appendChild(p);
        } else if (!emailExpression.test(formEmail.value)) {
            formEmail.classList.add('red-border');
            p.innerHTML = 'Correct format should be email@domain.com';
            emailP.appendChild(p);
        } else {
            formEmail.classList.add('green-border');
        }
    }

    formEmail.onfocus = function () {
        formEmail.classList.remove('red-border');
        emailP.removeChild(p);
    }
}