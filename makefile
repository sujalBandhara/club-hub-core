MOCHA := node_modules/.bin/mocha
TSC := node_modules/.bin/tsc

node_modules: package.json
	@echo "Rebuilding the node modules..."
	@npm install && touch node_modules
# Build dist
build: clean node_modules
	@echo "Transpiling project and building dist directory"
	@$(TSC)

node_modules: package.json
	@echo "Rebuilding the node modules..."
	@npm install && touch node_modules

clean:
	@echo "Clearing Dist Folder..."
	@rm -rf dist

test: build
	NODE_ENV=test TZ=UTC $(MOCHA) --exit --bail --recursive --sort --full-trace ./dist/test

	