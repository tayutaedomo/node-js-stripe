var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/webhook', function(req, res, next) {
  console.log('request headers', req.headers);
  console.log('request body', JSON.stringify(req.body, null, 2));

  res.send();
});

module.exports = router;
