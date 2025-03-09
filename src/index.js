import { cover, vh, vw } from './utils/utils'
import { getPixelsAtCoords, lineScanPixels } from './utils/pixels'

import { ASPECT_RATIO } from './data/constants'
import _ from 'lodash'
import { createNoise2D } from 'simplex-noise'

const noise2D = createNoise2D()
const { w, h } = cover(vw(), vh(), ASPECT_RATIO)
window.setup = () => {
	createCanvas(w, h)
	background(255)
}


window.draw = () => {
	background(255)
	textAlign(CENTER, CENTER)
	textFont('Hanken Grotesk')
	textStyle(BOLD)
	const fontSize = 120
	textSize(fontSize)
	text('VECTOR', w / 2, h / 2)

	const gridSize = 10
	const opacity = 125

	for (let i = 0; i < w; i += gridSize) {
		push()
		const noiseX = noise2D(i + frameCount, 0)
		fill(0, 0, 0, noiseX * opacity, 0)
		noStroke()
		rect(i, 0, gridSize, h)
		pop()
	}

	for (let i = 0; i < h; i += gridSize) {
		push()
		const noiseY = noise2D(0, i + frameCount)
		fill(0, 0, 0, noiseY * opacity, 0)
		noStroke()
		// rect(0, i, w, gridSize)
		pop()
	}

	const y1 = Math.floor(h / 2 - fontSize / 2.25)
	const y2 = Math.floor(h / 2 + fontSize / 3.5)
	loadPixels()

	const pixelLine = lineScanPixels(y1, y2, 5)
	for (let i = 0; i < pixelLine.length; i++) {
		const [r, g, b, a] = pixelLine[i]
		push()
		fill(r, g, b, a)
		noStroke()
		rect(i, 0, i + gridSize, h)
		pop()
	}

	text('VECTOR', w / 2, h / 2)
	stroke(255, 0, 0)

	/* 	line(0, y1, w, y1)
		line(0, y2, w, y2) */
	noLoop()

}

window.keyPressed = async () => {

}


