const path = require('path');
const router = require('express').Router();

router.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, '../../static/templates/404.html'));
});

module.exports = router;
