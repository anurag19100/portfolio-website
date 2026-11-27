// The site's own rules must come after Bootstrap's so that they win ties (the "Open to freelance" button, the navbar
// height). The old webpack build ordered them that way by splitting chunks; Vite keeps the order of the imports.
import fs from 'node:fs'
import path from 'node:path'

const read = (name) => fs.readFileSync(path.resolve('src', name), 'utf8')

test('Bootstrap is imported once, before the site stylesheet', () => {
	const entry = read('index.js')
	const bootstrap = entry.indexOf("import 'bootstrap/dist/css/bootstrap.min.css'")
	expect(bootstrap).toBeGreaterThanOrEqual(0)
	expect(bootstrap).toBeLessThan(entry.indexOf("import './index.css'"))
	expect(read('App.js')).not.toContain('bootstrap.min.css')
})
