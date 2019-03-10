var express = require('express');
var router = express.Router();

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

router.use(requestTime);

router.use('/', function (req, res, next) {
  console.log('Users Page Query Params:', req.method)
  next()
});

router.get('/:queryParams?', function(req, res, next) {
  var result = req.params;
  result.requestTime = req.requestTime;

  ;
  res.send(result); 
});


router.use('/:userId/:pageId', function (req, res, next) {
  console.log('Users Page Request Type:', req.method)
  next()
});

// /* GET users listing. */
router.get('/:userId?/:pageId?', function(req, res, next) {
  // res.send('respond with a users'); 
  res.render('users', { UsersTitle: 'UsersTitle', UserId : req.params.userId });
});

module.exports = router;
