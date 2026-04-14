var express = require('express');
var router = express.Router();
const carData = require('../data/cars.json')

// {"id":4,"name":"ford torino","mpg":"17","weight":"3449","origin":"usa","year":"1970"}
router.post('/', (req, res) => {
  if(!req.query.name || !req.query.mpg || !req.query.weight || !req.query.origin || !req.query.year){
    res.send({message: "Please send name, mpg, weight, origin, and year as query parameters"});
    return;
  }

  let newCar = {
    name: req.query.name,
    mpg: req.query.mpg,
    weight: req.query.weight,
    origin: req.query.origin,
    year: req.query.year,
    id: Math.floor(Math.random() * 90000)
  }

  res.send({data: newCar});

})

router.get('/', (req, res) => {
  console.log(req.query.id)
  if(!req.query.id){
    res.send({message: "Please send an id as a query parameter"});
    return;
  }

  let theCar = carData.find((el)=> el.id == req.query.id )

  if(!theCar){
    res.send({message: "There is no car with that id"});
    return;
  }

  res.send({data: theCar});
})

module.exports = router;
