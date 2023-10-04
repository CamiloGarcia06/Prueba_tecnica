odoo.define(technical_test.models), function (require) {
    "use strict";

    var models = require("point_of_sale.models");

    models.load_fields("res_partner", ["age"]);
  };
