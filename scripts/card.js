import { projects } from './data.js'
function createCard(title, content, link, thumbnails, stack) {
  return `
  <li class="card">
  <a href=${link}> <h3 >${title}:</h3>  </a>
                <div class='stack'>
                ${content}
                <div class="thumbnail"> ${thumbnails} </div>
                <h4>technologies used:</h4> <div class="stack-container"> ${stack}</div>
                </li>
                
            `
}

document.addEventListener('DOMContentLoaded', function () {
  const cardsContainer = document.querySelector('.cards')

  for (const project of projects) {
    const card = document.createElement('div')
    card.classList.add('card')

    const thumbnailImages = project.thumbnails
      ?.map((thumb) => `<img src='${thumb}' alt='${thumb}' />`)
      .join('')

    const stackImages = project.stacks
      ?.map((stack) => `<img src='../stacks${stack}' alt='${stack}' class="card-img"  />`)
      .join('')

    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.content}</p>
        <a href="${project.link}" class="btn btn-primary">Learn more</a>
      </div>
      ${thumbnailImages ? `<div class="thumbnail">${thumbnailImages}</div>` : ''
      }
      ${stackImages ? `<div class="stack-container">${stackImages}</div>` : ''}
    `

    cardsContainer.appendChild(card)
  }

  const backLink = document.createElement('a')
  backLink.href = 'index.html'
  const backImage = document.createElement('img')
  backImage.src = 'back.gif'
  backImage.style.float = 'right'
  backImage.style.margin = '-40px'
  backLink.appendChild(backImage)

  const backListItem = document.createElement('li')
  backListItem.classList.add('back')
  backListItem.appendChild(backLink)

  cardsContainer.appendChild(backListItem)
})
