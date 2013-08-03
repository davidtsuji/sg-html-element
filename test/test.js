var assert = require('assert')
  , dom = require('dom')
  , type = require('type')
  , htmlElement = require('sg-html-element')

describe('Try to return HTMLElements when given jQuery', function(){

	var dummyElement = dom('<div class="dummy"><aside></aside><aside></aside></div>')

	dom('body').append(dummyElement);

	it('should downgrade jQuery objects', function(_done){

		assert(type(htmlElement($('body > .dummy > aside'))) == 'element', 'jQuery');
		assert(type(htmlElement($('body > .dummy > aside')[0])) == 'element', 'jQuery[0]');
		assert(type(htmlElement($('body > .dummya > aside'))) == 'null', 'invalid jQuery');
		assert(type(htmlElement($('<div>'))) == 'element', 'jQuery element not in the dom');

		_done();

	});

	it('should downgrade component dom objects', function(_done){

		assert(type(htmlElement(dom('body > .dummy > aside'))) == 'element', 'dom');
		assert(type(htmlElement(dom('body > .dummy > aside').els[0])) == 'element', 'dom[0]');
		assert(type(htmlElement(dom('body > .dummya > aside'))) == 'null', 'invalid dom');
		assert(type(htmlElement(dom('<div>'))) == 'element', 'dom element not in the dom');

		_done();

	});

	it('should return if it is already a HTMLElement', function(_done){

		assert(type(htmlElement(document.querySelector('body > .dummy > aside'))) == 'element', 'dom');
		assert(type(htmlElement(document.querySelectorAll('body > .dummy > aside'))) == 'element', 'dom[0]');
		assert(type(htmlElement(document.querySelector('body > .dummya > aside'))) == 'null', 'invalid dom');
		assert(type(htmlElement(document.createElement('div'))) == 'element', 'dom element not in the dom');

		_done();

	});

	it('should return null when given random types', function(_done){

		assert(type(htmlElement(null)) == 'null');
		assert(type(htmlElement(1)) == 'null');
		assert(type(htmlElement()) == 'null');
		assert(type(htmlElement(undefined)) == 'null');
		assert(type(htmlElement(true)) == 'null');
		assert(type(htmlElement(false)) == 'null');
		assert(type(htmlElement(function(){})) == 'null');
		assert(type(htmlElement(/-/)) == 'null');
		assert(type(htmlElement(Date)) == 'null');

		_done();

	});

});