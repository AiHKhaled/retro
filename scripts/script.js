import { corpus } from './data.js'
import { generator } from './stickerGenerator.js'

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

function getTime() {
  const currentTime = new Date().toLocaleDateString()

  return (date.innerHTML = `this website was made starting from new ${currentTime}`)
}

function godSpeak() {
  var godsong = ''
  for (i = 0; i < 32; i++) {
    index = Math.floor(Math.random() * corpus.length)
    godsong = godsong + ' ' + corpus[index]
  }
  document.getElementById('godSpeakDisplay').textContent = godsong
}
getTime()
headerLinks()
generator()

export default (headerLinks, getTime, godSpeak, generator)
