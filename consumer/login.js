const loginform = document.getElementById('login-form')
const submitbtn = document.getElementById('submitbtn') 

submitbtn.addEventListener('click', function(event) {
    event.preventDefault()

    const email = document.getElementById('email').value
    const pass = document.getElementById('password').value

    if(email == 'irtezahussain@gmail.com' && pass == '123456'){
        window.location.href = 'dashboard.html'
    }
    else{
        alert('Invalid username or Password')
    }
})