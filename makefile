# Build dist
build:
	@echo "Transpiling project and building dist directory"
	npm i
	rm -rf ./dist/** && ./node_modules/.bin/tsc && rm -rf ./node_modules/@types/mongoose