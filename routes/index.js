var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var otpResult = {};
  console.log(req);
  res.json(otpResult);
  res.status('200').send();


});

module.exports = router;
