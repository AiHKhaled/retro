const revealContent = () => {
  const loader = document.getElementById('loader')
  const content = document.getElementById('content')

  if (content) content.style.display = 'block'
  if (loader) loader.classList.add('is-hidden')
}

document.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(revealContent, 120)
})

window.addEventListener('load', revealContent)
