var express = require('express');
var router = express.Router();

router.use('/:id', function (req, res, next) {
  console.log('Home Page Request Type:', req.method)
  next()
});

/* GET users listing. */
router.get('/:id?', function(req, res, next) {
  // res.send('respond with a users');
  // res.send(req.params.id)
  res.render('home', { HomeTitle: 'HomeTitle' , HomePage: 'HomePage', 'Id': req.params.id});
});

module.exports = router;
