// Netlify serves the build as plain files. The app routes on the client, so without a fallback rule a direct link such
// as /projects is "not found". CRA copies public/ into the build, where Netlify reads _redirects.
import fs from 'fs'
import path from 'path'

const file = path.join(__dirname, '..', 'public', '_redirects')

test('a path that is not a file is answered by the app with status 200', () => {
	expect(fs.existsSync(file)).toBe(true)
	const rules = fs
		.readFileSync(file, 'utf8')
		.split('\n')
		.map((line) => line.trim())
		.filter((line) => line && !line.startsWith('#'))
		.map((line) => line.split(/\s+/))
	// no "!" after the status: a real file such as /static/js/*.js still wins over the rule
	expect(rules).toEqual([['/*', '/index.html', '200']])
})
