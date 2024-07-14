import { INNER_ASPECT_RATIO } from './data/constants'
import Grid from './grid'
import { cover, vh, vw } from './utils/utils'

window.setup = () => {
  createCanvas(window.innerWidth, window.innerHeight)
  background(255)
  const grid = new Grid()
  grid.create()

  const margin = 100
  const { w, h } = cover(vw() - margin * 2, vh() - margin * 2, INNER_ASPECT_RATIO)
  grid.transform({ x: margin, y: margin, w, h })
  console.log(grid)

  // const yBounds = [grid.y1, grid.y2]
  // const xBounds = [grid.x1, grid.x2]

  window.stroke(0, 0, 0)
  grid.rows.forEach(row => {
    window.line(grid.x1, row, grid.x2, row)
  })

  grid.cols.forEach(col => {
    window.line(col, grid.y1, col, grid.y2)
  })

  window.stroke(255, 0, 0)
  window.noFill()
  window.rect(...grid.topLeft, ...grid.botRight)
}

window.draw = () => {

}