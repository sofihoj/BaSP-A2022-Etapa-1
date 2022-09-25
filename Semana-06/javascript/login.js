window.onload = function() {
    /* EMAIL VALIDATION */
    var formEmail = document.getElementById('formEmail');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailInput = document.getElementById('emailInput');
    var p = document.createElement('p');

    formEmail.onblur = function() {
        if (formEmail.value === '') {
            formEmail.classList.add('red-border');
            p.innerHTML = 'Email is required'
            emailInput.appendChild(p);
        } else if (!emailExpression.test(formEmail.value)) {
            formEmail.classList.add('red-border');
            p.innerHTML = 'Correct format should be email@domain.com';
            emailInput.appendChild(p);
        } else {
            formEmail.classList.add('green-border');
        }
    }

    formEmail.onfocus = function () {
        formEmail.classList.remove('red-border');
        emailInput.removeChild(p);
    }

    /* PASSWORD VALIDATION */
    var formPassword = document.getElementById('formPassword');
    var passwordInput = document.getElementById('passwordInput');

    formPassword.onblur = function() {
        // var numbers = false;
        // var letters = false;
        // var specialCaracters = true;
        // for (var i = 0; i < formPassword.value.length; i++){
        //     var element = formPassword.value;
        //     var charCode = element.charCodeAt(i)
        //     parseElement = parseInt(element)
        //     if (isNaN(parseElement)) {
        //         letters = true;
        //     } else if (!isNaN(parseElement)) {
        //         numbers = true;
        //     } else if (charCode > 32 && charCode < 48) {
        //         specialCaracters = false;
        //     }

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
            passwordInput.appendChild(p);
        // } else if (formPassword.value.length < 8 || numbers !=true || letters !=true) {
        } else if (formPassword.value.length < 8 || validationNumber != true || validationLetters != true) {
            formPassword.classList.add('red-border');
            p.innerHTML = 'Password must have at least 8 characters of letters and numbers';
            passwordInput.appendChild(p);
        } else {
            formPassword.classList.add('green-border');
        }
    }

    formPassword.onfocus = function () {
        formPassword.classList.remove('red-border');
        passwordInput.removeChild(p);
    }

    /* BUTTON */
    var button = document.getElementById('btn-login');

    button.onclick = function(){
        if (formEmail.classList.contains('green-border') && formPassword.classList.contains('green-border')){
            alert('Mail: ' + formEmail.value + '\nPassword: ' + formPassword.value);
        } else {
            alert('Some imputs are wrong')
        }
  }
}

