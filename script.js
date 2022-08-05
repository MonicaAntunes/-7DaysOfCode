const usuario = document.getElementById('usuario')
const age = document.getElementById('age')
const learnProgramation = document.getElementById('learnProgramation')

function signIn() {
  if (
    usuario.value === '' ||
    age.value === '' ||
    learnProgramation.value === ''
  ) {
    alert('You need send all information')
  }
  if (
    usuario.value !== '' &&
    age.value !== '' &&
    learnProgramation.value !== ''
  ) {
    alert(
      `Olá ${usuario.value}, você tem ${age.value} anos, você esta aprendendo ${learnProgramation.value}`
    )
  }
}
