window.onload = function(){
    var inputs = document.getElementsByTagName('input');
    var inputsP = document.getElementsByClassName('form-input');
    var p = document.createElement('p');

    var formName = inputs[0];
    var nameP = inputsP[0];

    formName.onblur = function() {
        if (formName.value == '') {
            formName.classList.add('red-border')
            p.innerHTML = 'Name is required'
            nameP.appendChild(p);
        }
    }

}