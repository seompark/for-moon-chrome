const $ = document.querySelector.bind(document)

const $id = $('#input-id')
const $password = $('#input-pwd')

function handleSubmit (event) {
  window.postMessage({
    type: 'FOR_MOON'
  })
}

function clearInput () {
  $id.value = ''
  $password.value = ''
}

$('#submit').addEventListener('click', handleSubmit)