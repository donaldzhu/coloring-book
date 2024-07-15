import { WIDTH_INCH, MIN_INCREMENT_INCH, HEIGHT_INCH, MAX_DIV, MIN_DIV } from './data/config'
import Rect from './utils/rect'
import { map, quickArray, randInt } from './utils/utils'

class Grid extends Rect {
  constructor(config = {}) {
    const baseColCount = Math.floor(WIDTH_INCH / MIN_INCREMENT_INCH) - 1
    const baseRowCount = Math.floor(HEIGHT_INCH / MIN_INCREMENT_INCH) - 1

    super({
      w: baseColCount + 1,
      h: baseRowCount + 1
    })
    this.cols = []
    this.rows = []
    this.baseColCount = baseColCount
    this.baseRowCount = baseRowCount

    this.create(config)
  }

  create(config) {
    this.cols = this.getDivs(this.baseColCount)
    this.rows = this.getDivs(this.baseRowCount)
    return this.transform(config)
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

    const cols = this.cols =
      this.cols.map(col => map(col, oldX1, oldX2, this.x1, this.x2))
    const rows = this.rows =
      this.rows.map(row => map(row, oldY1, oldY2, this.y1, this.y2))
    return { cols, rows }
  }

  getDivs(baseGridCount) {
    const baseGrid = quickArray(baseGridCount)
    return quickArray(randInt(MIN_DIV - 1, MAX_DIV), () => {
      const index = randInt(baseGrid.length)
      const colIndex = baseGrid[index]
      baseGrid.splice(index, 1)
      return colIndex + 1
    }).sort((a, b) => a - b)
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