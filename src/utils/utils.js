export const randInt = (min, max) => {
  if (max === undefined) {
    max = min
    min = 0
  }
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))
}

export const quickArray = (length, callback = i => i) => Array(length).fill(0).map((_, i) => callback(i))
export const arrayify = possibleArray => Array.isArray(possibleArray) ? possibleArray : [possibleArray]

export const map = (value, inMin, inMax, outMin = 0, outMax = 1) =>
  (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin

export const cover = (w, h, wToH) => w / h >= wToH ?
  {
    w: h * wToH,
    h,
  } : {
    w,
    h: w / wToH
  }

export const vw = (percentage = 100) => percentage * window.innerWidth / 100
export const vh = (percentage = 100) => percentage * window.innerHeight / 100