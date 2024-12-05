    const container = document.querySelector('.container');
    const Wrapper = document.querySelector('.wrapper');
    const iconclose = document.querySelector('.icon-close');
    const Label = document.querySelector('.label-text');
    const left = document.querySelector('.left');
    const buttonOne = document.querySelector('.sign-in');
    const buttonTwo = document.querySelector('.sign-up');
    const registerLink = document.querySelector('.register-link');

    iconclose.addEventListener('click', function () {
        Wrapper.classList.add('exit');
    });
    buttonOne.addEventListener('click', function () {
        Wrapper.classList.remove('exit');
    });
    buttonTwo.addEventListener('click', function () {
        Wrapper.classList.remove('exit');
    });

    registerLink.addEventListener('click', function () {
        left.classList.toggle('show');
        container.classList.toggle('active');
        if(registerLink.textContent === 'Login') {
            registerLink.textContent = 'Register';
        }else {
            registerLink.textContent = 'Login'
        }
        if(Label.textContent === 'All ready have an account?') {
            Label.textContent = 'Dont have an account?';
        }else {
            Label.textContent = 'All ready have an account?'
        }
    });