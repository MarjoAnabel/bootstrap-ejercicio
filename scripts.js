const yourname = document.getElementById('yourname')
const email = document.getElementById ('exampleInputEmail1')
const password1 = document.getElementById ('exampleInputPassword1')
const password2 = document.getElementById ('exampleInputPassword2')
const message = document.getElementById ('message')
const data = document.querySelector("input")
const userInfo = document.getElementById ('content')
const sendButton = document.getElementById('sendButton')


function onSubmit(event) {
    event.preventDefault()
    if (yourname.value === '' || email.value === '' || password1.value === '' || password2.value === '' ) { 

     return alert = "Rellena todos los campos"
    }
        if (!validEmail.test(email.value) !== true) { 
          return alert ("Email mal escrito", "danger")
       } 

       if ( !validPassword.test (email.value) !== true) {
        return alert ("Contrañe incorrecta", "danger")
       }
       







       checkuser()

        }
       function checkuser () {
        alert ("Se ha registrado correctamente", "success")
        setTimeout(() => {
          message.innerHTML = ''
        }, 3000)
       }

       function alert (alertmessage, type) {
        let alert = document.createElement ("div")
        validationAlerts.innerHTML = [`<div class="alert alert-${type}" role="alert">`,
        alertmessage,
        `</div>`].join("") 
        
       }

    

     

    saveDataStorage ()
    const userFromStorage = JSON.parse (localStorage.getItem ('userInfo')) 
    // userInfo.innerHTML = `<p>Hola ${userFromStorage.userName} tu correo ${userFromStorage.userEmail} y el mensaje ${userFromStorage.userMensage}</p>`
    
    function saveDataStorage() {
    localStorage.setItem('userInfo', JSON.stringify({
        userName: yourname.value,
        userEmail: email.value,
        userPassword1: password1.value,
        userPassword2: password2.value,
        
    }))

}


sendButton.addEventListener ('click', onSubmit)