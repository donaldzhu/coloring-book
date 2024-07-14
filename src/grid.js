import { WIDTH_INCH, MIN_INCREMENT_INCH, HEIGHT_INCH, MAX_DIV, MIN_DIV, MARGIN } from './data/config'
import Rect from './utils/rect'
import { map, quickArray, randInt } from './utils/utils'

class Grid extends Rect {
  constructor() {
    const baseColCount = Math.floor(WIDTH_INCH / MIN_INCREMENT_INCH)
    const baseRowCount = Math.floor(HEIGHT_INCH / MIN_INCREMENT_INCH)

    super({
      w: baseColCount,
      h: baseRowCount
    })
    this.cols = []
    this.rows = []
    this.baseColCount = baseColCount
    this.baseRowCount = baseRowCount
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
    const oldX1 = this.x1
    const oldX2 = this.x2
    const oldY1 = this.y1
    const oldY2 = this.y2

    this.x = x
    this.y = y
    this.w = w
    this.h = h

    // console.log(this.x1, this.x2, this.y1, this.y2)
    const cols = this.cols =
      this.cols.map(col => map(col, oldX1, oldX2, this.x1, this.x2))
    const rows = this.rows =
      this.rows.map(row => map(row, oldY1, oldY2, this.y1, this.y2))
    return { cols, rows }
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
    //.map(coor => coor * this.inchToPx(MIN_INCREMENT_INCH))
  }

  inchToPx(inch) {
    return inch * this.w / WIDTH_INCH
  }

  get colW() {
    return this.w / this.cols.length
  }

  get rowH() {
    return this.h / this.rows.length
  }
}

export default Grid