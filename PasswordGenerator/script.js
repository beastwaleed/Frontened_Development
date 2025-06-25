window.addEventListener('DOMContentLoaded', () => {

    const buttonElem = document.querySelector('.generate');
    const passwordElem = document.querySelector('.password');
    const copyButtonElem = document.querySelector('.copyIcon');

    let password = '';
    let length = 12;
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;


    buttonElem.addEventListener('click', generatePassword);
    copyButtonElem.addEventListener('click', () => {
        if (passwordElem.value === '') {
            alert('Please generate a password first!');
            return;
        }
         passwordElem.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');

    });
   


    function generatePassword() {
        password = '';
        for (let i = 0; i < length; i++) {
            const randomIdx = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIdx];
        }
        passwordElem.value = password;
    };
});
