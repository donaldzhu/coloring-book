import { MIN_DIV, SCREEN_MARGIN } from './data/config'
import Grid from './grid'

window.setup = () => {
  createCanvas(window.innerWidth, window.innerHeight)
  background(255)
  const grid = new Grid()
  grid.create()
  console.log(grid)

  // const yBounds = [grid.y1, grid.y2]
  // const xBounds = [grid.x1, grid.x2]

  // window.stroke(0, 0, 0)
  // grid.rows.forEach(row => {
  //   const y = row * grid.h / grid.baseRowCount + SCREEN_MARGIN
  //   window.line(xBounds[0], y, xBounds[1], y)
  // })


  // grid.cols.forEach(col => {
  //   const x = col * grid.w / grid.baseColCount + SCREEN_MARGIN
  //   window.line(x, yBounds[0], x, yBounds[1])
  // })


  // window.stroke(255, 0, 0)
  // window.line(xBounds[0], yBounds[0], xBounds[1], yBounds[0])
  // window.line(xBounds[0], yBounds[1], xBounds[1], yBounds[1])
  // window.line(xBounds[0], yBounds[0], xBounds[0], yBounds[1])
  // window.line(xBounds[1], yBounds[0], xBounds[1], yBounds[1])
}

window.draw = () => {

}