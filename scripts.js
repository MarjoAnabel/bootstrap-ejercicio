const yourname = document.getElementById('yourname')
const email = document.getElementById ('exampleInputEmail1')
const password1 = document.getElementById ('exampleInputPassword1')
const password2 = document.getElementById ('exampleInputPassword2')
const message = document.getElementById ('message')
const datavalid = false

/*Boton*/ 
const sendButton = document.getElementById('sendButton')
sendButton.addEventListener ('click', onSubmit)

/*Alertas*/
const validationAlerts = document.getElementById('alerts')

/*Guardar datos de los usuarios*/
if (!localStorage.userList){
  localStorage.userList = JSON.stringify([])
}


function validation(data){
   
  if (data.yourname === '' || data.email === '' || data.password1 === '' || data.password2 === '' ) /*En el return ponemos un div sacado de bootstrap */ 
    return (validationAlerts.innerHTML = '<div class="alert alert-danger" role="alert">Falta de rellenar</div>')

  else {
    if (/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)){ 
      return (validationAlerts.innerHTML = '<div class="alert alert-success" role="alert">Todo Correcto </div>') 
 }


  if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(password1)){ 
    return (validationAlerts.innerHTML = '<div class="alert alert-success" role="alert">Todo Correcto</div>')
   }

   if (password1 !== password2) { /*Conparacion de las contraseñas que tiene que coincidir */ 
    return (validationAlerts.innerHTML = '<div class="alert alert-danger" role="alert">Las contraseñas no coinciden</div>')
   }
      datavalid = true 


    let userarray = JSON.stringify(guardarusuarios)||[]
    userarray.push(datosuser)
    localStorage.setItem('guardarusuarios', JSON.stringify(userarray))

    return (validationAlerts.innerHTML = '<div class="alert alert-success" role="alert">Todo Correcto</div>')
  }
} 






function onSubmit(event) {
    event.preventDefault()
      const userData = {
          yourname: yourname.value,
          email: email.value,
          password1: password1.value,
          password2: password2.value
      }
    validation (userData) 

        setTimeout(function() {
          alerts.innerHTML = ''
        }, 3000)


   if (datavalid)
   setTimeout(function() {
  window.location = 'index.html'
    message.innerHTML = './cards.html' //poner la otra pagina de cards
  }, 3000)
  
} 



