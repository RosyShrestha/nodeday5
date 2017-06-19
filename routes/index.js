var express = require('express');
var router = express.Router();

/* GET home page. */
var person={
	name:'rosy shrestha',
	age:21,
	college:'Kathford college',
	course:'csit',
	contact:'9843293216',
	fbLink:'https://www.facebook.com/rosy.shrestha.1000',
	profile:'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/10343687_835118936575929_7170659032527281755_n.jpg?oh=54b4d330226a3a0f59f17fa81e465e2c&oe=59D21679'

};

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', person });
});
router.get('/profile', function(req, res) {
  res.render('profile', { title:'PROFILE',person});
});
router.get('/add', function(req, res) {
  res.render('add');
});

module.exports = router;
