const Delivery = require('../models/delivery.model');

const addDelivery = async (request, response) => {

  const delivery = new Delivery(request.body);

  console.log(delivery);


  await delivery.save((error, delivery) => {
    if(error){
      response.status(500).json({ error: error.message });
      console.log(error.message)
    }
    else{
      response.status(200).
      json({
        success: true,
        delivery: delivery
      })
    }
  });
}

const getDelivery = async(request, response) => {
  try {
    User.findById(request.params.id, (error, data) => {
      if (error) {
        response.status(500).json({error: error.message});
      } else {
        response.status(200).json({
          success: true,
          delivery: delivery
        })
      }
    })
  } catch (e) {
    console.log(e);
  }
}
const getDeliveries = async (request, response) => {

  try{
    const delivery = await Delivery.find();
    response.status(200).
    json({
      success: true,
      delivery: delivery
    })
  } catch (error) {
    response.status(404).json({
      success: false,
      error: error.message
    });
  }
}

//change
const updateDelivery = async (request, response) => {
  const delivery = new Delivery(request.body);

  await Delivery.findByIdAndUpdate(request.body._id,delivery,
    (error,delivery) => {
      if(error){
        console.log(error);
        response.status(500).json({ error: error.message });
      }
      else{
        response.status(200).
        json({
          success: true,
          delivery: delivery
        })
      }
    });
}

const deleteDelivery = async (request, response) => {
  await Delivery.findByIdAndRemove(request.params.id,(error,delivery) => {
    if(error){
      response.status(500).json({ error: error.message });
    }
    else{
      response.status(200).
      json({
        success: true,
        delivery: delivery
      })
    }
  })
}




module.exports = {
  getDeliveries,
  getDelivery,
  addDelivery,
  updateDelivery,
  deleteDelivery
}