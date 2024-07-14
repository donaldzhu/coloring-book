import { arrayify } from './utils'


class Rect {
  constructor({ x = 0, y = 0, w = 0, h = 0, padding = [0, 0] }) {
    const paddingArray = arrayify(padding)
    this._x = x
    this._y = y
    this._w = w
    this._h = h
    this.padding = {
      x: paddingArray[0],
      y: paddingArray[1] ?? paddingArray[0]
    }
  }

  get x() {
    return this._x - this.padding.x
  }

  get y() {
    return this._y - this.padding.y
  }

  get w() {
    return this._w + this.padding.x * 2
  }

  get h() {
    return this._h + this.padding.y * 2
  }

  get x1() {
    return this.x
  }

  get y1() {
    return this.y
  }

  get x2() {
    return this.x1 + this.w
  }

  get y2() {
    return this.y1 + this.h
  }

  get cx() {
    return (this.x1 + this.x2) / 2
  }

  get cy() {
    return (this.y1 + this.y2) / 2
  }

  get topLeft() {
    return [this.x1, this.y1]
  }

  get topRight() {
    return [this.x2, this.y1]
  }

  get botLeft() {
    return [this.x1, this.y2]
  }

  get botRight() {
    return [this.x2, this.y2]
  }

  get sides() {
    return [
      this.x1,
      this.y1,
      this.x2,
      this.y2,
    ]
  }

  get size() {
    return [this.w, this.h]
  }

  get center() {
    return [this.cx, this.cy]
  }

  get corners() {
    return [
      this.topLeft,
      this.topRight,
      this.botRight,
      this.botLeft
    ]
  }
}

export default Rect