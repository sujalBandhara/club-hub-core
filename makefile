# Build dist
build:
	@echo "Transpiling project and building dist directory"
	npm i
	rm -rf ./dist/** && ./node_modules/.bin/tsc && rm -rf ./node_modules/@types/mongoose

test: build
	NODE_ENV=test LOGGER_DISABLED=true ./node_modules/.bin/mocha --exit --bail --recursive --sort --full-trace ./dist/test