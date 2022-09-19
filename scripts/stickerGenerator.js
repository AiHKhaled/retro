const stickers = [
  'stickers/stamp-yrownwebsite.png',
  'stickers/stamp-frames.gif',
  'stickers/angelgirl.gif',
  'stickers/delete_instagram.gif',
  'stickers/say-no-to-web3.gif',
  'stickers/lain.gif',
  'stickers/laingreen.gif',
  'stickers/the-matrix.gif',
]

const stickersContainer = document.querySelector('.stickersContainer')

function generator() {
  stickers.forEach((i) => {
    let sticker = document.createElement('img')
    sticker.style.border = '1px solid rgb(255, 204, 153)'

    sticker.setAttribute('src', i)

    stickersContainer.append(sticker)
  })
}
generator()
