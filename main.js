const form = document.querySelector('form_button')
form.addEventListener('click', () =>{
    alert ("Gracias por enviarnos tu respuesta")
    .then(() => {window.location.reload()})    

})