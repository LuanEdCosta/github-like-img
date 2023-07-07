import { createCanvas } from 'canvas'
import { createWriteStream } from 'fs'

const SIZE = 500
const PADDING = 25
const SQUARE_COUNT = 5
const SQUARE_SIZE = (SIZE - 2 * PADDING) / SQUARE_COUNT
const BACKGROUND_COLOR = '#f2f2f2'
const SQUARE_COLOR = '#bbbbbb'

const canvas = createCanvas(SIZE, SIZE)
const ctx = canvas.getContext('2d')

ctx.fillStyle = BACKGROUND_COLOR
ctx.fillRect(0, 0, SIZE, SIZE)

for (let i = 0; i < SQUARE_COUNT; i++) {
  for (let j = 0; j < SQUARE_COUNT; j++) {
    const random = Math.round(Math.random() * SQUARE_COUNT)
    if (random === i || random === j) {
      const x = PADDING + j * SQUARE_SIZE
      const y = PADDING + i * SQUARE_SIZE
      ctx.fillStyle = SQUARE_COLOR
      ctx.fillRect(x, y, SQUARE_SIZE, SQUARE_SIZE)
    }
  }
}

canvas.createPNGStream().pipe(createWriteStream('image.png'))
