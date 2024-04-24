document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('Form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var campoA = parseInt(document.getElementById('campoA').value);
        var campoB = parseInt(document.getElementById('campoB').value);

        if (campoB > campoA) {
            alert("válido! O número B é maior que o número A.");
        } else {
            alert("inválido! O número B deve ser maior que o número A.");
        }
    });
});