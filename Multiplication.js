let input = document.getElementById('number-input')
let run = document.getElementById('run-button')
let output = document.getElementById('output')

function showoutput() {
  let number = Number(input.value)
  let outputHTML = '';

  for (let i = 1; i<=12; i++) {
    outputHTML += '<p>'
    outputHTML += number + ' ' + '*' + ' ' + i + ' ' + '=' + ' ' + (number*i)
    outputHTML += '<p>'
  }

  output.innerHTML = outputHTML
}
 run.addEventListener('click', showoutput)