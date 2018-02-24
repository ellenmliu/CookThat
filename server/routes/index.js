const path = require('path');
const router = require('express').Router();

router.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '../../static/templates/index.html'));
});

module.exports = router;
