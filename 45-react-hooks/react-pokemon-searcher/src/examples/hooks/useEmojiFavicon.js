import { useEffect } from 'react'

// helper to create an image from an emoji
const createImage = emoji => {
  // create canvas element
  const canvas = document.createElement("canvas")
  canvas.height = 64
  canvas.width = 64

  // get canvas context
  const ctx = canvas.getContext('2d')
  ctx.font = "64px monospace"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"

  // draw emoji to canvas
  ctx.strokeText(emoji, 32, 32)

  // return url for image
  return canvas.toDataURL()
}

// replace old favicon link with new one
const updateFavicon = imgUrl => {
  // find existing favicon link in head
  const oldLink = document.head.querySelector("link[rel*='icon']")
  if (oldLink) {
    document.head.removeChild(oldLink)
  }

  // create new favicon link
  const newLink = document.createElement("link")
  newLink.id = "dynamic-favicon"
  newLink.rel = "shortcut icon"
  newLink.sizes = "64x64"
  newLink.type = "image/png"
  newLink.href = imgUrl
  document.head.appendChild(newLink)
}

export const useEmojiFavicon = emoji => {
  useEffect(() => {
    if (emoji.length) {
      // create image
      const imgUrl = createImage(emoji)

      // update favicon link
      updateFavicon(imgUrl)
    }
  }, [emoji])
}