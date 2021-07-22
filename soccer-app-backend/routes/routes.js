const express = require('express');
const router = express.Router();
const teamTemplate = require('../models/teamModel')

router.get('/', (request, response) => {

    teamTemplate.find({}).exec((err, data) => {
        if(err) {
            response.json(err)
        }else {
            if(data && data.length > 0) {
                response.json(data)
            }
        }
    })
});

router.put('/update', (request, response) => {
    teamTemplate.updateOne({ _id: request.body._id }, {
        IsFavorite: request.body.isFavorite
        }, (
        err,
        result
      ) =>{
        if (err) {
            response.send(err);
        } else {
            response.json(result);
        }
      });

});



module.exports = router;