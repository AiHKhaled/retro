const stickers = [
  'stickers/stamp-yrownwebsite.png',
  'stickers/stamp-frames.gif',
  'stickers/angelgirl.gif',
  'stickers/delete_instagram.gif',
  'stickers/say-no-to-web3.gif',
  'stickers/lain.gif',
  'stickers/laingreen.gif',
  'stickers/the-matrix.gif',
  'stickers/got_html.gif',
  'stickers/monitor.gif',
]

const stickersContainer = document.querySelector('.stickersContainer')

if (stickersContainer) {
  for (const source of stickers) {
    const sticker = document.createElement('img')
    sticker.style.border = '1px solid rgb(255, 204, 153)'
    sticker.style.maxWidth = '81px'
    sticker.setAttribute('src', source)
    sticker.setAttribute('alt', '')
    sticker.setAttribute('aria-hidden', 'true')
    sticker.setAttribute('loading', 'lazy')
    sticker.setAttribute('decoding', 'async')
    stickersContainer.append(sticker)
  }
}
