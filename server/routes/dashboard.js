const path = require('path');
const router = require('express').Router();

router.get('/dashboard', function (request, response) {
  response.sendFile(path.join(__dirname, '../../static/templates/dashboard.html'));
});

module.exports = router;
