export function appendHeader(title) {
  let el = document.querySelector('gifContainer')

  let content = document.createTextNode(` <h3 class="title">${title}</h3>
  <img class="gif" src="snow.gif" alt="" />
</div>
<div class="header">
  <div class="links"></div>`)

  el.appendChild(content)
}
