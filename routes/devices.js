const express = require('express');
const Device = require('../models/Device');
const router = express.Router();
   

   //GET ALL DEVICES
   router.get('/', (req, res) => {
       Device.find()
       .then((devices) => res.json(devices))
       .catch((err) => res.status(400).json("Error:" + err));
    });
  

   //ADD A DEVICE
   router.post('/', (req, res) => {
    const newDevice = new Device({
        id: req.body.id,
        name: req.body.name,
    });
    
    newDevice
    .save()
    .then(() => res.json("Device Added"))
    .catch((err) => res.status(400).json("Error : " + err));
    });

    //FIND A DEVICE BY ID(not mongo _id,but device 'id')
    router.get("/:idNbr", (req, res) => {
        Device.find({id : req.params.idNbr})
          .then((device) => res.json(device))
          .catch((err) => res.status(400).json("Device not found" + err));
      });

    //FIND A DEVICE BY ID AND UPDATE
    router.put('/:idNbr', (req, res) => {
        Device.findOneAndUpdate({id: req.params.idNbr}, {$set:{name:req.body.name}}, {new: true})
            .then((device) => res.json(device))
            .catch((err) => res.status(400).json("Device not found" + err));
    });

    //DELETE A DEVICE BY ID
    router.delete('/:idNbr', (req,res) => {
        Device.findOneAndDelete({id : req.params.idNbr})
        .then((device) => res.json(device))
        .catch((err) => res.status(400).json("Device not found" + err))
    })

     
module.exports = router;
     