function appendHeader(title, img) {
  let el = document.querySelector('.top')

  let content = document.createTextNode(` <h3 class="title">${title}</h3>
  <img class="gif" src=${img} alt="" />
</div>
<div class="header">
  <div class="links"></div>`)

  el.appendChild(content)
}
