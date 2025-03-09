const _getPixelsAtCoords = (x, y) => {
  const i = y * width * 4 + x * 4
  return [pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 3]]
}

export const getPixelsAtCoords = (x, y, kernelX = 0, kernelY) => {
  kernelY ??= kernelX
  const x1 = Math.max(0, x - kernelX)
  const x2 = Math.min(width, x + kernelX)
  const y1 = Math.max(0, y - kernelY)
  const y2 = Math.min(height, y + kernelY)
  const w = x2 - x1 + 1
  const h = y2 - y1 + 1

  const averagePixel = [0, 0, 0, 0]

  for (let x = x1; x <= x2; x++) {
    for (let y = y1; y <= y2; y++) {
      const pixel = _getPixelsAtCoords(x, y)
      averagePixel[0] += pixel[0] / (w * h)
      averagePixel[1] += pixel[1] / (w * h)
      averagePixel[2] += pixel[2] / (w * h)
      averagePixel[3] += pixel[3] / (w * h)
    }
  }

  const result = averagePixel.map(p => Math.round(p))

  return result
}


export const darkenColor = (bottomColor, topColor, totalAmount, lightenFactor = 0.75) => {
  if (topColor < bottomColor) return topColor
  return bottomColor + (topColor - bottomColor) / (totalAmount / lightenFactor)
}


export const lineScanPixels = (y1, y2, kernelX = 0, kernelY) => {
  kernelY ??= kernelX
  const h = y2 - y1 + 1

  const line = Array(width).fill(0).map(() => [255, 255, 255, 255])
  for (let y = 0; y < h; y++)
    for (let x = 0; x < width; x++) {
      const accumulatedPixel = line[x]
      const currentPixel = getPixelsAtCoords(x, y1 + y, kernelX, kernelY)

      accumulatedPixel[0] = darkenColor(accumulatedPixel[0], currentPixel[0], h)
      accumulatedPixel[1] = darkenColor(accumulatedPixel[1], currentPixel[1], h)
      accumulatedPixel[2] = darkenColor(accumulatedPixel[2], currentPixel[2], h)
      accumulatedPixel[3] = darkenColor(accumulatedPixel[3], currentPixel[3], h)
    }

  const result = line.map(pixel => pixel.map(p => Math.round(p)))
  console.log(result)

  return result
}
