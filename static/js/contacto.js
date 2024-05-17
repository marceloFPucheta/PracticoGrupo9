document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        var form = event.target;
        var isValid = true;

        // Verifica campos obligatorios
        form.querySelectorAll('[required]').forEach(function (input) {
            if (!input.value.trim()) {
                isValid = false;
            }
        });

        if (!isValid) {
            alert('Por favor, complete todos los campos obligatorios.');
            event.preventDefault();
        }
    });
});
