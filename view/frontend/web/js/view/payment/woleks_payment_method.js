define([
    'uiComponent',
    'Magento_Checkout/js/model/payment/renderer-list'
], function (Component, rendererList) {
    'use strict';
    rendererList.push({
        type: woleks_payment_method,
        component: 'Woleks_PaymentMethod/js/view/payment/method-renderer/cc-form'
    });
    return Component.extend({});
});