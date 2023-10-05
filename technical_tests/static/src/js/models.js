odoo.define('technical_test.Models', function (require) {
  "use strict";

  var models = require('point_of_sale.models');
  var core = require('web.core');

  models.load_fields("res_partner", ["age"]);

});