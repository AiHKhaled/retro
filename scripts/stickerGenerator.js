const stickers = [
  '/stickers/angelgirl.gif',
  '/stickers/delete_instagram.gif',
  '/stickers/stamp-yrownwebsite.png',
  'stickers/the-matrix.gif',
  '/stickers/say-no-to-web3.gif',
  '/stickers/stamp-frames.gif',
  '/stickers/lain.gif',
  '/stickers/laingreen.gif',
]

const stickersContainer = document.querySelector('.stickersContainer')

export function generator() {
  stickers.forEach((i) => {
    let sticker = document.createElement('img')
    sticker.style.border = '1px solid rgb(255, 204, 153)'
    sticker.setAttribute('src', i)

    stickersContainer.append(sticker)
  })
}
