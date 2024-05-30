const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


function validateSignUpForm() {
    const name = document.querySelector('.sign-up input[placeholder="Name"]').value;
    const email = document.querySelector('.sign-up input[placeholder="Email"]').value;
    const password = document.querySelector('.sign-up input[placeholder="Password"]').value;

    if (!name | !email | !password) {
        alert('Please fill in all the details');
        return false;
    }


    SignUpPage();
    return true;
}

    function SignUpPage() {

        window.location.href = 'startup.html';
    }

function validateSignInForm() {
    const email = document.querySelector('.sign-in input[placeholder="Email"]').value;
    const password = document.querySelector('.sign-in input[placeholder="Password"]').value;

    if (!email || !password) {
        alert('Please fill in all the details');
        return false; 
    }

    submitSignInForm();
    return false; 
}

function submitSignInForm() {
    window.location.href = 'startup.html';

}