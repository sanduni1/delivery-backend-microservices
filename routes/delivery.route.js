const express = require('express');
const router = express.Router();

const DeliveryService = require('../services/delivery.service');

module.exports = () => {

  router.get('/', DeliveryService.getDeliveries);
  router.get('/:id', DeliveryService.getDelivery);
  router.post('/', DeliveryService.addDelivery);
  router.put('/', DeliveryService.updateDelivery);
  router.delete('/:id', DeliveryService.deleteDelivery);

  return router;
}