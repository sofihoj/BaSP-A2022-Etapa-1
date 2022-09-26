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

    /* BIRTHDAY VALIDATION */
    var formBirthday = inputs[3];
    var birthdayP = inputsP[3];

    formBirthday.onblur = function() {
        if (formBirthday.value == '') {
            formBirthday.classList.add('red-border');
            p.innerHTML = 'Please enter your birthday'
            birthdayP.appendChild(p)
        } else {
            formBirthday.classList.add('green-border')
        }

        formBirthday.onfocus = function () {
            formBirthday.classList.remove('red-border');
            birthdayP.removeChild(p);
        }
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
        } else if (!numbers){
            formPhone.classList.add('red-border')
            p.innerHTML = 'Phone number should have only numbers'
            phoneP.appendChild(p);
        } else if (formPhone.value.length != 10) {
            formPhone.classList.add('red-border');
            p.innerHTML = 'Phone number should have 10 numbers'
            phoneP.appendChild(p)
        } else {
            formPhone.classList.add('green-border')
        }
    }

    formPhone.onfocus = function () {
        formPhone.classList.remove('red-border');
        phoneP.removeChild(p);
    }

    /* ADRESS VALIDATION */
    var formAdress = inputs[5];
    var adressP = inputsP[5];

    formAdress.onblur = function() {
        if ((formAdress.value).length == '') {
            formAdress.classList.add('red-border')
            p.innerHTML = ('Adress is required')
            adressP.appendChild(p)
        } else {
            formAdress.classList.add('green-border')

        }
    }

    formAdress.onfocus = function() {
        formAdress.classList.remove('red-border');
        adressP.removeChild(p);
    }


    /* CITY VALIDATION */
    var formCity = inputs[6];
    var cityP = inputsP[6];

    formCity.onblur = function() {
        var numbers = "0123456789";
        var validationNumber = false

        for(i=0; i<formCity.value.length; i++){
            if (numbers.indexOf(formCity.value.charAt(i),0)!=-1){
                validationNumber = true;
            }
        }

        var letters = "abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        var validationLetters = false

        for(i=0; i<formCity.value.length; i++){
            if (letters.indexOf(formCity.value.charAt(i),0)!=-1){
                validationLetters = true;
            }
        }

        if (formCity.value === '') {
            formCity.classList.add('red-border');
            p.innerHTML = 'City name is required';
            cityP.appendChild(p);
        } else if (formCity.value.length < 4 || validationNumber != true && validationLetters != true) {
            formCity.classList.add('red-border');
            p.innerHTML = 'City name must have more than 3 characters of letters&numbers';
            cityP.appendChild(p);
        } else {
            formCity.classList.add('green-border');
        }
    }

    formCity.onfocus = function () {
        formCity.classList.remove('red-border');
        cityP.removeChild(p);
    }

    /*  ZIP CODE VALIDATION */
    var formZipCode = inputs[7];
    var zipCodeP = inputsP[7];

    formZipCode.onblur = function () {
        var numbers;
        for (var i = 0; i < formZipCode.value.length; i++){
            var element = formZipCode.value;
            var charCode = element.charCodeAt(i)
            if ((charCode > 47 && charCode < 58)) {
                numbers = true;
            } else {
                numbers = false;
                break
            }
        }

        if (formZipCode.value == ''){
            formZipCode.classList.add('red-border')
            p.innerHTML = 'Zip code is required'
            zipCodeP.appendChild(p);
        } else if (!numbers){
            formZipCode.classList.add('red-border')
            p.innerHTML = 'Zip code should have only numbers'
            zipCodeP.appendChild(p);
        } else if (formZipCode.value.length < 4 || formZipCode.value.length > 5) {
            formZipCode.classList.add('red-border');
            p.innerHTML = 'Zip code should have 4 or 5 numbers'
            zipCodeP.appendChild(p)
        } else {
            formZipCode.classList.add('green-border')
        }
    }

    formZipCode.onfocus = function () {
        formZipCode.classList.remove('red-border');
        zipCodeP.removeChild(p);
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

    /* PASSWORD VALIDATION */
    var formPassword = inputs[9];
    var passwordP = inputsP[9];

    formPassword.onblur = function() {
        var numbers = "0123456789";
        var validationNumber = false

        for(i=0; i<formPassword.value.length; i++){
            if (numbers.indexOf(formPassword.value.charAt(i),0)!=-1){
                validationNumber = true;
            }
        }

        var letters = "abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        var validationLetters = false

        for(i=0; i<formPassword.value.length; i++){
            if (letters.indexOf(formPassword.value.charAt(i),0)!=-1){
                validationLetters = true;
            }
        }

        if (formPassword.value === '') {
            formPassword.classList.add('red-border');
            p.innerHTML = 'Password is required';
            passwordP.appendChild(p);
        } else if (formPassword.value.length < 8 || validationNumber != true || validationLetters != true) {
            formPassword.classList.add('red-border');
            p.innerHTML = 'Password must have at least 8 characters of letters and numbers';
            passwordP.appendChild(p);
        } else {
            formPassword.classList.add('green-border');
        }
    }

    formPassword.onfocus = function () {
        formPassword.classList.remove('red-border');
        passwordP.removeChild(p);
    }

    /* PASSWORD REPEAT VALIDATION */
    var formPassword2 = inputs[10];
    var password2P = inputsP[10];

    formPassword2.onblur = function() {
        var numbers = "0123456789";
        var validationNumber = false

        for(i=0; i<formPassword2.value.length; i++){
            if (numbers.indexOf(formPassword2.value.charAt(i),0)!=-1){
                validationNumber = true;
            }
        }

        var letters = "abcdefghyjklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        var validationLetters = false

        for(i=0; i<formPassword2.value.length; i++){
            if (letters.indexOf(formPassword2.value.charAt(i),0)!=-1){
                validationLetters = true;
            }
        }

        if (formPassword2.value === '') {
            formPassword2.classList.add('red-border');
            p.innerHTML = 'Password is required';
            password2P.appendChild(p);
        } else if (formPassword2.value.length < 8 || validationNumber != true || validationLetters != true) {
            formPassword2.classList.add('red-border');
            p.innerHTML = 'Password must have at least 8 characters of letters and numbers';
            password2P.appendChild(p);
        } else if (formPassword.value != formPassword2.value){
            formPassword2.classList.add('red-border');
            p.innerHTML = "Passwords doesn't match";
            password2P.appendChild(p);;
        } else {
            formPassword2.classList.add('green-border');
        }
    }

    formPassword2.onfocus = function () {
        formPassword2.classList.remove('red-border');
        password2P.removeChild(p);
    }
}