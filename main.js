const scriptURL = 'https://script.google.com/macros/s/AKfycbwlx_TvNxTC21aOa5r07uDroswrcL0-4I3NpOXi5MVZZjNUI-Z3MoM_3OFSKq7vEm9_/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Gracias por hacernos saber tu asistencia, alli te esperamos." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})