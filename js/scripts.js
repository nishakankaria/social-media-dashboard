const toggleButton = document.querySelector('.toggle-theme button')
const toggleIn = toggleButton.childNodes[1]
let theme = document.getElementById("theme")

toggleButton.addEventListener('click', () => {
  if(theme.className === 'light') {
    toggleIn.textContent = true
    theme.className = 'dark'
  } else {
    toggleIn.textContent = false
    theme.className = 'light'
  }
})
