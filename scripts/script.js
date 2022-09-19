import { corpus } from './data.js'

const links = document.querySelector('.links')
const date = document.getElementById('date')

const headers = [
  { name: '', gif: 'home.png', link: 'home.html' },
  { name: '', gif: 'projects.gif', link: 'projects.html' },
  { name: '', gif: 'blogs.gif', link: 'blogs.html' },
]

function headerLinks() {
  headers.forEach((i) => {
    let innerContainer = document.createElement('div')
    innerContainer.className = 'innerContainer '
    let tag = document.createElement('a')
    let image = document.createElement('img')
    let clone = tag.cloneNode(true)
    clone.href = i.link
    clone.innerText = i.name

    image.setAttribute('src', i.gif)

    image.style.height = '31px'
    image.style.width = '80px'

    innerContainer.appendChild(image)
    innerContainer.appendChild(clone)

    clone.appendChild(image)

    links.append(innerContainer)
  })
}

function godSpeak() {
  var godsong = ''
  for (i = 0; i < 32; i++) {
    index = Math.floor(Math.random() * corpus.length)
    godsong = godsong + ' ' + corpus[index]
  }
  document.getElementById('godSpeakDisplay').textContent = godsong
}

$(document).ready(function () {
  if (window.location.href.indexOf('home.html') > -1) {
    const currentTime = new Date().toLocaleDateString()

    return (date.innerHTML = `this website was made starting from  ${currentTime}`)
  }
})

$(document).ready(function (title) {
  if (document.getElementsByTagName(title)) {
  }
})

headerLinks()

export default (headerLinks, godSpeak)
