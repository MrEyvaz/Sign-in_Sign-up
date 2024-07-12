const sign_up_username = document.querySelector('.sign-up-username')

const sign_up_password = document.querySelector('.sign-up-password')

const sign_in_username = document.querySelector('.sign-in-username')

const sign_in_password = document.querySelector('.sign-in-password')

const sign_up_btn = document.querySelector('.sign-up_btn button')

const sign_in_btn = document.querySelector('.sign-in_btn button')

sign_up_btn.addEventListener('click', function () {
    const ptag = document.createElement('p');
    const usertodo = sign_up_username.value;
    const passwordtodo = sign_up_password.value;

    // Remove existing error messages
    const existingErrorMessages = document.querySelectorAll('p');
    existingErrorMessages.forEach((errorMessages) => {
        errorMessages.remove();
    });

    if (usertodo === '' || passwordtodo === '') {
        ptag.innerHTML = `Please enter both username and password`;
        ptag.style.marginLeft = '40%';
        ptag.style.marginTop = '-3%';
        ptag.style.color = 'red';
        ptag.style.fontSize = '17px';
        document.body.appendChild(ptag);
    } else {
        // Check if the username already exists
        if (localStorage.getItem(usertodo)) {
            ptag.innerHTML = `Username already exists!`;
            ptag.style.marginLeft = '46%';
            ptag.style.marginTop = '-3%';
            ptag.style.color = 'red';
            ptag.style.fontSize = '17px';
            document.body.appendChild(ptag);
        } else {
            // Store the new username and password
            localStorage.setItem(usertodo, passwordtodo);
            ptag.innerHTML = `Sign up successful!`;
            ptag.style.marginLeft = '46%';
            ptag.style.marginTop = '-3%';
            ptag.style.color = 'green';
            ptag.style.fontSize = '17px';
            document.body.appendChild(ptag);
        }
    }
});

sign_in_btn.addEventListener('click', function () {
    const ptag = document.createElement('p');
    const sign_in_usertodo = sign_in_username.value
    const sign_in_passwordtodo = sign_in_password.value

    // Remove existing error messages
    const existingErrorMessages = document.querySelectorAll('p');
    existingErrorMessages.forEach((errorMessages) => {
        errorMessages.remove();
    });

    if (sign_in_usertodo === '' || sign_in_passwordtodo === '') {
        ptag.innerHTML = `Please enter both username and password`;
        ptag.style.marginLeft = '40%';
        ptag.style.marginTop = '-3%';
        ptag.style.color = 'red';
        ptag.style.fontSize = '17px';
        document.body.appendChild(ptag);
    } else {
        // Check if the username and password match
        const storedPassword = localStorage.getItem(sign_in_usertodo);
        if (storedPassword === sign_in_passwordtodo) {
            ptag.innerHTML = `Sign in successful!`;
            ptag.style.marginLeft = '46%';
            ptag.style.marginTop = '-3%';
            ptag.style.color = 'green';
            ptag.style.fontSize = '17px';
            document.body.appendChild(ptag);
        } else {
            ptag.innerHTML = `Invalid username or password`;
            ptag.style.marginLeft = '43%';
            ptag.style.marginTop = '-3%';
            ptag.style.color = 'red';
            ptag.style.fontSize = '17px';
            document.body.appendChild(ptag);
        }
    }
});