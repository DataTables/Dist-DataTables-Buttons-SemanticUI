/*! Buttons Fomantic styling 4.1.3 for DataTables
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
		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}
				
				var DataTable = root.DataTable ?
					root.DataTable :
					require('datatables.net-se')(root);

				if (! root.DataTable.Buttons) {
					require('datatables.net-buttons')(root);
				}

				return factory(root, root.document, DataTable);
			};
		}
		else {
			var DataTable = window.DataTable ?
				window.DataTable :
				require('datatables.net-se');

			if (! window.DataTable.Buttons) {
				require('datatables.net-buttons');
			}

			module.exports = factory(window, window.document, DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';



var Dom = DataTable.Dom;
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

Dom.on('buttons-popover.dt', function () {
	var notButton = false;

	Dom.s('.dtsp-panesContainer').each(function (el) {
		if (!Dom.s(el).is('button')) {
			notButton = true;
		}
	});

	if (notButton) {
		Dom.s('.dtsp-panesContainer').classRemove('vertical buttons');
	}
});


return DataTable;
}));
