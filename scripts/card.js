import { projects } from './data.js'
function createCard(title, content, link) {
  return `
  <li class="card">
  <a href=${link}> ${title} </a>
                ${content}
                </li>
            `
}
$(function () {
  projects.forEach((project) => {
    $('.cards').append(
      $(createCard(project.title, project.content, project.link))
    )
  })
  // create one card

  // create nested cards
  // $('.cards').append($(createCard('2', createCard(3, 'Dolor sit amnet'))))
})
