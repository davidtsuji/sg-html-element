var type = require('type')

module.exports = function(_el) {

	var el = null;

	if (type(_el) == 'element') {

		el = _el;

	} else if (/(array|object)/.test(type(_el))) {

		if (type(_el[0]) == 'element') {
			el = _el[0];
		} else if (/(array|object)/.test(type(_el['els'])) && type(_el.els[0]) == 'element') {
			el = _el.els[0];
		}

	}

	return type(el) == 'element' ? el : null;

}