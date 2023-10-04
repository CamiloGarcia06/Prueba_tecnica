odoo.define('technical_tests.TestPopup', function(require) {
    'use strict';

    const AbstractAwaitablePopup = require('point_of_sale.AbstractAwaitablePopup');
    const Registries = require('point_of_sale.Registries');
    const { _lt } = require('@web/core/l10n/translation');

    // formerly ErrorPopupWidget
    class TestPopup extends AbstractAwaitablePopup {
        constructor() {
            super(...arguments);
            this.state = UseState({
                
            });
        }
    }
    TestPopup.template = 'TestPopup';
    TestPopup.defaultProps = {
        confirmText: _lt('Ok'),
        cancelText: _lt('Cancel'),
        title: _lt('Error'),
        body: '',
    };

    Registries.Component.add(TestPopup);

    return TestPopup;
});
