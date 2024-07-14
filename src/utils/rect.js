

class Rect {
  constructor({ x = 0, y = 0, w = 0, h = 0 }) {
    this._x = x
    this._y = y
    this._w = w
    this._h = h
  }

  get x() {
    return this._x
  }

  set x(newX) {
    this._x = newX
  }

  get y() {
    return this._y
  }

  set y(newY) {
    this._y = newY
  }

  get w() {
    return this._w
  }

  set w(newW) {
    this._w = newW
  }

  get h() {
    return this._h
  }

  set h(newH) {
    this._h = newH
  }

  get x1() {
    return this.x
  }

  set x1(newX1) {
    this.x = newX1
  }

  get y1() {
    return this.y
  }

  set y1(newY1) {
    this.y = newY1
  }

  get x2() {
    return this.x1 + this.w
  }

  set x2(newX2) {
    this.x = newX2 - this.w
  }

  get y2() {
    return this.y1 + this.h
  }

  set y2(newY2) {
    this.y = newY2 - this.h
  }

  get cx() {
    return (this.x1 + this.x2) / 2
  }

  set cx(newCx) {
    this.x = newCx - this.w / 2
  }

  get cy() {
    return (this.y1 + this.y2) / 2
  }

  set cy(newCy) {
    this.y = newCy - this.h / 2
  }

  get topLeft() {
    return [this.x1, this.y1]
  }

  set topLeft([newX1, newY1]) {
    this.x1 = newX1
    this.y1 = newY1
  }

  get topRight() {
    return [this.x2, this.y1]
  }

  set topRight([newX2, newY1]) {
    this.x2 = newX2
    this.y1 = newY1
  }

  get botLeft() {
    return [this.x1, this.y2]
  }

  set botLeft([newX1, newY2]) {
    this.x1 = newX1
    this.y2 = newY2
  }

  get botRight() {
    return [this.x2, this.y2]
  }

  set botRight([newX2, newY2]) {
    this.x2 = newX2
    this.y2 = newY2
  }

  get sides() {
    return [
      this.x1,
      this.y1,
      this.x2,
      this.y2,
    ]
  }

  set sides([newX1, newY1, newX2, newY2]) {
    this.x1 = newX1
    this.y1 = newY1
    this.w = newX2 - newX1
    this.h = newY2 - newY1
  }

  get size() {
    return [this.w, this.h]
  }

  set size([newW, newH]) {
    this.w = newW
    this.h = newH
  }

  get center() {
    return [this.cx, this.cy]
  }

  set center([newCx, newCy]) {
    this.cx = newCx
    this.cy = newCy
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