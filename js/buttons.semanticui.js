/*! Buttons Fomantic styling 4.0.0 for DataTables
 * Copyright (c) SpryMedia Ltd - datatables.net/license
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net-se', 'datatables.net-buttons'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var cjsRequires = function (root) {
			if (! root.DataTable) {
				require('datatables.net-se')(root);
			}

			if (! window.DataTable.Buttons) {
				require('datatables.net-buttons')(root);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				cjsRequires(root);
				return factory(root, root.document, root.DataTable);
			};
		}
		else {
			cjsRequires(window);
			module.exports = factory(window, window.document, window.DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';



var dom = DataTable.Dom;
var util = DataTable.util;

util.object.assignDeep(DataTable.Buttons.defaults, {
	dom: {
		container: {
			className: 'dt-buttons ui buttons'
		},
		button: {
			tag: 'button',
			active: 'active',
			className: 'dt-button ui button',
			spacerClass: 'dt-button ui button',
			dropHtml: '<i class="dropdown icon"></i>',
			dropClass: ''
		},
		collection: {
			container: {
				tag: 'div',
				className: 'ui dropdown active visible dt-button-collection',
				content: {
					className: 'resizable scrolling menu'
				}
			},
			closeButton: false,
			button: {
				tag: 'a',
				className: 'dt-button item',
				active: 'dt-button-active',
				spacer: {
					className: 'divider',
					tag: 'div'
				}
			},
			split: {
				action: {
					tag: 'div',
					className: ''
				},
				dropdown: {
					tag: 'span',
					className: 'dt-button-split-drop dropdown icon'
				},
				wrapper: {
					tag: 'div',
					className: 'dt-button-split'
				}
			}
		},
		split: {
			action: {
				tag: 'button',
				className: 'dt-button-split-drop-button ui button'
			},
			dropdown: {
				tag: 'button',
				className:
					'ui floating button dt-button-split-drop dropdown icon'
			},
			wrapper: {
				tag: 'div',
				className: 'dt-button-split buttons'
			}
		}
	}
});

dom.s(document).on('buttons-popover.dt', function () {
	var notButton = false;

	dom.s('.dtsp-panesContainer').each(function (el) {
		if (!dom.s(el).is('button')) {
			notButton = true;
		}
	});

	if (notButton) {
		dom.s('.dtsp-panesContainer').classRemove('vertical buttons');
	}
});


return DataTable;
}));
