import { projects } from './data.js'
function createCard(title, content, link, stack) {
  return `
  <li class="card">
  <a href=${link}> <h3>${title}:</h3>  </a>
                ${content}
                <div class='stack'>
                <h3>technologies used:</h3> <div class="stack-container"> ${stack}</div>  </div>
                </li>
            `
}
$(function () {
  projects.forEach((project) => {
    $('.cards').append(
      $(
        createCard(
          project.title,
          project.content,
          project.link,
          project.stacks
            ?.map(
              (stack) => `<img src=../stacks${stack} class="card-img" ></img> `
            )
            .join('')
        )
      )
    )
  })
})
