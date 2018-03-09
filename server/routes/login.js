const path = require('path');
const router = require('express').Router();

router.get('/login', function (request, response) {
  response.sendFile(path.join(__dirname, '../../static/templates/login.html'));
});

module.exports = router;
