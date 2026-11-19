const formularios = document.querySelectorAll('form[novalidate]');

formularios.forEach((formulario) => {
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.classList.add('was-validated');
            formulario.querySelector(':invalid').focus();
            return;
        }

        const ventana = bootstrap.Modal.getOrCreateInstance(formulario.closest('.modal'));
        ventana.hide();

        const aviso = bootstrap.Toast.getOrCreateInstance(document.getElementById('avisoEnvio'));
        aviso.show();
    });
});

document.querySelectorAll('.modal').forEach((ventana) => {
    ventana.addEventListener('hidden.bs.modal', () => {
        const formulario = ventana.querySelector('form');
        formulario.reset();
        formulario.classList.remove('was-validated');
    });
});