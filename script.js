/* SCRIPT */

window.addEventListener('DOMContentLoaded', () => {

    /* SHOW PASSWORD */

    document.querySelectorAll('.password-control').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            let items = item.previousElementSibling;

            if (items.getAttribute('type') == 'password'){
                items.setAttribute('type', 'text');
                item.querySelector('img').setAttribute('src', 'assets/icons/eye-close.svg');
            } else {
                items.setAttribute('type', 'password');
                item.querySelector('img').setAttribute('src', 'assets/icons/eye.svg');
            }
        });
    });
});
