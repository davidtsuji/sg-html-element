build:
	@make install
	@component build --dev

install:
	@component install --dev > /dev/null

test:
	@make install
	@make build
	@open test/test.html

.PHONY: build install test