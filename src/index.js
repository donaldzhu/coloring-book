import { SCREEN_MARGIN } from './data/config'
import { INNER_ASPECT_RATIO } from './data/constants'
import Grid from './grid'
import { cover, vh, vw } from './utils/utils'

window.setup = () => {
	createCanvas(vw(), vh())
	background(255)
	const { w, h } = cover(vw() - SCREEN_MARGIN * 2, vh() - SCREEN_MARGIN * 2, INNER_ASPECT_RATIO)

	const grid = new Grid({ x: (vw() - w) / 2, y: (vh() - h) / 2, w, h })

	window.stroke(0, 0, 0)
	grid.rows.forEach(row => window.line(grid.x1, row, grid.x2, row))
	grid.cols.forEach(col => window.line(col, grid.y1, col, grid.y2))

	window.stroke(255, 0, 0)
	window.noFill()
	window.rect(...grid.topLeft, ...grid.size)
}

window.draw = () => {

}