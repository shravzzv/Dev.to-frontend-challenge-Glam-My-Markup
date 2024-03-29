const form = document.querySelector('form')
const submitBtn = document.querySelector('button')

const handleSubmit = (e) => {
  e.preventDefault()
  alert('Your information was submitted. See you in camp.')
}

form.addEventListener('submit', handleSubmit)
submitBtn.classList.add('filled')
