define([
    'Magento_Payment/js/view/payment/cc-form'
], function (Component) {
    'use strict';
    return Component.extend({
        defaults: {
            template: Woleks_PaymentMethod/payment/cc-form,
            code: woleks_payment_method
        },
        getCode: function () {
            return this.code;
        }
    });
});