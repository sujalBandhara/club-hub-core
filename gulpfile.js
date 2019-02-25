const gulp = require('gulp')
const ts = require('gulp-typescript')
const plumber = require('gulp-plumber')
const cache = require('gulp-cached')
const del = require('del')
const gulpcopy = require('gulp-copy')

// Internal Deps
const tsProject = ts.createProject('tsconfig.json', {
	noImplicitAny: false,
	outDir: 'dist'
})

/**
 * Cleaning commands
 */
const cleanDistFolder = 'clean:dist'
gulp.task(cleanDistFolder, function () {
	return del([
		'dist/**/*',
	])
})

// Copies non-ts files to dist
const copyStaticResources = 'copyStaticResources'
gulp.task(copyStaticResources, () => {
	let staticFiles = [
		'./src/Firebase/config/adminConfig.json'
	]
	return gulp.src(staticFiles)
		.pipe(gulpcopy('./dist'))
})

const transpileTS = 'transpileTS'
gulp.task(transpileTS, [cleanDistFolder], () => {

	// Kick off the copy
	gulp.start(copyStaticResources)

	// Begin Transpile
	return tsProject.src()
		.pipe(plumber())
		.pipe(cache('transpileTS'))
		.pipe(tsProject())
		.once('error', function () {
			// if (options.indexOf('--force') === -1) {
			// 	this.once('finish', () => process.exit(1))
			// }
		})
		.js.pipe(gulp.dest('dist'))
})