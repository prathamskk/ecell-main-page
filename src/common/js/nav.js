const links = document.querySelectorAll('.links a')
const checkbox = document.querySelector('#nav-toggle')

for ( const link of links ) {
  link.onclick = handleClick
}

function handleClick() {
  checkbox.checked = false
}