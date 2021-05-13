const express = require('express');

module.exports = function(app) {
   devices = [];
   const router = express.Router();
   
   router.get('/', (req, res) => {
       return res.send(devices); });
  
   router.post('/', (req, res) => {
       devices.push(req.body);
       res.status(201).end(); });

   router.get('/:id', (req, res) => {
       const device =  
         devices.filter(function(device) {
             return device.id == req.params.id; });
        return res.send(device); });
        router.put('/:id', (req, res) => {
            var device = devices.filter(function(device) {
                return device.id == req.params.id; });
            device = req.body;
            const index = devices.indexOf(device);
            devices.splice(index, 1, device);
            res.status(201).end();
        });
       
        router.delete('/:id', (req, res) => {
            const device = devices.filter(function(device) {
                      return device.id == req.params.id; });
            const index = devices.indexOf(device);
            if( index >= 0)
               app.locals.devices.splice(index, 1);
            res.status(200).end();
        });
     
        return router;
     }
     