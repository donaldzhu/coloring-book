import { WIDTH_INCH, MIN_INCREMENT_INCH, HEIGHT_INCH, MAX_DIV, MIN_DIV, MARGIN } from './data/config'
import { ASPECT_RATIO, INNER_ASPECT_RATIO } from './data/constants'
import Rect from './utils/rect'
import { cover, quickArray, randInt, vh, vw } from './utils/utils'

class Grid extends Rect {
  constructor() {
    const { w, h } = cover(vw(), vh(), INNER_ASPECT_RATIO)
    super({
      w,
      h,
    })
    this.cols = []
    this.rows = []
  }

  create() {
    const cols = this.cols = this.getRandDiv(this.baseColCount)
    const rows = this.rows = this.getRandDiv(this.baseRowCount)
    return { cols, rows }
  }

  transform({
    x = this.x,
    y = this.y,
    w = this.w,
    h = this.h
  }) {
    const dx = x - this.x
    const dy = y - this.y
    const wFactor = w / this.w
    const hFactor = h / this.h
    // need setters
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    const cols = this.cols = this.cols.map(col => col) // get transform matrix order
  }

  getRandDiv(baseGridCount) {
    const baseGrid = quickArray(baseGridCount)
    return quickArray(randInt(MIN_DIV, MAX_DIV + 1), () => {
      const index = randInt(baseGrid.length)
      const colIndex = baseGrid[index]
      baseGrid.splice(index, 1)
      return colIndex
    })
      .sort((a, b) => a - b)
      .map(coor => coor * this.inchToPx(MIN_INCREMENT_INCH))
  }

  inchToPx(inch) {
    return inch * this.w / WIDTH_INCH
  }


  get baseColCount() {
    return Math.floor(this.w / this.inchToPx(MIN_INCREMENT_INCH))
  }

  get baseRowCount() {
    return Math.floor(this.h / this.inchToPx(MIN_INCREMENT_INCH))
  }

  get colW() {
    return this.w / this.cols.length
  }

  get rowH() {
    return this.h / this.rows.length
  }
}

export default Grid