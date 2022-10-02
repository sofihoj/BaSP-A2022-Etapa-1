window.onload = function() {
    var inputs = document.getElementsByTagName('input');

    /* EMAIL VALIDATION */
    var formEmail = inputs[0];
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailP = document.createElement('p');

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
        }
    }

    formEmail.onfocus = function () {
        removeP(formEmail);
    }

    /* PASSWORD VALIDATION */
    var formPassword = inputs[1];
    var passwordP = document.createElement('p');

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
            passwordP.innerHTML = 'Password is required';
            formPassword.parentElement.insertBefore(passwordP, formPassword.nextElementSibling)
        } else if (formPassword.value.length < 8 || validationNumber != true || validationLetters != true) {
            formPassword.classList.add('red-border');
            passwordP.innerHTML = 'Password must have at least 8 characters of letters and numbers';
            formPassword.parentElement.insertBefore(passwordP, formPassword.nextElementSibling)
        } else {
            formPassword.classList.add('green-border');
        }
    }

    formPassword.onfocus = function () {
        removeP(formPassword);
    }

    /* BUTTON */
    var button = document.getElementById('btn-login');

    button.onclick = function(e){
        e.preventDefault();
        var email = formEmail.value;
        var password = formPassword.value;
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + email + '&password=' + password;

        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            if(data.success){
                alert('Login successful! ' + data.msg);
            } else if (data.errors){
                var messages = ''
                for (var error of data.errors) {
                    messages += error.msg + '\n'
                }
                alert(messages);
            } else {
                alert(data.msg);
            }
        })
        .catch(function(error) {
            alert('Error:\n' + error);
        })
    }

    /* FUNCTIONS */
    function removeP(input) {
        input.classList.remove('red-border');
        if (input.nextElementSibling) {
            input.parentElement.removeChild(input.nextElementSibling);
        }
    }
}

