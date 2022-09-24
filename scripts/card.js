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

$(document).ready(function () {
  projects.forEach((project) => {
    $('.cards').append(
      $(
        createCard(
          project.title,
          project.content,
          project.link,
          project.thumbnails
            ?.map((thumb) => `<img src='${thumb}'  /> `)
            .join(''),
          project.stacks
            ?.map(
              (stack) => `<img src='../stacks${stack}' class="card-img" /> `
            )
            .join('')
        )
      )
    )
  })
})
