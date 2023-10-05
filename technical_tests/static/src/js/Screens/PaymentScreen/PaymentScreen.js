odoo.define('technical_tests.PaymentScreen', function (require) {
  'use strict';

  const PaymentScreen = require('point_of_sale.PaymentScreen');
  const Registries = require('point_of_sale.Registries');

  const PaymentScreenInherit = PaymentScreen => class extends PaymentScreen {
      constructor() {
        super(...arguments);
      }
      showPopupTest() {
        this.showPopup('ErrorPopup', {
          title: 'Popup POS',
          body: 'There is already an electronic payment in progress.',
        });
      }
    };

  Registries.Component.extend(PaymentScreen, PaymentScreenInherit);

  return PaymentScreenInherit;
});
