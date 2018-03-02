const path = require('path');
const router = require('express').Router();

router.get('/about', function (request, response) {
  response.sendFile(path.join(__dirname, '../../static/templates/about.html'));
});

module.exports = router;
