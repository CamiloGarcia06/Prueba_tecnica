odoo.define("technical_tests.PaymentScreen", function (require) {
  "use strict";

  const PaymentScreen = require("point_of_sale.PaymentScreen");
  const Registries = require("point_of_sale.Registries");

  const PaymentScreenInherit = (PaymentScreen) =>
    class extends PaymentScreen {
      constructor() {
        super(...arguments);
      }
      showPopupTest() {
        this.showPopup("ErrorPopup", {
          title: this.env._t("Popup POS"),
          body: this.env._t(
            "There is already an electronic payment in progress."
          ),
        });
        return false;
      }
    };

  Registries.Component.extend(PaymentScreen, PaymentScreenInherit);

  return PaymentScreen;
});

