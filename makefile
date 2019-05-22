MOCHA := node_modules/.bin/mocha
TSC := node_modules/.bin/tsc

# Build dist
build:
	@echo "Transpiling project and building dist directory"
	npm i
	rm -rf ./dist/** && $(TSC)

test: build
	NODE_ENV=test TZ=UTC LOGGER_DISABLED=true $(MOCHA) --exit --bail --recursive --sort --full-trace ./dist/test