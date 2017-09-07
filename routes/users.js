var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json([{
  	id: 1,
  	firstname: 'sampleuser1',
    lastname: 'Expressor',
  }, {
  	id: 2,
  	firstname: 'sampleuser2',
    lastname: 'Reactor',
  }]);
});

module.exports = router;
